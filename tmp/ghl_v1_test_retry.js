const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testGHLV1() {
    const apiKey = process.env.GHL_API_KEY;
    console.log("Testing GHL V1 with Key:", apiKey.substring(0, 10) + "...");

    const data = {
        firstName: "Douglas",
        lastName: "Pereira (V1 Test)",
        email: "douglas.v1@example.com",
        phone: "+96511112222",
        tags: ["Test V1"]
    };

    try {
        const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("Status:", response.status);
        console.log("Result:", JSON.stringify(result, null, 2));
    } catch (e) {
        console.error("Error:", e);
    }
}

testGHLV1();
