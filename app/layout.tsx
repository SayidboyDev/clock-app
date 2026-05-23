import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clock App",
  description": "Beautiful real-time digital clock",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
