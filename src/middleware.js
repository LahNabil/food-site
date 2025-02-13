// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/postitems/Arrabbiata-Pasta") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/arrabbiata-pasta", 301); // Permanent Redirect
  }

  if (pathname === "/postitems/curried-sausage") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/curried-sausages", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/drinks") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/category/drinks", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/layered-chocolate-cheesecake-with-oreo-crust---no-bake") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/layered-chocolate-cheesecake", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/coffee-panna-cotta-with-cocoa-sauce") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/coffee-panna-cotta", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/GREEN-CHICKEN-SALAD") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/kale-chicken-salade", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/SESAME-CHICKEN") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/sesame-chicken", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/The-Ultimate-Pizza-Burger") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/ultimate-pizza-burger", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/SMOKY-VEGAN") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/smoky-vegan", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Cilantro-Lime-Avocado-Toast") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/cilantro-lime-avocado-toast", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Traditional-Chinese-Mango-Pudding-Recipe-to-Try-at-Home") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/chinese-mango-pudding", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/PANUOZZO-Sandwich") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/panuozo-sandwich", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/CALMING-GREEN-SOUP") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/green-soop", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Yaki-Udon") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/yaki-udon", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Chocolate-Cake-Roll") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/chocolate-cake-roll", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Coffee-Panna-Cotta-with-Cocoa-Sauce") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/coffee-panna-cotta", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Roasted-Red-Pepper-Romesco-Sauce") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/roasted-red-pepper-romesco", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/the-ultimate-pizza-burger") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/ultimate-pizza-burger", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/SPICY-VEGETABLE-BEEF-UDON-NOODLES") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/spicy-beef", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Creamy-Tomato-Pasta") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/creamy-tomato-pasta", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/Spicy-Garlic-Shrimp-Noodles") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/spicy-garlic-shrimp-noodles", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/calming-green-soup") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/green-soop", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/butter-chicken-(murgh-makhani)") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/butter-chicken", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/traditional-chinese-mango-pudding-recipe-to-try-at-home") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/chinese-mango-pudding", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/spicy-vegetable-beef-udon-noodles") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/spicy-beef", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/green-chicken-salad") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/kale-chicken-salade", 301); // Permanent Redirect
  }
  if (pathname === "/postitems/layered-chocolate-cheesecake-with-oreo-crust-no-bake") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/layered-chocolate-cheesecake", 301); // Permanent Redirect
  }
  if (pathname === "https://fastcookiteasy.com/postitems/Creamy-Mushroom-Soup") {
    return NextResponse.redirect("https://fastcookiteasy.com/postitems/creamy-mushroom-soup", 301); // Permanent Redirect
  }

  
  return NextResponse.next();
}
