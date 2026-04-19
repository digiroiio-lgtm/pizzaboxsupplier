import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.companyName || !body.businessEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // buyerSegment is captured for downstream routing (CRM / email follow-up flow)
  // body.buyerSegment: "distributor" | "chain" | "importer" | "ghost-kitchen" | "wholesale" | "other"

  return NextResponse.json({ ok: true });
}
