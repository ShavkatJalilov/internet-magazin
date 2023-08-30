import "./globals.css";
import { Noto_Sans_Medefaidrin } from "next/font/google";
import Header from "./layout/Header/header";
import Footer from "./layout/footer/footer";
const inter = Noto_Sans_Medefaidrin({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "internet magazin",
  description: " internet magazin",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
