import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { DocLayout } from "./components/layout";
import ThemeRegistry from "./ThemeRegistry";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Command Prompt Reference",
  description: "コマンドプロンプト・バッチのリファレンス（再構築中）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.className}>
      <body>
        <ThemeRegistry fontFamily={notoSansJp.style.fontFamily}>
          <DocLayout>{children}</DocLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
