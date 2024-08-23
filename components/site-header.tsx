import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export function SiteHeader() {
    const { userId } = auth();
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
         <div className="flex gap-6 items-center">
          <Link href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
            )}>
            Home
          </Link>
          <Link href="/blog"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
          )}>
            Blog
          </Link>
          <Link href="/tracking"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
          )}>
            Tracking
          </Link>
          <Link href="/consult"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
          )}>
            Consultation
          </Link>
          <Link href="/about"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
          )}>
            About Us
          </Link>
          {!userId ? (
            <>
              <Link href="/sign-in"className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
            )}>
                Login
              </Link>
              <Link href="/sign-up"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
              )}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
              )}>
                Profile
              </Link>
                <UserButton />
            </>
          )}
        </div>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}