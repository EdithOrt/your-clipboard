import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";
import { Navbar } from "./ui/navbar";
import logo from "@/public/y-clipboard-logo.svg";
import { ModalContainer } from "./ui/modal-container";
import { Providers } from "./providers";
import github from "@/public/github.svg";
import Image from "next/image";

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
        <a
          className="github--animation absolute z-10"
          href="https://github.com/EdithOrt/your-clipboard"
          target="_blank"
        >
          <div className="absolute left-[-75px] top-[-100px] z-10 h-[150px] w-[150px] rotate-45 bg-orange" />

          <Image
            src={github}
            alt="Link to github"
            height={40}
            width={40}
            className=" relative left-[8px] top-[-5px] z-30"
          />
        </a>

        <Providers>
          <Navbar logo={logo} />
          {children}
          <ModalContainer />
        </Providers>
      </body>
    </html>
  );
}
