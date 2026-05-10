import { getT } from "@/library/get-t";
import { TransFooter } from "./TransFooter";

export async function Footer({ lang }: { lang: string }) {
  const { t } = await getT("common", lang);

  return (
    <footer className="footer">
      <span>© 2024 TechStore. {t("footer.rights")}</span>
      <TransFooter lang={lang} />
    </footer>
  );
}
