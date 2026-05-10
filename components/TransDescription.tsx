"use client";

import { Trans } from "react-i18next";
import { useT } from "@/library/use-t";

// Задание п.3: Trans компонент с встроенными React-элементами
export function TransDescription({ lang }: { lang: string }) {
  const { t } = useT("common");

  return (
    <div className="demo-card">
      <h3>Trans Component <span className="tag">п.3</span></h3>
      <div className="interp-demo">
        <p className="interp-line">
          <Trans
            i18nKey="home.description"
            ns="common"
            components={{
              bold: <b />,
              italic: <i />,
            }}
          />
        </p>
      </div>
    </div>
  );
}
