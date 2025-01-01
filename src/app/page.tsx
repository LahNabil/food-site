
import { Hero } from "@/sections/Hero";
import { Recipes } from "@/sections/Recipes";


export default function Home() {
  return (
    <div id="main">
      <h1 className='main-title'>Cook It Easy: Fast, Simple, and Delicious Recipes for Every Day</h1>
      <Hero/>
      <Recipes/>
    </div>
  );
}
