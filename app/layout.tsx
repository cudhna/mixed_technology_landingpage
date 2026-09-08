import { Metadata } from "next";
import { Inter } from "next/font/google";
import { getConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mixed Technology",
  description: "Landing page for Mixed Technology.",
  openGraph: {
    title: "Mixed Technology",
    description: "Mixed Technology landing page.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getConfig();
  const theme = config.theme;

  return (
    <html
      lang="vi"
      style={
        {
          "--brand-950": theme.brand["950"],
          "--brand-900": theme.brand["900"],
          "--brand-800": theme.brand["800"],
          "--brand-700": theme.brand["700"],
          "--brand-600": theme.brand["600"],
          "--brand-500": theme.brand["500"],
          "--gold-500": theme.gold["500"],
          "--gold-600": theme.gold["600"],
          "--gold-700": theme.gold["700"],
          "--color-bg": theme.background,
          "--color-surface": theme.surface,
          "--color-text": theme.text,
          "--color-text-muted": theme.textMuted,
          "--color-border": theme.border,
        } as React.CSSProperties
      }
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
