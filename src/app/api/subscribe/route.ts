import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type SubscribeBody = {
  email?: unknown;
  firstName?: unknown;
  source?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: SubscribeBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const emailRaw = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!emailRaw || emailRaw.length > 200 || !EMAIL_RE.test(emailRaw)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const firstName =
    typeof body.firstName === "string" && body.firstName.trim().length > 0
      ? body.firstName.trim().slice(0, 100)
      : null;

  const source =
    typeof body.source === "string" && body.source.trim().length > 0
      ? body.source.trim().slice(0, 50)
      : "unknown";

  const { error } = await supabase
    .from("subscribers")
    .upsert(
      { email: emailRaw, first_name: firstName, source },
      { onConflict: "email" },
    );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
