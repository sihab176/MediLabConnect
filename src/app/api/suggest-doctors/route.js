import { fetchData } from "@/components/CardContainer/CardContainer";
import { openai } from "@/components/historyList/OpenAiModel";
import { AIDoctorAgents } from "@/shared/list";
import { NextResponse } from "next/server";

export async function POST(req) {

    const DoctorData= await fetchData()

    try {
        const { note } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "google/gemma-3-27b-it:free",
            messages: [
                {
                    role: "system",
                    content: `
You are a medical AI. 
Below is a doctor list with all keys:

${JSON.stringify(DoctorData)}

⚠️ IMPORTANT:
- Based on user symptoms, pick the matching doctors.
- Return FULL OBJECT of each selected doctor.
- Do NOT remove any keys.
- Add ONLY one new key: "reason".
- Output MUST be valid JSON array only.
`
                },
                {
                    role: "user",
                    content: `User symptoms: ${note}. 
Return full doctor objects + reason (JSON only).`
                }
            ]
        });

        // Extract content
        let raw = completion.choices[0].message?.content || "";

        // Clean JSON
        let clean = raw
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        const json = JSON.parse(clean);

        return NextResponse.json(json);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
