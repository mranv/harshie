// app/home.tsx
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import AppleCardsCarouselDemo from "@/components/example/apple-cards-carousel-demo-2";
import GlobeDemo from "@/components/example/globe-demo";
import HeroParallaxDemo from "@/components/example/hero-parallax-demo";
import InfiniteMovingCardsDemo from "@/components/example/infinite-moving-cards-demo";
import TypewriterEffectDemo from "@/components/example/typewriter-effect-demo-2";

export default function Home() {
  return (
    <>
      <TypewriterEffectDemo />
      <GlobeDemo />
      <FeaturesSectionDemo />
      <AppleCardsCarouselDemo />
      <HeroParallaxDemo />
      <InfiniteMovingCardsDemo />
    </>
  );
}