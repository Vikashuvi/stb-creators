"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function TechnologiesLit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!container || !highlight) return;

    const firstItem = container.querySelector(".grid-item:first-child");

    const moveToElement = (element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;

        // Remove invert class from all images
        container.querySelectorAll("img").forEach((img) => {
          img.classList.remove("invert");
        });

        // Add invert class to the image in the current grid item
        const currentImage = element.querySelector("img");
        if (currentImage) {
          currentImage.classList.add("invert");
        }
      }
    };

    const moveHighlight = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement as HTMLElement);
      } else if (
        hoveredElement &&
        hoveredElement?.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem as HTMLElement);

    container.addEventListener("mousemove", moveHighlight);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
    };
  }, []);

  return (
    <section className="pb-24 px-4 lg:px-8">
  <LetterScroll />

  <h4 className="font-semibold uppercase mb-4">Professional at</h4>
  <div ref={containerRef} className="relative">
    <div className="hidden lg:grid grid-rows-2">
      <div className="grid grid-cols-3 border-b border-neutral-300 h-[clamp(200px,20vw,400px)]">
        <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Premiere Pro website">
          <Image src="/images/svg/premiere-pro.png" alt="Premiere Pro" width={90} height={90} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit After Effects website">
          <Image src="/images/svg/after-effects.png" alt="After Effects" width={90} height={90} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://www.blackmagicdesign.com/products/davinciresolve/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center group cursor-pointer" aria-label="Visit DaVinci Resolve website">
          <Image src="/images/svg/davinci-resolve.png" alt="DaVinci Resolve" width={70} height={70} className="z-10 transition-all duration-300" />
        </a>
      </div>

      <div className="grid grid-cols-7 h-[clamp(200px,15vw,400px)]">
        <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Illustrator website">
          <Image src="/images/svg/illustrator.png" alt="Illustrator" width={70} height={70} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Perplexity website">
          <Image src="/images/svg/perplexity.png" alt="Perplexity" width={60} height={60} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit ChatGPT website">
          <Image src="/images/svg/chatgpt.png" alt="ChatGPT" width={60} height={60} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://framer.com/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Framer website">
          <Image src="/images/svg/framer.png" alt="Framer" width={60} height={60} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://www.elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Eleven Labs website">
          <Image src="/images/svg/elevenlabs.png" alt="Eleven Labs" width={60} height={60} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://manychat.com/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer" aria-label="Visit Google Veo website">
          <Image src="/images/svg/manychat.png" alt="Many Chat" width={70} height={70} className="z-10 transition-all duration-300" />
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center group" aria-label="Visit Next.js website">
          <Image src="/images/svg/nextjs-logotype-light-background.svg" alt="Next.js" width={100} height={100} className="z-10 transition-all duration-300" />
        </a>
      </div>
    </div>

    {/* Grid for mobile */}
    <div className="grid grid-cols-2 lg:hidden">
      <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit Premiere Pro website">
        <Image src="/images/svg/premiere-pro.svg" alt="Premiere Pro" width={70} height={70} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit After Effects website">
        <Image src="/images/svg/after-effects.svg" alt="After Effects" width={70} height={70} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://www.blackmagicdesign.com/products/davinciresolve/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit DaVinci Resolve website">
        <Image src="/images/svg/davinci-resolve.svg" alt="DaVinci Resolve" width={70} height={70} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit Illustrator website">
        <Image src="/images/svg/illustrator.svg" alt="Illustrator" width={70} height={70} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit Perplexity website">
        <Image src="/images/svg/perplexity.svg" alt="Perplexity" width={60} height={60} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit ChatGPT website">
        <Image src="/images/svg/chatgpt.svg" alt="ChatGPT" width={60} height={60} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://framer.com/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-r border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit Framer website">
        <Image src="/images/svg/framer.svg" alt="Framer" width={60} height={60} className="z-10 transition-all duration-300" />
      </a>
      <a href="https://www.elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,400px)]" aria-label="Visit Eleven Labs website">
        <Image src="/images/svg/elevenlabs.svg" alt="Eleven Labs" width={60} height={60} className="z-10 transition-all duration-300" />
      </a>
    </div>
    <div ref={highlightRef} className="highlight hidden sm:block absolute top-0 left-0 bg-neutral-900 pointer-events-none transition-all duration-300"></div>
  </div>
</section>
  );
}

function LetterScroll() {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(".letter", {
      yPercent: 100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% 95%",
        end: "100% 80%",
        scrub: 1,
      },
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  }, []);

  return (
    <ul
      ref={containerRef}
      className="letter-scroll flex flex-col justify-center items-center h-[500px] lg:h-[800px] py-24"
    >
      <li className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.85] overflow-hidden flex">
  <span className="letter relative inline-block">
    <span>S</span>
    <span className="absolute bottom-full left-0">S</span>
  </span>
  <span className="letter relative inline-block">
    <span>T</span>
    <span className="absolute bottom-full left-0">T</span>
  </span>
  <span className="letter relative inline-block">
    <span>B</span>
    <span className="absolute bottom-full left-0">B</span>
  </span>
</li>

<li className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.9] lg:leading-[0.85] overflow-hidden flex">
  <span className="letter relative inline-block">
    <span>C</span>
    <span className="absolute bottom-full left-0">C</span>
  </span>
  <span className="letter relative inline-block">
    <span>R</span>
    <span className="absolute bottom-full left-0">R</span>
  </span>
  <span className="letter relative inline-block">
    <span>E</span>
    <span className="absolute bottom-full left-0">E</span>
  </span>
  <span className="letter relative inline-block">
    <span>A</span>
    <span className="absolute bottom-full left-0">A</span>
  </span>
  <span className="letter relative inline-block">
    <span>T</span>
    <span className="absolute bottom-full left-0">T</span>
  </span>
  <span className="letter relative inline-block">
    <span>O</span>
    <span className="absolute bottom-full left-0">O</span>
  </span>
  <span className="letter relative inline-block">
    <span>R</span>
    <span className="absolute bottom-full left-0">R</span>
  </span>
  <span className="letter relative inline-block">
    <span>S</span>
    <span className="absolute bottom-full left-0">S</span>
  </span>
</li>
    </ul>
  );
}
