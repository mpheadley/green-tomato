import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type SubmitBody = {
  slug?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(req: Request) {
  let body: SubmitBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const slug = asTrimmedString(body.slug, 200);
  const name = asTrimmedString(body.name, 100);
  const message = asTrimmedString(body.message, 2000);
  const emailRaw = typeof body.email === "string" ? body.email.trim() : "";
  const email = emailRaw.length > 0 && emailRaw.length <= 200 ? emailRaw : null;

  if (!slug || !name || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("comments").insert({
    slug,
    name,
    email,
    message,
    approved: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
