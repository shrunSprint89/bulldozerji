import { fetchUpstoxData } from "@/lib/server/upstoxApi";
import { log } from "@/lib/shared/Logger";
import { NextResponse } from "next/server";

export async function GET() {
  const resp = await fetchUpstoxData();
  log(resp);
  return NextResponse.json(resp);
}
