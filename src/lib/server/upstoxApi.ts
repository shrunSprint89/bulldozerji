// lib/server/upstox.ts
export async function fetchUpstoxData() {
  const res = await fetch(
    "https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE848E01016/day/2025-04-12/2025-03-19"
  );
  if (!res.ok) throw new Error("Failed to fetch Upstox data");
  return res.json();
}
