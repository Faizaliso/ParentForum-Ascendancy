import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Parenting Forum",
  description: "Discuss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased bg-slate-200`}>
        <Header />
        <div className="max-w-3xl h-screen m-auto my-8">{children}</div>
      </body>
    </html>
  );
}
