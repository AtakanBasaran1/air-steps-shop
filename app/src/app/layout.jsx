import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIR STEPS SHOP",
  description: "Ayakkabı & Air Pods & Puff Mağazası",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar'ı body içerisinde çağırıyoruz */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
