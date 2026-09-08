import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mixed Technology — Kết tinh giữa kỹ nghệ phần cứng và giải pháp phần mềm tối ưu",
  description:
    "Mixed Technology — Nơi những chiếc điện thoại gập được khai phá trọn vẹn tiềm năng, từ phần mềm tối ưu 9flip Launcher đến từng tác phẩm độ máy thủ công.",
  openGraph: {
    title: "Mixed Technology",
    description:
      "Luxury landing page for Mixed Technology — 9flip Launcher & custom modded smartphones.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
