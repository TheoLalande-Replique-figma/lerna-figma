import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import TopCard from "@/components/cards/TopCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lerna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        <TopCard />
        {children}
      </body>
    </html>
  );
}
