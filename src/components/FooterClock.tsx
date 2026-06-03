"use client";

import { useEffect, useState } from "react";

export default function FooterClock({ openLabel, closedLabel }: { openLabel: string; closedLabel: string }) {
  const [display, setDisplay] = useState<{ time: string; open: boolean } | null>(null);

  useEffect(() => {
    function tick() {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Madrid",
        hour: "2-digit", minute: "2-digit", hour12: false, weekday: "short",
      }).formatToParts(new Date());

      const hh = parts.find((p) => p.type === "hour")?.value ?? "00";
      const mm = parts.find((p) => p.type === "minute")?.value ?? "00";
      const wd = parts.find((p) => p.type === "weekday")?.value ?? "";
      const hour = parseInt(hh, 10);
      const isOpen = !["Sat", "Sun"].includes(wd) && hour >= 9 && hour < 18;
      setDisplay({ time: `${hh}:${mm}`, open: isOpen });
    }
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!display) return null;

  return (
    <span className="ft-bottom-text ft-clock">
      {display.open ? (
        <span className="ft-pulse" />
      ) : (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--d-fg-mut)", flexShrink: 0, display: "inline-block" }} />
      )}
      {display.open ? openLabel : closedLabel} · {display.time} CET
    </span>
  );
}
