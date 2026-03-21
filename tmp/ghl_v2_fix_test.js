const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testGHL() {
    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    console.log("Testing GHL with Location:", locationId);

    const data = {
        locationId: locationId,
        firstName: "Douglas",
        lastName: "Pereira (Test)",
        email: "douglas.test@example.com",
        phone: "+96512345678",
        tags: ["Test Lead", "Antigravity Fix"]
    };

    try {
        const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Version": "2021-07-28"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("Status:", response.status);
        console.log("Result:", JSON.stringify(result, null, 2));

        if (response.ok && result.contact?.id) {
            console.log("SUCCESS! Contact ID:", result.contact.id);
            
            // Test Note
            const noteResp = await fetch(`https://services.leadconnectorhq.com/contacts/${result.contact.id}/notes`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                    "Version": "2021-07-28"
                },
                body: JSON.stringify({ body: "Test Note from AI Fix" })
            });
            console.log("Note Status:", noteResp.status);
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

testGHL();
