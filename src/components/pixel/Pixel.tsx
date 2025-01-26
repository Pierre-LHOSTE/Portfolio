import { getVisitsData } from "@/server/getVisitsData";
import { useEffect, useState } from "react";
import "./pixel.scss";
import { useI18nContext } from "@/i18n/i18n-react";

const DAYS_IN_WEEK = 7;

function getLevel(count: number, min: number, max: number) {
  if (count === 0) return 1;
  const range = max - min || 1;
  const normalized = (count - min) / range;

  if (normalized <= 0.25) return 2;
  if (normalized <= 0.5) return 3;
  if (normalized <= 0.75) return 4;
  return 5;
}

export default function Pixel() {
  const [gridData, setGridData] = useState<{ date: string; count: number; level: number }[]>([]);
  const { LL } = useI18nContext();

  useEffect(() => {
    (async () => {
      const visitsData = await getVisitsData();
      console.log("🚀 ~ visitsData:", visitsData);
      const today = new Date();
      const startDate = new Date(Date.UTC(today.getFullYear(), 0, 1));
      const endDate = new Date(Date.UTC(today.getFullYear(), 11, 31));

      const firstDayOffset = startDate.getDay();
      const grid: { date: string; count: number }[] = [];

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateString = d.toISOString().split("T")[0];
        grid.push({
          date: dateString,
          count: visitsData[dateString] || 0,
        });
      }

      for (let i = 0; i < firstDayOffset; i++) {
        grid.unshift({ date: "", count: 0 });
      }
      while (grid.length % DAYS_IN_WEEK !== 0) {
        grid.push({ date: "", count: 0 });
      }

      const counts = grid.map((data) => data.count);
      const min = Math.min(...counts.filter((c) => c > 0));
      const max = Math.max(...counts);

      setGridData(grid.map((data) => ({ ...data, level: getLevel(data.count, min, max) })));
    })();
  }, []);

  return (
    <section id="pixel">
      <table>
        <tbody>
          {Array.from({ length: DAYS_IN_WEEK }).map((_, dayIndex) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={dayIndex}>
              {gridData
                .filter((_, index) => index % DAYS_IN_WEEK === dayIndex)
                .map(({ date, count, level }, colIndex) => (
                  <td
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={colIndex}
                    title={
                      date
                        ? LL.visitors({
                            count,
                            date: new Date(date).toLocaleDateString(),
                          })
                        : ""
                    }
                    className={date ? "" : "empty"}
                  >
                    <div className={`pixel level-${level}`} />
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
