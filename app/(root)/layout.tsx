
import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <html lang="en">
           <body className={inter.className}>
            <Topbar />
            {children}
            <main className="flex">
              <LeftSidebar />
                <section className="main-container">
                  <div className="w-full">
                      {children}
                  </div>
                </section>
              <RightSidebar />
            </main>
            <Bottombar />
            </body>
         </html>
         </ClerkProvider>
  );
}