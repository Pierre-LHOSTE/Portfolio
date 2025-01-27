import { Client } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  const { userAgent, ip, isBot } = await request.json();
  if (!userAgent || !ip || typeof isBot !== "boolean") {
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }

  try {
    await client.connect();
    const today = new Date().toISOString().split("T")[0];
    const query = `
      INSERT INTO users (user_agent, ip, date, is_bot, count)
      VALUES ($1, $2, NOW(), $3, 1)
      ON CONFLICT (ip)
      DO UPDATE SET count = users.count + 1
    `;
    await client.query(query, [userAgent, ip, isBot]);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  } finally {
    if (client) {
      await client.end();
    }
  }
}
