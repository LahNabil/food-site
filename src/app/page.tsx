
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
    "logo": "https://www.fastcookiteasy.com/assets/fastcookiteasy_logo.jpg",
    "sameAs": [
      "https://www.facebook.com/people/Cook-It-Easy/61566508671453/",
      "https://www.pinterest.com/cookiteasy_/"
    ]
  };
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.fastcookiteasy.com/",
    "name": "Cook it Easy: Fast, Simple, and Delicious Recipes for Every Day",
    "description": "Discover delicious and easy-to-make recipes for every occasion.",
    "image": "https://www.fastcookiteasy.com/assets/about_image_ab.png"
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cook It Easy: Fast, Simple, and Delicious Recipes for Every Day",
    "description": "Explore our top 10 quick and easy recipes perfect for busy weeknights.",
    "image": "https://www.fastcookiteasy.com//assets/kale-chicken-salade.webp",
    "publisher": {
      "@type": "Organization",
      "name": "Cook it Easy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fastcookiteasy.com/assets/fastcookiteasy_logo.jpg"
      }
    },
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01"
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
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <h1 className='main-title'>Cook It Easy: Fast, Simple, and Delicious Recipes for Every Day</h1>
      <Hero/>
      <Recipes/>
    </div>
  );
}
