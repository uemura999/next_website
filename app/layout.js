import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ORIGIN.Doc",
  description: "ORIGIN.DocのWebsite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
