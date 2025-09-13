export type Project = {
  title: string;
  icon: string;
  slug: string;
  category: string;
  keywords: string[];
  summary: string[];
  year: number;
  url: string | null;
  backgroundImageUrl: string;
  videoUrl: string;
  media: {
    type: "image" | "video";
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "ENERJOY",
    icon: "/images/work/enerjoy/enerjoylogo.jpeg",
    slug: "jazmin-wong",
    category: "Portfolio",
    keywords: [
  "Organic Marketing",
  "Client Acquisition",
  "Content Strategy",
  "Educational Content",
  "Trust-Building",
  "Lead Generation",
  "Solar Energy Awareness",
  "Social Media Growth",
  "Value-Driven Content",
  "Brand Visibility",
  "Inbound Leads",
  "Instagram Marketing",
  "Mission-Aligned Messaging",
  "Affordable Energy Solutions",
  "Content-First Growth",
],
    summary: [
      "We helped Enerjoy Solar attract 30+ clients through value-driven, educational content that built trust and showcased real-world impact. All achieved organically—without spending on ads.",
    ],
    year: 2025,
    url: "https://www.instagram.com/p/DM7nkHNSero/",
    videoUrl: "/videos/jazmin-wong-preview-compressed.mp4",
    backgroundImageUrl: "/images/work/enerjoy/cover.png",
    media: [
      {
        type: "image",
        url: "/images/work/enerjoy/img1.png",
      },
      {
        type: "image",
        url: "/images/work/enerjoy/img2.png",
      },

    ],
  },
  {
    title: "Tikitoro",
    icon: "/images/work/trackstack/icon.png",
    slug: "tikitoro",
    category: "Product",
    keywords: [
      "Art Direction",
      "Naming & Copywriting",
      "Voice & Tone",
      "Brand Design",
      "Strategy",
      "UX",
      "UI",
      "Web Design",
      "Product Design",
      "Media Production",
    ],
    summary: [
      "Redesigned the website for a UK-based software company ",
      "supporting 10,000+ high-performance DJs and labels. The ",
      "goal was to communicate their mission of streamlining career ",
      "growth. I currently work on their product team as a developer.",
    ],
    year: 2025,
    url: null,
    backgroundImageUrl: "/images/work/trackstack/banner.png",
    videoUrl: "/videos/Tikitoro.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/trackstack/img1.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/img2.png",
      },
    ],
  },
  {
    title: "Visathosh",
    icon: "/images/work/kick-bass/icon.png",
    slug: "visathosh",
    category: "Services",
    keywords: [
      "Art Direction",
      "Web Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Lenis",
      "Contentful",
      "Vercel",
      "Shopify API",
    ],
    summary: [
      "Designed & developed the primary website for an artist-run ",
      "tech house coaching and mentoring community. The focus   ",
      "was on creating a visually striking and intuitive user  ",
      "experience to optimize visitor-to-paid-member conversion.",
    ],
    year: 2024,
    url: "https://kick-bass.com",
    backgroundImageUrl: "/images/work/kick-bass/cover.png",
    videoUrl: "/videos/Vishatosh_Timeline.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/kick-bass/img1.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/img2.png",
      },
    ],
  },
  {
    title: "SSI",
    icon: "/images/work/socialstats/logo.jpg",
    slug: "ssi",
    category: "Product",
    keywords: [
      "Research & Insights",
      "Naming & Copywriting",
      "Competitive Study",
      "Voice & Tone",
      "Workshops",
      "Strategy",
      "UX",
      "UI",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Designed the home and pricings page for a social media analytics  ",
      "platform that helps artists and creators track their social  ",
      "media performance. This 4-week project focused on seamless UX  ",
      "and efficient developer handoff.",
    ],
    year: 2024,
    url: null,
    backgroundImageUrl: "/images/work/socialstats/cover.png",
    videoUrl: "/videos/SSI.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/socialstats/img1.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/img2.png",
      },
      
    ],
  },
  {
    title: "SS Constructions",
    icon: "/images/work/westend/icon.png",
    slug: "ss-constructions",
    category: "Portfolio",
    keywords: [
      "Art Direction",
      "Web Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Contentful",
      "Vercel",
    ],
    summary: [
      "Designed and developed the official website for professional DJ ",
      "and producer Westend, focusing on showcasing his latest ",
      "releases, past performances, and upcoming tour dates.",
    ],
    year: 2024,
    url: "https://itsthewestend.com",
    backgroundImageUrl: "/images/work/westend/cover.png",
    videoUrl: "/videos/SSCONSTRUCTION.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/westend/img1.png",
      },
      {
        type: "image",
        url: "/images/work/westend/img2.png",
      },
    ],
  },
  {
    title: "Shree home constructions",
    icon: "/images/work/delivrd/logo.jpg",
    slug: "shree-home-constructions",
    category: "Showcase",
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Supabase",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl:
      "/images/work/delivrd/cover.png",
    videoUrl: "/videos/Shree_home_constructions.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/delivrd/img1.png",
      },
    ],
  },

  {
    title: "Sew with jannu",
    icon: "/images/work/delivrd/logo.jpg",
    slug: "sew-with-jannu",
    category: "Showcase",
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Supabase",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl:
      "/images/work/SWJ/cover.png",
    videoUrl: "/videos/",
    media: [
      {
        type: "image",
        url: "/images/work/SWJ/img1.png",
      },
      {
        type: "image",
        url: "/images/work/SWJ/img2.png",
      },
    ],

  },

  {
    title: "Saran Builders",
    icon: "/images/work/delivrd/logo.jpg",
    slug: "saran",
    category: "Showcase",
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Supabase",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl:
      "/images/work/saran/cover.png",
    videoUrl: "/videos/",
    media: [
      {
        type: "image",
        url: "/images/work/saran/img1.png",
      },
      {
        type: "image",
        url: "/images/work/saran/img2.png",
      },
    ],



  },
  
  // {
  //   title: "Rivera",
  //   icon: "/images/work/rivera/logo.jpg",
  //   slug: "rivera",
  //   category: "Showcase",
  //   keywords: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "GSAP",
  //     "Lenis",
  //     "Supabase",
  //     "Vercel",
  //     "Web Design",
  //     "Responsive Design",
  //   ],
  //   summary: [
  //     "Developed a website that helps aspiring EDM producers easily ",
  //     "find and submit demos to popular labels. Designed with a clean, ",
  //     "minimal aesthetic and subtle micro-animations for an engaging ",
  //     "user experience. I continue to maintain and improve the site.",
  //   ],
  //   year: 2023,
  //   url: "https://delivrd.live",
  //   backgroundImageUrl:
  //     "/images/work/rivera/cover.png",
  //   videoUrl: "/videos/",
  //   media: [
  //     {
  //       type: "image",
  //       url: "/images/work/rivera/img1.png",
  //     },
  //     {
  //       type: "image",
  //       url: "/images/work/rivera/img2.png",
  //     },
  //   ],
    

    
    

  // },

  // {
  //   title: "IIEC  ",
  //   icon: "/images/work/iiec/logo.png",
  //   slug: "iiec",
  //   category: "Showcase",
  //   keywords: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "GSAP",
  //     "Lenis",
  //     "Supabase",
  //     "Vercel",
  //     "Web Design",
  //     "Responsive Design",
  //   ],
  //   summary: [
  //     "Developed a website that helps aspiring EDM producers easily ",
  //     "find and submit demos to popular labels. Designed with a clean, ",
  //     "minimal aesthetic and subtle micro-animations for an engaging ",
  //     "user experience. I continue to maintain and improve the site.",
  //   ],
  //   year: 2023,
  //   url: "https://delivrd.live",
  //   backgroundImageUrl:
  //     "/images/work/iiec/cover.png",
  //   videoUrl: "/videos/",
  //   media: [
  //     {
  //       type: "image",
  //       url: "/images/work/iiec/img1.png",
  //     },
  //     {
  //       type: "image",
  //       url: "/images/work/iiec/img2.png",
  //     },
  //   ],



  // },

  // {
  //   title: "Presave",
  //   projectType: ["Web Design"],
  //   keywords: ["Web Design", "UX Design", "Responsive Design", "Art Direction"],
  //   summary: [
  //     "Designed an intuitive interface for an automated artist song ",
  //     "release platform (formerly SongShare.com), serving thousands ",
  //     "of artists. This 4-week project focused on seamless UX and ",
  //     "efficient developer handoff.",
  //   ],
  //   year: 2024,
  //   backgroundImageUrl:
  //     "https://images.unsplash.com/photo-1735486228450-ef263cc0d6e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   videoUrl: "/videos/presave-preview-compressed.mp4",
  //   link: "https://www.presave.com",
  // },
];
