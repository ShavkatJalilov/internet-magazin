import "./globals.css";
import { Noto_Sans_Medefaidrin } from "next/font/google";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import FooterHead from "./components/foterHead/footerHead";
const inter = Noto_Sans_Medefaidrin({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "  Dua",
  description: " dua web site",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          {children}
          <FooterHead />
          <Footer />
        </body>
      </html>
    </>
  );
}
