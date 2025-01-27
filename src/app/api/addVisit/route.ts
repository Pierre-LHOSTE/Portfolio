import { Client } from "@neondatabase/serverless";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
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
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error incrementing visit count:", error);
    res.status(500).json({ success: false });
  } finally {
    await client.end();
  }
}
