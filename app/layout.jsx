import { Rokkitt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AdBanner from "./components/adbanner";

const rokkitt = Rokkitt({ subsets: ["latin"] });

export const metadata = {
  title: "The Hideaway Bar",
  description:
    "Tucked in the middle of the snowbelt and lakes, check out this all season bar and grill for some great food and cheap drinks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rokkitt.className}>
        {/* <Navbar />
        <AdBanner /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
