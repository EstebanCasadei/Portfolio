import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let rafCallback: ((time: number) => void) | null = null;

export function startSmoothScroll() {
  stopSmoothScroll();

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  (window as any).lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);

  rafCallback = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(rafCallback);
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function stopSmoothScroll() {
  if (rafCallback) {
    gsap.ticker.remove(rafCallback);
    rafCallback = null;
  }
  lenis?.destroy();
  lenis = null;
  (window as any).lenis = null;
}

export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

const w = window as any;
if (!w.__smoothBound) {
  w.__smoothBound = true;
  document.addEventListener("astro:before-swap", () => {
    killScrollTriggers();
    stopSmoothScroll();
  });
}
