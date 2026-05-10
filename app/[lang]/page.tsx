import Link from "next/link";
import { getT } from "@/library/get-t";
import { CartCounter } from "@/components/CartCounter";
import { TransDescription } from "@/components/TransDescription";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const { t } = await getT("common", lang);

  return (
    <div>
      <section className="hero">
        <div className="hero-eyebrow">Lab #7 — i18n</div>
        <h1>{t("home.title", { name: "Student" })}</h1>
        <p>{t("home.subtitle")}</p>
        <div className="hero-actions">
          <Link href={`/${lang}/products`} className="btn btn-dark">
            {t("home.viewProducts")} →
          </Link>
          <Link href={`/${lang}`} className="btn btn-ghost">
            {t("home.learnMore")}
          </Link>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem" }}>
        <div className="section-header">
          <h2>Демонстрация возможностей i18next</h2>
        </div>

        <div className="demo-grid">
          {/* п.1 */}
          <div className="demo-card">
            <div className="demo-card-label">п.1 · Resources</div>
            <h3>Пространства имён</h3>
            <p style={{ fontSize: ".875rem", color: "var(--text-muted)", marginBottom: ".75rem" }}>
              Файл: <code>locales/{lang}/common.json</code>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
              {["nav.home", "nav.products", "nav.about"].map((key) => (
                <span key={key} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "6px", padding: ".2rem .6rem", fontSize: ".8rem" }}>
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* п.2 */}
          <div className="demo-card">
            <div className="demo-card-label">п.2 · Interpolation</div>
            <h3>Динамические значения</h3>
            <div className="interp-demo">
              <p className="interp-line">{t("home.title", { name: "Alice" })}</p>
              <p className="interp-line">{t("products.price", { price: "89 999" })}</p>
              <p className="interp-line">{t("products.inStock", { count: 12 })}</p>
            </div>
          </div>

          {/* п.3 */}
          <TransDescription lang={lang} />

          {/* п.4 */}
          <CartCounter lang={lang} />
        </div>
      </div>
    </div>
  );
}
