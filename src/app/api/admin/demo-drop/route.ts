import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const execAsync = promisify(exec);

export async function POST(req: Request) {
    try {
        const { leadId, name, category } = await req.json();

        if (!leadId || !name) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const safeLeadId = leadId.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();

        // Remotion project path is expected to be adjacent to mirage-tech
        const remotionDir = path.resolve(process.cwd(), "..", "Remotion", "my-video");
        const outputFileName = `demo-${safeLeadId}.mp4`;
        const outputPath = path.resolve(process.cwd(), "public", "demos", outputFileName);

        // Ensure demos directory exists
        const demosDir = path.dirname(outputPath);
        if (!fs.existsSync(demosDir)) {
            fs.mkdirSync(demosDir, { recursive: true });
        }

        // Ensure Remotion 'out' directory exists
        const remotionOutDir = path.join(remotionDir, "out");
        if (!fs.existsSync(remotionOutDir)) {
            fs.mkdirSync(remotionOutDir, { recursive: true });
        }

        // Prepare props file in the 'out' directory of Remotion
        const propsOutputPath = path.join(remotionOutDir, `props-${safeLeadId}.json`);

        // Props for the DemoDrop composition
        const props = {
            clientName: name,
            clientCategory: category || "Business",
        };

        fs.writeFileSync(propsOutputPath, JSON.stringify(props));

        // Fix path separators for Windows shell compatibility when wrapping in quotes, or just use absolute paths without quotes if no spaces
        const command = `npx remotion render DemoDrop "${outputPath}" --props="${propsOutputPath}"`;

        console.log(`Running Remotion: ${command}`);

        // Run the command in the Remotion directory
        const { stdout, stderr } = await execAsync(command, { cwd: remotionDir });

        console.log("Remotion render complete:", stdout);
        if (stderr) console.error("Remotion stderr:", stderr);

        // Clean up props file
        if (fs.existsSync(propsOutputPath)) {
            fs.unlinkSync(propsOutputPath);
        }

        // Note: We can send an email with resend here in the future
        return NextResponse.json({ success: true, videoUrl: `/demos/${outputFileName}` });

    } catch (error: any) {
        console.error("Demo drop error:", error);
        return NextResponse.json({ error: error.message || "Failed to generate video" }, { status: 500 });
    }
}
