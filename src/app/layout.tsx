import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عالم العسل - أفضل أنواع العسل الطبيعي",
  description: "اكتشف أفضل أنواع العسل الطبيعي الأصيل. عسل طبيعي خام من أجود المناحل العربية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
