import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Blog do Lucas",
  description: "Um blog de artigos de Front-End criado com Next.js por Lucas Ribeiro da Silva.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="azul-topo"></div>
        <main className="centralize-tudo">
          <div className="central-container">{children}</div>
        </main>
        <div className="azul-base"></div>
      </body>
    </html>
  );
}
