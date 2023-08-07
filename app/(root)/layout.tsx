import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masushi Blog",
  description: "Masushi personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white dark:bg-zinc-900 dark:ring-zinc-300/20 ring-1 ring-zinc-100"></div>
              </div>
            </div>

            <div className="relative flex flex-col w-full">
              <Header />
              <div
                className="flex-none"
                style={{ height: "var(--content-offset)" }}
              ></div>
              <main className="flex-auto">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
