import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";
import { Navbar } from "./ui/navbar";
import logo from "@/public/y-clipboard-logo.svg";
import { ModalContainer } from "./ui/modal-container";

export const metadata: Metadata = {
  title: "Your Clipboard",
  description: "Copy and save the most important information in your clipboard",
  openGraph: {
    title: "Your Clipboard",
    description:
      "Copy and save the most important information in your clipboard",
  },
  metadataBase: new URL("https://yourclipboard.com"),
  keywords: ["clipboard", "copy", "copy text", "save text copied"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar logo={logo} />
        {children}
        <ModalContainer />
      </body>
    </html>
  );
}
