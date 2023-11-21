import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
          <nav
            style={{
              fontFamily: "PF스타더스트",
            }}
          >
            <Link href="/" className="text-[40px]">
              Home
            </Link>
          </nav>
          <div>
            <Link href="/create">Create</Link>
          </div>
        </section>
        <section>{children}</section>
      </body>
    </html>
  );
}
