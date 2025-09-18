"use client";

import { useScreenWidth } from "@/utils/useScreenWidth";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import clsx from "clsx";
import SideNav from "@/components/layout/SideNav";
import TopNav from "@/components/layout/TopNav";

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const screenWidth = useScreenWidth();
  const [isOpen, setIsOpen] = useState(true);
  const [isMini, setIsMini] = useState(false);

  useEffect(() => {
    if (screenWidth < 1024) setIsOpen(false), setIsMini(true);
  }, [screenWidth]);

  return (
    <html lang="en" className={clsx("", font.className)}>
      <body className="h-screen">
        <div className="relative flex">
          {/* Desktop Sidebar */}
          {screenWidth > 1024 && (
            <aside
              onMouseEnter={() => (isMini ? setIsOpen(true) : {})}
              onMouseLeave={() => (isMini ? setIsOpen(false) : {})}
              className={clsx(
                "transition-all duration-300 overflow-hidden",
                screenWidth < 1025 || (isMini && !isOpen)
                  ? "w-[75px]"
                  : "w-[280px]"
              )}
            >
              <SideNav isMini={isMini && !isOpen} />
            </aside>
          )}

          {/* Mobile Overlay Drawer */}
          {screenWidth < 1025 && (
            <div
              className={clsx(
                "fixed inset-0 z-50 transition-colors duration-300",
                isOpen ? "bg-black/50" : "pointer-events-none bg-transparent"
              )}
              onClick={() => {
                setIsOpen(false), setIsMini(true);
              }}
            >
              <div
                className={clsx(
                  "absolute inset-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300",
                  isOpen ? "translate-x-0" : "-translate-x-full"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                // prevent closing when clicking inside
              >
                <SideNav
                  onClose={() => {
                    setIsOpen(false), setIsMini(true);
                  }}
                />
              </div>
            </div>
          )}

          <main className="flex-1 flex justify-center">
            <div
              className={clsx(
                "w-full md:max-w-[1440px] transition-all duration-300 flex flex-col h-screen overflow-auto"
              )}
            >
              {/* Top Navigation */}
              <div className="--top-nav px-2">
                <TopNav
                  onClick={() => {
                    setIsMini(!isMini);
                    setIsOpen(!isOpen);
                  }}
                />
              </div>
              <div className="px-2 mt-6 mb-6 w-full">{children}</div>
              <div className="py-4 px-2 flex justify-between">
                <span>© 2025 Company Name. All rights reserved.</span>
                <div className="flex gap-4 text-blue-400">
                  <button className="text-blue-400 hover:underline">
                    Documentations
                  </button>
                  <button className="text-blue-400 hover:underline">
                    Supports
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
