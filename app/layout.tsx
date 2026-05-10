import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i18n Demo",
  description: "Next.js internationalization with i18next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
