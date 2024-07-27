import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amir Movie App",
  description: "full stack movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
