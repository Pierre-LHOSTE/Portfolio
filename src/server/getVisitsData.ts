"use server";
import { Client } from "@neondatabase/serverless";

export async function getVisitsData(): Promise<{ [date: string]: number }> {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT date::timestamptz, count FROM visits");
    const data = res.rows;

    const visits = data.reduce((acc: { [date: string]: number }, { date, count }) => {
      const d = new Date(date);
      acc[d.toISOString().split("T")[0]] = count;
      return acc;
    }, {});

    return visits;
  } catch (error) {
    console.error("Error getting visits data:", error);
    return {};
  } finally {
    await client.end();
  }
}
