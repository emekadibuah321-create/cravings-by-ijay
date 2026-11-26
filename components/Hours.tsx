"use client";
import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

export default function Hours() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(new Date().getDay()), []);
  return (
    <table>
      <tbody>
        {hours.map((h) => (
          <tr key={h.day} className={h.d === today ? "today" : undefined}>
            <td>{h.day}</td><td>{h.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
