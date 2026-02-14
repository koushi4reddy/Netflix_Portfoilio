import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Netflix Style Portfolio",
  description: "K cinematic intro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
