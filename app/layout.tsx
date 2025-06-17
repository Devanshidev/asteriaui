import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASTERIA UI",
  description: "Copy less, ship more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="h-screen bg-red-500">
          <div className="h-[60px]">
            <Header />
          </div> */}

          {/* <div className="h-full" style={{ height: "calc(100vh - 60px)" }}> */}
            {children}
          {/* </div>
        </div> */}
      </body>
    </html>
  );
}
