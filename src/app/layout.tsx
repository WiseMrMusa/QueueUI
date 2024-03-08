import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./app-provider";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme={"system"}>
          <Toaster />
          <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
          </div>
            <div className="mt-28">
              {children}
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
