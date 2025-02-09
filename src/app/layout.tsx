import type { Metadata } from "next";
import {EB_Garamond, Dancing_Script} from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css'
import "./variables.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google' 
import Script from "next/script";


const ebGaramond = EB_Garamond({subsets: ['latin']});
export const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fastcookiteasy.com"),
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
  title:{
    default: "Cook it Easy - Quick and Delicious Recipes for Everyone",
    template: "%s - Cook it Easy "
  },
  description: "Explore quick and easy recipes to create delicious meals effortlessly. Perfect for beginners and food lovers, with simple step-by-step guides for every dish.",
  alternates: {
    canonical: "https://www.fastcookiteasy.com"
  },
  openGraph: {
    title: "Cook it Easy - Quick and Delicious Recipes",
    description: "Discover easy and quick recipes to cook delicious meals in no time. Cook it Easy provides simple step-by-step guides for tasty dishes, perfect for beginners and food enthusiasts alike.",
    url: "https://www.fastcookiteasy.com",
    siteName: "Cook it Easy",
    images: [
      {
        url: "/assets/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Cook it Easy - Quick and Delicious Recipes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other:{
    "p:domain_verify": "a81f7e7d9e9f0b671310bb6db2a46c67",
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
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_ADSENSE_PID} />
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
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PID}`}
          crossOrigin="anonymous"
        />
        {children}
        <Footer/>
      </body>
    </html>
  );
}