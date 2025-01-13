"use server";
import { kv } from "@vercel/kv";

export async function getVisitsData(): Promise<{ [date: string]: number }> {
  const keys = await kv.keys("visits:*");
  const data = await Promise.all(
    keys.map(async (key) => {
      const count = await kv.get<number>(key);
      const date = key.split(":")[1];
      return { date, count: count || 0 };
    })
  );

  return data.reduce((acc: { [date: string]: number }, { date, count }) => {
    acc[date] = count;
    return acc;
  }, {});
}
