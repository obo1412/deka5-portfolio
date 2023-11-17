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
      <body>
        <section>
          <div>상단 네비게이션 바</div>
        </section>
        <section>{children}</section>
      </body>
    </html>
  );
}
