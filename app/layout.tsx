import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";
import { Navbar } from "./ui/navbar";
import logo from "@/public/y-clipboard-logo.svg";
import { ModalContainer } from "./ui/modal-container";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Your Clipboard",
  description: "Copy and save the most important information in your clipboard",
  openGraph: {
    title: "Your Clipboard",
    description:
      "Copy and save the most important information in your clipboard",
  },
  metadataBase: new URL("https://your-clipboard-46kgx2ejs-edithort.vercel.app"),
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
        <Providers>
          <Navbar logo={logo} />
          {children}
          <ModalContainer />
        </Providers>
      </body>
    </html>
  );
}
