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
        <nav
          className="flex flex-row flex-0 justify-between items-center bg-gray-800 text-white px-4 w-full h-[60px] fixed top-0 z-10"
          style={{
            fontFamily: "PF스타더스트",
          }}
        >
          <div className="w-[25%]">
            <Link href="/" className="text-[40px]">
              Home
            </Link>
          </div>
          <div className="flex flex-1 justify-evenly font-bold">
            <Link href="/aboutme">About Me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/archiving">Archiving</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/career">Career</Link>
          </div>
        </nav>
        <section>{children}</section>
      </body>
    </html>
  );
}
