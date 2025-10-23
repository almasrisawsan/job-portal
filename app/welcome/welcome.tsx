import TextContent from "~/_components/landing/hero/textContent";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Hero from "~/_components/landing/hero/hero";
import AllCats from "~/_components/landing/popular/allCats";
import AllFeatures from "~/_components/landing/features/allFeatures";

export function Welcome() {
  return (
    <main className="">
     <Hero/>
     <AllCats />
     <AllFeatures />
    </main>
  );
}

