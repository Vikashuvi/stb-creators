"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import { lcddot } from "@/fonts";
import Image from "next/image";
import Copy from "@/components/layout/Copy";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TeamMember = {
  name: string;
  position: string;
  role: string;
  skills: string[];
  image: string;
};

const teamMembers = [
  {
    name: "Fazil Rahman",
    position: "Founder & Creative Director",
    role: "Video Editor",
    skills: [
      "Creative Direction",
      "Brand Strategy",
      "Video Production",
      "Team Leadership",
      "Client Relations"
    ],
    image: "/images/team/fazil.jpg",
  },
  {
    name: "Saranaksha S",
    position: "Content Strategist",
    role: "Writer",
    skills: [
      "Content Strategy",
      "Copywriting",
      "Brand Voice",
      "Social Media",
      "Campaign Planning"
    ],
    image: "/images/team/saranaksha.jpg",
  },
  {
    name: "Namit Rohan",
    position: "Visual Designer",
    role: "Writer",
    skills: [
      "Visual Design",
      "Brand Identity",
      "UI/UX Design",
      "Typography",
      "Creative Concepts"
    ],
    image: "/images/team/namit.jpg",
  },
  {
    name: "Jayshrinabu",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Post Production"
    ],
    image: "/images/team/jayshrinabu.jpg",
  },
  {
    name: "Karthikeyan Deivaraj",
    position: "Digital Marketing Specialist",
    role: "Video Editor",
    skills: [
      "Digital Marketing",
      "Performance Ads",
      "Analytics",
      "Campaign Management",
      "ROI Optimization"
    ],
    image: "/images/team/karthikeyan.jpg",
  },
  {
    name: "Thirugnanamorthy K",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Motion Graphics",
      "Color Correction",
      "Audio Mixing",
      "Creative Editing"
    ],
    image: "/images/team/thirugnanamorthy.jpg",
  },
  {
    name: "Santosh",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Post Production",
      "Visual Effects",
      "Timeline Management",
      "Content Creation"
    ],
    image: "/images/team/santosh.jpg",
  },
  {
    name: "Maharshi K",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Motion Design",
      "Color Grading",
      "Sound Design",
      "Creative Direction"
    ],
    image: "/images/team/maharshi.jpg",
  },
  {
    name: "Archana",
    position: "Project Manager",
    role: "Manager",
    skills: [
      "Project Management",
      "Team Coordination",
      "Client Communication",
      "Process Optimization",
      "Quality Assurance"
    ],
    image: "/images/team/archana.jpg",
  },
  {
    name: "Lavanya P",
    position: "Content Writer",
    role: "Writer",
    skills: [
      "Content Writing",
      "Copywriting",
      "Creative Writing",
      "Brand Voice",
      "Editorial Skills"
    ],
    image: "/images/team/lavanya.jpg",
  },
  {
    name: "Subhiksha S",
    position: "Content Writer",
    role: "Writer",
    skills: [
      "Content Writing",
      "Social Media Copy",
      "Brand Messaging",
      "Creative Content",
      "Editorial Review"
    ],
    image: "/images/team/subhiksha.jpg",
  },
  {
    name: "K L Vimalnathan",
    position: "Content Writer",
    role: "Writer",
    skills: [
      "Content Writing",
      "Technical Writing",
      "Brand Communication",
      "Content Strategy",
      "Editorial Excellence"
    ],
    image: "/images/team/vimalnathan.jpg",
  },
  {
    name: "Kalpana J",
    position: "Intern",
    role: "Intern",
    skills: [
      "Learning & Development",
      "Content Support",
      "Creative Assistance",
      "Project Support",
      "Team Collaboration"
    ],
    image: "/images/team/kalpana.jpg",
  },
  {
    name: "DHARSHIKA H",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Creative Editing",
      "Post Production",
      "Visual Storytelling",
      "Content Creation"
    ],
    image: "/images/team/dharshika.jpg",
  },
  {
    name: "Shrutikya Suresh",
    position: "Intern",
    role: "Intern",
    skills: [
      "Learning & Growth",
      "Creative Support",
      "Project Assistance",
      "Team Support",
      "Skill Development"
    ],
    image: "/images/team/shrutikya.jpg",
  },
  {
    name: "Indira Sivaprasad",
    position: "Video Editor",
    role: "Video Editor",
    skills: [
      "Video Editing",
      "Post Production",
      "Creative Direction",
      "Content Creation",
      "Visual Effects"
    ],
    image: "/images/team/indira.jpg",
  },
  {
    name: "Subash A M G",
    position: "Content Writer",
    role: "Writer",
    skills: [
      "Content Writing",
      "Creative Copy",
      "Brand Voice",
      "Content Strategy",
      "Editorial Skills"
    ],
    image: "/images/team/subash.jpg",
  },
  {
    name: "Harsh Muthusamy",
    position: "Content Writer",
    role: "Writer",
    skills: [
      "Content Writing",
      "Creative Writing",
      "Brand Communication",
      "Content Development",
      "Editorial Review"
    ],
    image: "/images/team/harsh.jpg",
  }
];

