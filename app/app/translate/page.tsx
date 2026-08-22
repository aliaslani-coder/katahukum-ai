import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { text, sourceLang, targetLang } = await req.json();
    
    if (!text || text.length > 30000) {
      return NextResponse.json({ error: 'Text empty or too long (max 30,000 chars)' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
You are KataHukum AI — Malaysia's premier legal & business translator.

📋 STRICT RULES — FOLLOW 100%:
1. 🇲🇾 USE ONLY STANDARD MALAYSIAN MALAY (Bahasa Melayu rasmi DBP) — NEVER Indonesian.
2. 📄 Preserve ALL formatting: paragraphs, bullet points, structure.
3. ⚖️ Use official Malaysia legal/business terminology consistently.
4. 🔁 Same word = same translation EVERY time.
5. ❌ Do NOT add explanations, do NOT simplify.
6. ⚠️ If unsure → mark [?] — NEVER guess legal terms.
7. 🔢 Keep numbers, dates, names UNCHANGED.

📖 OFFICIAL TERMINOLOGY:
Contract ↔ Perjanjian | Agreement ↔ Persetujuan | Clause ↔ Fasal
Party ↔ Pihak | Liability ↔ Tanggungjawab | Confidentiality ↔ Kerahsiaan
Governing Law ↔ Undang-Undang Yang Mentadbir | Schedule ↔ Jadual

Translate from ${sourceLang} to ${targetLang}:
${text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translation = response.text();

    return NextResponse.json({ translation });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Translation failed: ' + err.message }, { status: 500 });
  }
}
