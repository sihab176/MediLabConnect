
import { NextResponse } from "next/server";

export async function POST(req) {
  const { note } = await req.json();
  if (!note) {
    return NextResponse.json({ error: "note missing" }, { status: 400 });
  }

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemma-3-27b-it:free",
        messages: [
          { role: "user", content: note }
        ]
      })
    });

    const data = await r.json();

    console.log("RAW RESPONSE FROM OPENROUTER:", data);

    // OpenRouter returns: data.choices[0].message.content
    const text = data?.choices?.[0]?.message?.content;

    return NextResponse.json({
      text: text || "No response from model"
    });

  } catch (err) {
    console.error("OpenRouter error:", err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { note } = await req.json();
//   if (!note) {
//     return NextResponse.json({ error: "note missing" }, { status: 400 });
//   }

//   try {

//     const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "google/gemini-flash-1.5",
//         messages: [
//           { role: "user", content: note }
//         ]
//       })
//     });

//     const data = await r.json();

//     console.log("RAW RESPONSE FROM OPENROUTER:", data);

//     const text = data?.choices?.[0]?.message?.content;

//     return NextResponse.json({
//       text: text || "No response from model"
//     });

//   } catch (err) {
//     console.error("OpenRouter error:", err);
//     return NextResponse.json({ error: "server error" }, { status: 500 });
//   }
// }

