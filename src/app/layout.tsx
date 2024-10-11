import type { Metadata } from "next";
import localFont from "next/font/local";
import {DM_Sans} from 'next/font/google'
import "./globals.css";
// import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeProvider } from "../providers/theme-provide";
const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "autoLand",
  description: "automate with autoLand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
