import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";



const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "موسوعة الشيخ رمضان",
  description: "موسوعة تهتم بالعلم النافع",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
