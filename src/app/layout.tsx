import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBO's Portfolio",
  description: "개발자 오병옥의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
