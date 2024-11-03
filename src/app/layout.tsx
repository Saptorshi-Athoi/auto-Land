import type { Metadata } from "next";
import localFont from "next/font/local";
import {DM_Sans} from 'next/font/google'
import "./globals.css";
// import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeProvider } from "../providers/theme-provide";
const font = DM_Sans({ subsets: ['latin'] })
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
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
    </ClerkProvider>
  );
}
