"use client";

import { useRouter, usePathname } from "next/navigation";
import { LANGUAGES } from "@/library/i18n-config";

export function LangSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLang: string) => {
    // Replace the language segment in the current path
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    // Set cookie
    document.cookie = `i18next=${newLang}; path=/; max-age=31536000`;
    router.push(newPath);
  };

  return (
    <div className="lang-switcher">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLang(lang)}
          className={`lang-btn${lang === currentLang ? " active" : ""}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
