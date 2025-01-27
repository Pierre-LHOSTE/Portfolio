"use server";
import { Client } from "@neondatabase/serverless";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
})();

export async function getVisitsData(): Promise<{ [date: string]: number }> {
  const res = await client.query("SELECT date::timestamptz, count FROM visits");
  const data = res.rows;

  const visits = data.reduce((acc: { [date: string]: number }, { date, count }) => {
    const d = new Date(date);
    acc[d.toISOString().split("T")[0]] = count;
    return acc;
  }, {});

  return visits;
}
