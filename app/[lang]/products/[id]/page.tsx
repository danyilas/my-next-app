import Link from "next/link";
import Image from "next/image";
import { getT } from "@/library/get-t";
import { products } from "@/library/products";
import { LANGUAGES } from "@/library/i18n-config";

export async function generateStaticParams() {
  return LANGUAGES.flatMap((lang) =>
    products.map((p) => ({ lang, id: p.id }))
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: { lang: string; id: string };
}) {
  const { lang, id } = params;
  const { t } = await getT("common", lang);
  const product = products.find((p) => p.id === id);
  const isRu = lang === "ru";

  if (!product) {
    return <p>{t("products.notFound")}</p>;
  }

  return (
    <div>
      <Link href={`/${lang}/products`} className="back-link">
        ← {t("products.backToList")}
      </Link>

      <div className="product-detail-grid">
        <div className="product-detail-image">
          <Image
            src={product.image}
            alt={isRu ? product.nameRu : product.nameEn}
            width={600}
            height={600}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="product-detail-info">
          <div className="product-category">
            {isRu ? product.categoryRu : product.category}
          </div>
          <h1>{isRu ? product.nameRu : product.nameEn}</h1>

          <div className="divider" />

          <div className="product-detail-price">
            {t("products.price", { price: isRu ? product.priceRu : product.priceEn })}
          </div>

          <div className={`product-detail-stock${product.stock === 0 ? " out" : ""}`}>
            {product.stock === 0
              ? t("products.outOfStock")
              : t("products.inStock", { count: product.stock })}
          </div>

          <div className="divider" />

          <button className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }}>
            {t("products.addToCart")}
          </button>
          <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
            {t("products.addToWishlist")}
          </button>
        </div>
      </div>
    </div>
  );
}
