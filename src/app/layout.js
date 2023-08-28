import "./globals.css";
import HeaderOne from "./headerOne/headerOne";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import { Noto_Sans_Medefaidrin } from "next/font/google";
const inter = Noto_Sans_Medefaidrin({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "internet magazin",
  description: " internet magazin",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <HeaderOne />
          <Header />
        </div>
        <Navbar />
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
