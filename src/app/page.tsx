
import { Hero } from "@/sections/Hero";
import { Recipes } from "@/sections/Recipes";
import Script from "next/script";


export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cook it Easy",
    "url": "https://www.fastcookiteasy.com/",
    "description": "Discover delicious and easy-to-make recipes for every occasion."
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cook it Easy",
    "description": "We are passionate about creating simple, delicious recipes for everyone to enjoy.",
    "url": "https://www.fastcookiteasy.com/",
    "sameAs": [
      "https://www.facebook.com/people/Cook-It-Easy/61566508671453/",
    ]
  };
  return (
    <div id="main">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <h1 className='main-title'>Cook It Easy: Fast, Simple, and Delicious Recipes for Every Day</h1>
      <Hero/>
      <Recipes/>
    </div>
  );
}
