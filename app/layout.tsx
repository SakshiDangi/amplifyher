import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
import {
  ClerkProvider,
  ClerkLoaded, 
  ClerkLoading
} from '@clerk/nextjs'
import "./globals.css";
import Navbar  from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmplifyHer",
  description: "Created by Sakshi Dangi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
    <html lang="en">
      <body className={inter.className}>
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen text-2xl">
              LOADING...
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col h-screen">
              <Navbar />
                {children}
            </div>
          </div>
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