export default function Team() {
  return (
    <section className="px-2 lg:px-4 py-16 lg:py-24">
      <div className="flex flex-col gap-16 lg:gap-24 bg-neutral-900 px-4 pt-16 lg:pt-24 pb-4 rounded-2xl lg:rounded-[20px]">
        <div className="lg:grid lg:grid-cols-12 gap-24">
          <div className="flex flex-col col-span-12 lg:col-span-10 lg:col-start-3">
            <Copy>
              <h2 className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-400 uppercase font-medium tracking-wider mb-2">
                Our Team
              </h2>
            </Copy>
            <Copy>
              <p className="text-neutral-100 text-[clamp(24px,3.3vw,56px)] font-medium leading-[1.1] lg:leading-[1.05]">
                Meet the creative minds behind STB Creators. Our diverse team of strategists, designers, and storytellers work together to bring your brand&apos;s vision to life with passion and expertise.
              </p>
            </Copy>
          </div>
        </div>

        <div className="flex flex-col bg-neutral-800 rounded-xl lg:rounded-2xl px-4 lg:px-5">
          <TeamMembersList />
        </div>
      </div>
    </section>
  );
}

function TeamMembersList() {
  return (
    <ul className="flex flex-col">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={member.name} member={member} index={index} />
      ))}
    </ul>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const skillsRef = useRef(null);
  const imageContainerRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });
  const isImageInView = useInView(imageContainerRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-3vh", "3vh"]);

  return (
    <li className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 not-last:border-b not-last:border-neutral-700">
      <Copy>
        <p className="text-xs lg:text-[clamp(14px,0.8vw,18px)] text-neutral-300 uppercase font-medium tracking-wider mb-1 lg:col-span-2">
          0{index + 1}
        </p>
      </Copy>

      <div className="flex flex-col lg:col-span-4 mb-6 lg:mb-0 lg:-mt-4">
        <Copy>
          <h3 className="text-[clamp(24px,3.3vw,56px)] text-neutral-100 font-medium mb-2">
            {member.name}
          </h3>
        </Copy>
        <Copy>
          <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-300 font-medium">
            {member.position}
          </p>
        </Copy>
        <Copy>
          <p className="text-sm text-neutral-400 mt-1">
            {member.role}
          </p>
        </Copy>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-3 mb-8 lg:mb-0">
        <ul ref={skillsRef} className="flex gap-1.5 flex-wrap">
          {member.skills.map((skill, skillIndex) => (
            <motion.li
              key={skill}
              initial={{ y: 24, opacity: 0, scale: 0.9 }}
              animate={
                isSkillsInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 24, opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 1,
                delay: skillIndex * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${lcddot.className} text-[10px] text-neutral-100 uppercase tracking-[1.1] bg-neutral-100/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap`}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div className="lg:col-span-3">
        <div
          ref={imageContainerRef}
          className="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)] rounded-lg overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0 w-full h-[120%] lg:-top-[10%]"
            style={{ y }}
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={
              isImageInView
                ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                : {}
            }
            transition={{
              duration: 1.6,
              ease: [0.87, 0, 0.13, 1],
            }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </li>
  );
}
