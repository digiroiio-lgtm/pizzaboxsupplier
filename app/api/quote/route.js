import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.companyName || !body.businessEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
