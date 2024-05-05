import type { Metadata } from "next";
import { Pretendard } from "@/app/_ui/font/fonts";
import "@/app/_ui/globals.css";

export const metadata: Metadata = {
  title: "SEMA WiFi Management System",
  description: "Simply manage sema passage WiFi network with SEMA WiFi Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
