import Link from "next/link";
import { getT } from "@/library/get-t";
import { LangSwitcher } from "./LangSwitcher";

export async function NavBar({ lang }: { lang: string }) {
  const { t } = await getT("common", lang);

  return (
    <nav className="navbar">
      <Link href={`/${lang}`} className="navbar-brand">
        Tech<span>Store</span>
      </Link>
      <div className="navbar-links">
        <Link href={`/${lang}`}>{t("nav.home")}</Link>
        <Link href={`/${lang}/products`}>{t("nav.products")}</Link>
        <Link href={`/${lang}`}>{t("nav.about")}</Link>
      </div>
      <LangSwitcher currentLang={lang} />
    </nav>
  );
}
