async function testGHLV2Hardcoded() {
    const apiKey = "pit-85a53a61-8b89-4601-ae72-bc2c20ac98cd";
    const locationId = "eJ0JCOGEyTSVXs6hzKYk";

    console.log("Testing GHL V2 PIT with Location:", locationId);

    const data = {
        locationId: locationId,
        firstName: "Douglas",
        lastName: "Pereira (Fix Test)",
        email: "douglas.fix@example.com",
        phone: "+96555554444",
        tags: ["Test Lead", "PIT Fixed"]
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
        } else {
             console.log("FAILED to create contact.");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

testGHLV2Hardcoded();
