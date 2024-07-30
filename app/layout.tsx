import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Higher Lower NHL",
  description: "Created by Owen Edwards(Goose).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png' sizes='any'></link>
      </head>
      <body className={`${inter.className} bg-slate-900`}>{children}</body>
    </html>
  );
}
