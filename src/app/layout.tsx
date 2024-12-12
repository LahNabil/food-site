import type { Metadata } from "next";
import {EB_Garamond} from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css'
import "./variables.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google' 


const ebGaramond = EB_Garamond({subsets: ['latin']});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fastcookiteasy.com"),
  keywords: [
    "easy recipes",
    "quick meals",
    "fast cooking",
    "healthy recipes",
    "food blog",
    "cooking tips",
    "simple cooking",
    "meal ideas",
    "quick dinner recipes",
    "fast and easy food"
  ],
  title: "Cook it Easy - Quick and Delicious Recipes for Everyone",
  openGraph: {
    title: "Cook it Easy - Quick and Delicious Recipes",
    description: "Discover easy and quick recipes to cook delicious meals in no time. Cook it Easy provides simple step-by-step guides for tasty dishes, perfect for beginners and food enthusiasts alike.",
    url: "https://www.fastcookiteasy.com",
    siteName: "Cook it Easy",
    images: [
      {
        url: "https://www.facebook.com/photo/?fbid=122093558594550289&set=a.122093558630550289", 
        width: 1200,
        height: 630,
        alt: "Cook it Easy - Quick and Delicious Recipes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WBT745PF" />
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={ebGaramond.className}>
        <noscript>
          <iframe
           src="https://www.googletagmanager.com/ns.html?id=GTM-WBT745PF"
           height="0"
           width="0"
           style={{display:"none",visibility:"hidden"}}>
          </iframe>
        </noscript>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}