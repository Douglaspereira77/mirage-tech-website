import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getAuth() {
    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!credentials) {
        console.warn('GOOGLE_SERVICE_ACCOUNT_KEY not set — skipping Google Sheets');
        return null;
    }

    try {
        const parsed = JSON.parse(credentials);
        return new google.auth.GoogleAuth({
            credentials: parsed,
            scopes: SCOPES,
        });
    } catch (e) {
        console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY:', e);
        return null;
    }
}

export interface LeadRow {
    name: string;
    email: string;
    phone: string;
    businessType: string;
    painPoint: string;
}

/**
 * Appends a lead row to the configured Google Sheet.
 * Silently skips if credentials or sheet ID are not configured.
 */
export async function appendLeadToSheet(lead: LeadRow): Promise<boolean> {
    const auth = getAuth();
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!auth || !sheetId) {
        console.warn('Google Sheets not configured — lead not saved to sheet');
        return false;
    }

    try {
        const sheets = google.sheets({ version: 'v4', auth });
        const timestamp = new Date().toISOString();

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Leads!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    lead.name,
                    lead.email,
                    lead.phone,
                    lead.businessType,
                    lead.painPoint,
                    timestamp,
                ]],
            },
        });

        console.log(`Lead saved to Google Sheet: ${lead.email}`);
        return true;
    } catch (error) {
        console.error('Google Sheets append error:', error);
        return false;
    }
}
