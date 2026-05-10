"use client";

import { Trans } from "react-i18next";
import { useT } from "@/library/use-t";

// Задание п.3: использование компонента Trans для сложной разметки
export function TransFooter({ lang }: { lang: string }) {
  useT("common"); // инициализируем хук для синхронизации языка
  return (
    <p>
      <Trans
        i18nKey="footer.madeWith"
        ns="common"
        components={{
          heart: <span className="heart" />,
        }}
      />
    </p>
  );
}
