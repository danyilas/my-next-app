import type { Metadata } from "next";
import { LANGUAGES } from "@/library/i18n-config";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "@/app/globals.css";

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "i18n Demo — Lab 7",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <NavBar lang={params.lang} />
        <main className="main-content">{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
