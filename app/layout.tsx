import type { Metadata, Viewport } from "next";
import { Dosis } from "next/font/google";
import { dark } from "@clerk/themes";
import {
  ClerkProvider,
  ClerkLoaded, 
  ClerkLoading
} from '@clerk/nextjs'
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

const inter = Dosis({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>       
      {/* appearance={{ baseTheme: dark }}  */}
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen text-2xl">
              LOADING...
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <div className="flex-1">
              <SiteHeader />
                {children}
            </div>
          </div>
          </Providers>
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
