import type { Metadata } from "next";
import { Montserrat, MonteCarlo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const montecarlo = MonteCarlo({
  variable: "--font-montecarlo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BR Fortunes",
  description: "Conectados ao Poder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${montecarlo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
