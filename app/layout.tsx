import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Add other weights if needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zalos.io | AI for Consulting",
  description: "Automating the Consulting Associate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
