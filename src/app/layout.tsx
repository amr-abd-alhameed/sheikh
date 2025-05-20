import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/Provider";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "موقع أبو عبد الرحمن الحسيني",
  description: " نهتم بالعلم النافع",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={` ${amiri.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
