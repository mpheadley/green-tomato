import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("comments")
    .select("id, name, message, created_at")
    .eq("slug", slug)
    .eq("approved", true)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ comments: [], error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comments: data ?? [] });
}
