import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import{ ClerkProvider} from "@clerk/nextjs"
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "../components/Navbar";
import { SignIn,SignedIn,SignedOut,SignInButton,UserButton,RedirectToSignIn } from "@clerk/nextjs";
import {ThemeProvider} from "../components/providers/ThemeProvider"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         
         <SignedIn>
              <div className="min-h-screen">
                <Navbar />
                <main className="px-4 sm:px-6 lg:px-8">{children}</main>
              </div>
         </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
        </ThemeProvider>
        {/* <Toaster /> */}
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
