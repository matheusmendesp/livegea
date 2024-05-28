import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeA Docs",
  description: "Uma documentação simples da GeA Habblive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="bg-slate-100">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
