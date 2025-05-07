import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css"; 
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
}) 

export const metadata: Metadata = {
  title: "app name",
  description: "app description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`${robotoCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
