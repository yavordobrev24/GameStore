import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "./components/header";
import Footer from "./components/footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "GameStore",
  description: "Online store for video games",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen mt-[6rem]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
