"use client";

import { useState } from "react";
import { useT } from "@/library/use-t";

export function CartCounter({ lang }: { lang: string }) {
  const [count, setCount] = useState(1);
  const { t } = useT("common");

  return (
    <div className="demo-card">
      <div className="demo-card-label">п.4 · Pluralization</div>
      <h3>Множественные формы</h3>
      <div className="counter-row">
        <button className="counter-btn" onClick={() => setCount((c) => Math.max(0, c - 1))}>−</button>
        <span className="counter-display">{count}</span>
        <button className="counter-btn" onClick={() => setCount((c) => c + 1)}>+</button>
        <span className="count-badge">{t("home.itemsInCart", { count })}</span>
      </div>
      <p style={{ marginTop: ".75rem", fontSize: ".78rem", color: "var(--text-light)" }}>
        one / few / many / other — автоматически
      </p>
    </div>
  );
}
