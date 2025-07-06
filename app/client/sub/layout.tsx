"use client";
import React from "react";
import { useEffect } from "react";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="h-full w-full flex justify-center items-center">
            {children}
        </div>
    )
}