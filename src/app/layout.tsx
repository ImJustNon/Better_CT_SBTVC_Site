import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header.component";
import NavigationbarComponent from "@/components/Navigationbar.component";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "animate.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Providers } from "./providers";

export const metadata: Metadata = {
    icons: "/ct_logo.png",
    title: "CT @SBTVC",
    description: "Computer Technology | Science-Based Technology Vocational College (Chonburi)",
    other: {
        "google-site-verification": "Ouy0dCDo-ijgMW6017hFxIgjxoW8vKYfn8WyJUolJW8",
    }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
        <body>
            <Providers>
                {children}
            </Providers>
        </body>
        </html>
    );
}
