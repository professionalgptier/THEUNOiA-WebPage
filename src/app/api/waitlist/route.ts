import { NextResponse } from "next/server";

/**
 * Waitlist / apply / register submissions land here.
 *
 * This is a stub: it validates the payload and logs it on the server.
 * Replace the `console.log` with your provider of choice before launch
 * (e.g. Google Sheets via Apps Script, Airtable, Notion, Resend, or a database).
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  const submission = {
    email,
    name: typeof body.name === "string" ? body.name.trim().slice(0, 120) : undefined,
    phone: typeof body.phone === "string" ? body.phone.trim().slice(0, 32) : undefined,
    city: typeof body.city === "string" ? body.city.trim().slice(0, 80) : undefined,
    role: typeof body.role === "string" ? body.role.slice(0, 40) : undefined,
    program: typeof body.program === "string" ? body.program.slice(0, 40) : undefined,
    variant: typeof body.variant === "string" ? body.variant.slice(0, 20) : undefined,
    receivedAt: new Date().toISOString(),
  };

  console.log("[waitlist]", JSON.stringify(submission));

  return NextResponse.json({ ok: true });
}
