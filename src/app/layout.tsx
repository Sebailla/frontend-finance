import type { Metadata } from "next";
import "./globals.css";
import { sfProDisplay, sfProText } from "@/components/fonts/fonts";


export const metadata: Metadata = {
  title: "Personal Finance",
  description: "Webapp para registro de finanzas personales, que ingresa, que egresa y en que invierto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sfProDisplay.variable} ${sfProText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
