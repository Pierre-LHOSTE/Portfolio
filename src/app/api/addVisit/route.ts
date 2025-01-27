import { Client } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });

  try {
    await client.connect();
    const today = new Date().toISOString().split("T")[0];
    const query = `
      INSERT INTO visits (date, count)
      VALUES ($1, 1)
      ON CONFLICT (date)
      DO UPDATE SET count = visits.count + 1
    `;
    await client.query(query, [today]);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error incrementing visit count:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  } finally {
    if (client) {
      await client.end();
    }
  }
}
