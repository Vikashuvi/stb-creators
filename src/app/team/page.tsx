"use client";

import { motion } from "motion/react";
import useInitialLoad from "@/contexts/initial-load-context";
import Team from "@/components/sections/Team";

export default function TeamPage() {
  const { isInitialLoad } = useInitialLoad();

  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-16">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: isInitialLoad ? 2.7 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(60px,10vw,200px)] font-bold uppercase leading-none typeface-respira-black text-center w-full whitespace-nowrap select-none will-change-transform text-neutral-100"
            >
              Our Team
            </motion.h1>
          </div>
        </div>
      </div>
      <Team />
    </main>
  );
}
