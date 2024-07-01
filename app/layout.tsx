import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";

//Tipografia
const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Companies | juanescode",
  description: "Juanescode ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
