import Link from "next/link";
import Image from "next/image";
import { getT } from "@/library/get-t";
import { products } from "@/library/products";

export default async function ProductsPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const { t } = await getT("common", lang);
  const isRu = lang === "ru";

  return (
    <div>
      <div className="section-header">
        <h2 className="page-title">{t("products.title")}</h2>
        <p className="page-subtitle">{t("products.subtitle")}</p>
      </div>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image-wrap">
              <Image
                src={p.image}
                alt={isRu ? p.nameRu : p.nameEn}
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="product-body">
              <div className="product-category">
                {isRu ? p.categoryRu : p.category}
              </div>
              <div className="product-name">
                {isRu ? p.nameRu : p.nameEn}
              </div>
              <div className="product-footer">
                <span className="product-price">
                  {t("products.price", { price: isRu ? p.priceRu : p.priceEn })}
                </span>
                <span className={`product-stock${p.stock === 0 ? " out" : ""}`}>
                  {p.stock === 0
                    ? t("products.outOfStock")
                    : t("products.inStock", { count: p.stock })}
                </span>
              </div>
            </div>
            <div className="product-actions">
              <Link href={`/${lang}/products/${p.id}`} className="btn btn-dark btn-sm">
                {t("products.viewDetails")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
