import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hideaway Bar and Grill",
  description:
    "Tucked in the middle of the snowbelt and lakes, check out this all season bar and grill for some great food and cheap drinks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
