"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { wrapWordsInSpan } from "@/utils/string";
import useWindowSize from "@/hooks/useWindowSize";
import Copy from "../layout/Copy";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/constants/pageTransition";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { width } = useWindowSize();
  const pathname = usePathname();
  const router = useTransitionRouter();

  useGSAP(() => {
    if (width < 1024) return;

    const paragraph = paragraphRef.current;

    if (!paragraph) return;

    wrapWordsInSpan(paragraph);

    const words = paragraph.querySelectorAll("span");

    words.forEach((word) => {
      word.classList.add("word" + Math.floor(Math.random() * 4));
    });

    document.querySelectorAll("#about .word1").forEach((el) => {
      gsap.to(el, {
        x: "-0.8em",
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          // Start when the word's top reaches 80% of the viewport height
          start: "top 80%",
          // End when the word's bottom reaches 60% of the viewport height
          end: "bottom 60%",
          scrub: 0.2, // Syncs with the scroll and takes 0.2s to update
        },
      });
    });

    document.querySelectorAll("#about .word2").forEach((el) => {
      gsap.to(el, {
        x: "1.6em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });

    document.querySelectorAll("#about .word3").forEach((el) => {
      gsap.to(el, {
        x: "-2.4em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12 lg:col-span-7">
        <Copy>
          <h4 className="font-semibold uppercase mb-4">Founder</h4>
        </Copy>

        {/* Instagram icon (mobile) */}
        <div className="lg:hidden mb-2">
          <a
            href="https://www.instagram.com/stb_krishmark12?utm_source=ig_web_button_share_sheet&igsh=Y2Y5MjB6dWppajNy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="3.5"></circle>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden col-span-12 aspect-video rounded-lg overflow-hidden mb-4 relative">
          {/* View Team overlay (mobile) */}
          <Link
            href="/team"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/team") return;
              router.push("/team", { onTransitionReady: pageTransition });
            }}
            className="absolute top-2 right-2 z-10 inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-md bg-neutral-900/90 text-white hover:bg-neutral-800 transition"
          >
            View Team
          </Link>
          <Image
            src="/images/team/krishna.png"
            alt="Krishna, Founder"
            width={800}
            height={450}
            className="pointer-events-none"
            priority
          />
        </div>

        <p
          ref={paragraphRef}
          className="hidden lg:block text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
        >
Krish is a digital creator and entrepreneur who’s built a sellable audience of 100K+.
Passionate about design and tech, he builds engaging content ecosystems for brands.
        </p>

        <Copy>
          <p
            ref={paragraphRef}
            className="lg:hidden text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
          >
Krish is a digital creator and entrepreneur who’s built a sellable audience of 100K+.
Passionate about design and tech, he builds engaging content ecosystems for brands.
          </p>
        </Copy>
      </div>

      {/* Desktop image + actions */}
      <div className="hidden lg:block h-full col-span-5">
        {/* Instagram icon (desktop) */}
        <div className="mb-2">
          <a
            href="https://www.instagram.com/stb_krishmark12?utm_source=ig_web_button_share_sheet&igsh=Y2Y5MjB6dWppajNy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="3.5"></circle>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
        </div>
        <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden relative">
          {/* View Team overlay (desktop) */}
          <Link
            href="/team"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/team") return;
              router.push("/team", { onTransitionReady: pageTransition });
            }}
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-neutral-900/90 text-white hover:bg-neutral-800 transition"
          >
            View Team
          </Link>
          <Image
            src="/images/team/krishna.png"
            alt="Krishna, Founder"
            width={800}
            height={450}
            className="pointer-events-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
