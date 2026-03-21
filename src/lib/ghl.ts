export async function createGHLContact(contactData: {
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    companyName?: string;
    website?: string;
    tags?: string[];
    customFields?: Record<string, any>;
}) {
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
        console.error("GHL_API_KEY or GHL_LOCATION_ID not found in environment variables");
        return { success: false, error: "GHL config missing" };
    }

    try {
        console.log("Pushing lead to GoHighLevel CRM (Location: " + locationId + ")...");

        // 1. Create/Update Contact
        const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Version": "2021-07-28"
            },
            body: JSON.stringify({
                locationId: locationId,
                firstName: contactData.firstName || "Website",
                lastName: contactData.lastName || "Lead",
                email: contactData.email,
                phone: contactData.phone,
                companyName: contactData.companyName,
                website: contactData.website,
                tags: contactData.tags || ["Website Lead"]
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("GHL Contact POST Error:", result);
            return { success: false, error: result.message || "GHL API error" };
        }

        const contactId = result.contact?.id;
        console.log("Successfully pushed contact to GHL:", contactId);

        // 2. Add detailed data as a Note (More reliable than custom fields without field IDs)
        if (contactData.customFields && contactId) {
            const noteContent = Object.entries(contactData.customFields)
                .map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`)
                .join("\n");

            try {
                await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        "Version": "2021-07-28"
                    },
                    body: JSON.stringify({
                        body: `Website Form Data:\n${noteContent}`
                    })
                });
                console.log("Added data note to GHL contact.");
            } catch (noteError) {
                console.error("Error adding GHL note:", noteError);
            }
        }

        return { success: true, contactId };
    } catch (error: any) {
        console.error("Unexpected error pushing to GHL:", error);
        return { success: false, error: error.message || "GHL Integration failed" };
    }
}
