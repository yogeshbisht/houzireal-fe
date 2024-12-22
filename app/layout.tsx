import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import StoreProvider from "@/provider/StoreProvider";
import { Toaster } from "sonner";
import AuthProvider from "@/provider/auth-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Houzireal",
  description: "A one of a kind real estate platform."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <AuthProvider>
            <div className="min-w-[480px] overflow-auto">{children}</div>
            <Toaster richColors />
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
