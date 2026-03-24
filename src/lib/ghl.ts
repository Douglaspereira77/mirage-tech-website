const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

function getGHLHeaders() {
    const apiKey = process.env.GHL_API_KEY;
    if (!apiKey) throw new Error("GHL_API_KEY not set");
    return {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Version": GHL_VERSION,
    };
}

// ─── 1. Create or Update a Contact ────────────────────────────────────────────
export async function createGHLContact(contactData: {
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    companyName?: string;
    website?: string;
    tags?: string[];
    customFields?: Record<string, any>;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
    const locationId = process.env.GHL_LOCATION_ID;
    if (!locationId) return { success: false, error: "GHL_LOCATION_ID not set" };

    try {
        console.log(`[GHL] Creating/updating contact: ${contactData.email}`);

        const response = await fetch(`${GHL_BASE}/contacts/`, {
            method: "POST",
            headers: getGHLHeaders(),
            body: JSON.stringify({
                locationId,
                firstName: contactData.firstName || "Website",
                lastName: contactData.lastName || "Lead",
                email: contactData.email,
                phone: contactData.phone,
                companyName: contactData.companyName,
                website: contactData.website,
                tags: contactData.tags || ["Website Lead"],
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("[GHL] Contact error:", result);
            return { success: false, error: result.message || "GHL Contact API error" };
        }

        const contactId = result.contact?.id;
        console.log(`[GHL] Contact created: ${contactId}`);

        // Add extra data as a note (more reliable than custom fields without GHL field IDs)
        if (contactData.customFields && contactId) {
            const noteContent = Object.entries(contactData.customFields)
                .map(([key, value]) => `${key.replace(/_/g, " ").toUpperCase()}: ${value}`)
                .join("\n");

            await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
                method: "POST",
                headers: getGHLHeaders(),
                body: JSON.stringify({ body: `📋 Website Form Data:\n\n${noteContent}` }),
            }).catch((e) => console.error("[GHL] Note error:", e));
        }

        return { success: true, contactId };
    } catch (error: any) {
        console.error("[GHL] Unexpected contact error:", error.message);
        return { success: false, error: error.message };
    }
}

// ─── 2. Create an Opportunity (Deal) in the Pipeline ──────────────────────────
export async function createGHLOpportunity(data: {
    contactId: string;
    name: string;
    stageId?: string;
    monetaryValue?: number;
    source?: string;
}): Promise<{ success: boolean; opportunityId?: string; error?: string }> {
    const locationId = process.env.GHL_LOCATION_ID;
    const pipelineId = process.env.GHL_PIPELINE_ID;

    if (!locationId || !pipelineId) {
        console.error("[GHL] Missing locationId or pipelineId for opportunity");
        return { success: false, error: "GHL pipeline config missing" };
    }

    try {
        console.log(`[GHL] Creating opportunity for contact: ${data.contactId}`);

        const response = await fetch(`${GHL_BASE}/opportunities/`, {
            method: "POST",
            headers: getGHLHeaders(),
            body: JSON.stringify({
                pipelineId,
                locationId,
                name: data.name,
                pipelineStageId: data.stageId, // undefined = first stage by default
                contactId: data.contactId,
                monetaryValue: data.monetaryValue || 0,
                source: data.source || "Website",
                status: "open",
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("[GHL] Opportunity error:", result);
            return { success: false, error: result.message || "GHL Opportunity API error" };
        }

        const opportunityId = result.opportunity?.id;
        console.log(`[GHL] Opportunity created: ${opportunityId}`);
        return { success: true, opportunityId };
    } catch (error: any) {
        console.error("[GHL] Unexpected opportunity error:", error.message);
        return { success: false, error: error.message };
    }
}

// ─── 3. Fetch Recent Contacts for Admin CRM View ──────────────────────────────
export async function getGHLContacts(limit = 20): Promise<{
    success: boolean;
    contacts?: GHLContact[];
    error?: string;
}> {
    const locationId = process.env.GHL_LOCATION_ID;
    if (!locationId) return { success: false, error: "GHL_LOCATION_ID not set" };

    try {
        const params = new URLSearchParams({
            locationId,
            limit: String(limit),
            sortBy: "date_added",
            sortDirection: "desc",
        });

        const response = await fetch(`${GHL_BASE}/contacts/?${params}`, {
            method: "GET",
            headers: getGHLHeaders(),
            next: { revalidate: 60 }, // cache for 60s
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("[GHL] Contacts fetch error:", result);
            return { success: false, error: result.message || "GHL Contacts API error" };
        }

        return { success: true, contacts: result.contacts || [] };
    } catch (error: any) {
        console.error("[GHL] Unexpected contacts error:", error.message);
        return { success: false, error: error.message };
    }
}

// ─── 4. Fetch Opportunities for Admin CRM View ────────────────────────────────
export async function getGHLOpportunities(limit = 20): Promise<{
    success: boolean;
    opportunities?: GHLOpportunity[];
    total?: number;
    error?: string;
}> {
    const locationId = process.env.GHL_LOCATION_ID;
    const pipelineId = process.env.GHL_PIPELINE_ID;
    if (!locationId || !pipelineId) return { success: false, error: "GHL config missing" };

    try {
        const params = new URLSearchParams({
            location_id: locationId,
            pipeline_id: pipelineId,
            limit: String(limit),
        });

        const response = await fetch(`${GHL_BASE}/opportunities/search?${params}`, {
            method: "GET",
            headers: getGHLHeaders(),
            next: { revalidate: 60 },
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("[GHL] Opportunities fetch error:", result);
            return { success: false, error: result.message || "GHL Opportunities API error" };
        }

        return {
            success: true,
            opportunities: result.opportunities || [],
            total: result.meta?.total || 0,
        };
    } catch (error: any) {
        console.error("[GHL] Unexpected opportunities error:", error.message);
        return { success: false, error: error.message };
    }
}

// ─── Types ────────────────────────────────────────────────────────────────────
export type GHLContact = {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    tags?: string[];
    dateAdded?: string;
    locationId?: string;
};

export type GHLOpportunity = {
    id: string;
    name: string;
    status: "open" | "won" | "lost" | "abandoned";
    monetaryValue?: number;
    pipelineStageId?: string;
    pipelineStageName?: string;
    contact?: {
        id: string;
        name?: string;
        email?: string;
        phone?: string;
    };
    source?: string;
    createdAt?: string;
    updatedAt?: string;
};
