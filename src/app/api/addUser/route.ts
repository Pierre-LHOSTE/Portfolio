import { Client } from "@neondatabase/serverless";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userAgent, ip, isBot } = req.body;
  if (!userAgent || !ip || typeof isBot !== "boolean") {
    return res.status(400).json({ success: false, error: "Invalid data" });
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const query = `
      INSERT INTO users (user_agent, ip, date, is_bot, count)
      VALUES ($1, $2, NOW(), $3, 1)
      ON CONFLICT (ip)
      DO UPDATE SET count = users.count + 1
    `;
    await client.query(query, [userAgent, ip, isBot]);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ success: false });
  } finally {
    await client.end();
  }
}
