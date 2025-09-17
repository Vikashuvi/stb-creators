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
    icon: "/images/work/enerjoy/enerjoylogo.jpg",
    slug: "jazmin-wong",
    category: "Portfolio",
    keywords: [
      "Solar Brand Awareness Campaigns",
      "Educational Content Creation & Video Explainers",
      "Organic Social Media Growth (Instagram, Reels & Feed)",
      "Lead Generation via Social Engagement",
      "Trust-Building Messaging & Storytelling",
      "Content Strategy & Calendar Planning",
      "Sustainability & Impact-Driven Content",
      "Solar Energy Solution Showcases",
      "Client Acquisition through Inbound Marketing",
      "Performance Analytics & Optimization",
    ],
    summary: [
      "We helped Enerjoy Solar shine brighter in a competitive market by crafting informative, visually engaging content that educates and inspires.",
      "Through organic socials and targeted storytelling, we built trust and positioned them as a go-to name in solar energy. The result? Increased visibility, quality inbound leads, and a community of followers who believe in clean and affordable energy.",
    ],
    year: 2025,
    url: "https://www.instagram.com/p/DM7nkHNSero/",
    videoUrl: "/videos/Enerjoy_1.mp4",
    backgroundImageUrl: "/images/work/enerjoy/cover.png",
    media: [
      {
        type: "video",
        url: "/videos/Enerjoy_1.mp4",
      },
      {
        type: "image",
        url: "/images/work/enerjoy/img2.png",
      },
      {
        type: "image",
        url: "/images/work/enerjoy/img1.png",
      },

    ],
  },

  {
    title: "SSI",
    icon: "/images/work/socialstats/logo.jpg",
    slug: "ssi",
    category: "Product",
    keywords: [
      "Personal Branding & Profile Strategy",
      "Career & Coaching Content Creation",
      "Educational & Training Workshop Promotion",
      "Short-form Video Content",
      "Thought Leadership & Expert Positioning",
      "Audience Engagement & Q&A Sessions",
      "Testimonials & Success Story Showcases",
      "Social Community Building",
      "Content Calendar Planning & Consistency",
      "Analytics & Growth Tracking",
    ],
    summary: [
      "We helped Kasthuri Kishore transform her 25+ years of experience in the academic sector into an engaging digital presence, crafting content that positions her as a trusted mentor and coach.",
      "Through a mix of inspirational stories, coaching tips, and interactive sessions, she now connects deeply with her audience, attracting learners who value expertise, authenticity, and actionable insight.",
    ],
    year: 2024,
    url: null,
    backgroundImageUrl: "/images/work/socialstats/cover.png",
    videoUrl: "/videos/SSI.mp4",
    media: [
      {
        type: "video",
        url: "/videos/SSI.mp4",
      },
      {
        type: "image",
        url: "/images/work/socialstats/img2.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/img1.png",
      },
    ],
  },

  {
    title: "Tripcoolers",
    icon: "/images/work/trackstack/icon.png",
    slug: "tripcoolers",
    category: "Product",
    keywords: [
      "Brand Awareness Campaigns & Storytelling",
      "Youth / Gen-Z / Parent-Child Friendly Content Creation",
      "Product Showcases & Educational Content (safe personal care)",
      "Micro-Influencer Collaborations & Testimonials",
      "Engagement Posts, Challenges & Interactive Reels",
      "Social Media Strategy & Content Calendar Planning",
      "Visual Identity & Creative Direction",
      "Launch Campaigns (new products, features)",
      "Customer Reviews & Trust-Building Messaging",
      "Analytics & Performance Tracking",
    ],
    summary: [
      "We built Trip Coolers into a must-have travel brand by showcasing their coolers in real travel scenarios, leveraging influencer partnerships, user-generated content, and targeted ads. Our strategy increased brand visibility, drove engagement among travel enthusiasts, and consistently generated high-quality product enquiries.",
    ],
    year: 2025,
    url: null,
    backgroundImageUrl: "/images/work/tripcoolers/cover.png",
    videoUrl: "/videos/Tirp-cooler.mp4",
    media: [
      {
        type: "video",
        url: "/videos/Tirp-cooler.mp4",
      },
      {
        type: "image",
        url: "/images/work/tripcoolers/img2.png",
      },
      {
        type: "image",
        url: "/images/work/tripcoolers/img1.png",
      },
    ],
  },

  // {
  //   title: "Tikitoro",
  //   icon: "/images/work/trackstack/icon.png",
  //   slug: "tikitoro",
  //   category: "Product",
  //   keywords: [
  //     "Brand Awareness Campaigns & Storytelling",
  //     "Youth / Gen-Z / Parent-Child Friendly Content Creation",
  //     "Product Showcases & Educational Content (safe personal care)",
  //     "Micro-Influencer Collaborations & Testimonials",
  //     "Engagement Posts, Challenges & Interactive Reels",
  //     "Social Media Strategy & Content Calendar Planning",
  //     "Visual Identity & Creative Direction",
  //     "Launch Campaigns (new products, features)",
  //     "Customer Reviews & Trust-Building Messaging",
  //     "Analytics & Performance Tracking",
  //   ],
  //   summary: [
  //     "We supported Tikitoro India in building a joyful, trustworthy identity in the personal care space for youth (ages ~4-16).",
  //     "Through vibrant, empathetic storytelling, influencer ties, and interactive content that resonates with both kids and parents, we helped amplify their message of safe self-care with heart.",
  //     "By leaning into authentic moments, highlighting product safety, and engaging the community, we boosted visibility, trust, and strengthened their brand positioning in a competitive market.",
  //   ],
  //   year: 2025,
  //   url: null,
  //   backgroundImageUrl: "/images/work/trackstack/banner.png",
  //   videoUrl: "/videos/Tikitoro.mp4",
  //   media: [
  //     {
  //       type: "video",
  //       url: "/videos/Tikitoro.mp4",
  //     },
  //     {
  //       type: "image",
  //       url: "/images/work/trackstack/img2.png",
  //     },
  //     {
  //       type: "image",
  //       url: "/images/work/trackstack/img1.png",
  //     },
  //   ],
  // },
  {
    title: "Visatosh",
    icon: "/images/work/kick-bass/logo.jpg",
    slug: "visathosh",
    category: "Services",
    keywords: [
      "Creative Concept Shoots Showcasing Acoustic Installations",
      "Client Testimonial & Review Campaigns",
      "Process Highlight Videos (from raw space to treated space)",
      "Interactive Sound Knowledge Series (polls, quizzes, myths vs facts)",
      "Brand Positioning Through Storytelling Posts",
      "Targeted Ads for Architects, Studios & Corporate Offices",
      "Collaboration Content with Audio Engineers & Musicians",
      "LinkedIn Brand Building for B2B Outreach",
      "Instagram Reel Series Featuring Acoustic Tips",
      "Lead Funnel Setup via Social Media CTAs & Forms",
    ],
    summary: [
      "We transformed Visatosh Acoustics’ social presence into an authority hub for soundproofing and acoustic design.",
      "By blending process-driven content, client reviews, and expert tips, we made their complex solutions visually appealing and easy to understand.",
      "Our campaigns helped them connect with decision-makers like architects, studio owners, and corporates, turning social media channels into consistent sources of high-quality leads.",
    ],
    year: 2024,
    url: "https://kick-bass.com",
    backgroundImageUrl: "/images/work/kick-bass/cover.png",
    videoUrl: "/videos/Vishatosh_Timeline.mp4",
    media: [
      {
        type: "video",
        url: "/videos/Vishatosh_Timeline.mp4",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/img2.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/img1.png",
      },
    ],
  },

  {
    title: "SS Constructions",
    icon: "/images/work/westend/icon.png",
    slug: "ss-constructions",
    category: "Portfolio",
    keywords: [
      "Instagram & Facebook Content Strategy",
      "Project Showcase Posts & Portfolio Highlighting",
      "Visual Branding & Architectural Photography",
      "Behind-the-Scenes / Construction Process Videos",
      "Customer Testimonial & Project Case Studies",
      "Engagement Campaigns (Polls, Q&A, Before/After)",
      "Local SEO & Hashtag Optimization for Chennai Builds",
      "Community & Client Trust Building Content",
      "Lead Generation via Informative Content",
      "Performance Analytics & Monthly Reporting",
    ],
    summary: [
      "We partnered with SS Constructions to bring their craftsmanship and architectural excellence into the spotlight.",
      "Through curated visuals, case studies, and storytelling that highlight every detail of their villa, flats, and renovation projects, we’ve helped them build credibility among discerning homeowners.",
      "By engaging the local Chennai audience organically and showcasing quality, trust, and transparency, we’ve turned social media followers into potential clients excited to take the next step.",
    ],
    year: 2024,
    url: "https://itsthewestend.com",
    backgroundImageUrl: "/images/work/westend/cover.png",
    videoUrl: "/videos/SSCONSTRUCTION.mp4",
    media: [
      {
        type: "video",
        url: "/videos/SSCONSTRUCTION.mp4",
      },
      {
        type: "image",
        url: "/images/work/westend/img2.png",
      },
      {
        type: "image",
        url: "/images/work/westend/img1.png",
      },
    ],
  },
  {
    title: "Shree home constructions",
    icon: "/images/work/delivrd/logo.jpg",
    slug: "shree-home-constructions",
    category: "Showcase",
    keywords: [
      "Project showcase reels of completed and ongoing sites",
      "Client testimonial and handover story campaigns",
      "3D design concepts and elevation post series",
      "Before-and-after transformation visuals",
      "Instagram highlights for services, process, and reviews",
      "Geo-targeted lead generation ads",
      "Festive greetings and site milestone creatives",
      "Interactive Q&A reels on construction topics",
      "Local hashtag and location-based SEO strategy",
      "Monthly performance tracking and content optimization",
    ],
    summary: [
      "We helped Shree Home Constructions present their projects as aspirational yet trustworthy through immersive storytelling and high-quality visuals.",
      "By highlighting real construction progress, client stories, and detailed design ideas, we built their credibility and positioned them as a go-to builder for dream homes.",
      "Our localized campaigns consistently drive qualified leads while strengthening their brand identity on social media.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl: "/images/work/delivrd/cover.png",
    videoUrl: "/videos/Shree_home_constructions.mp4",
    media: [
      {
        type: "video",
        url: "/videos/Shree_home_constructions.mp4",
      },
      {
        type: "image",
        url: "/images/work/delivrd/img1.png",
      },
    ],
  },

  {
    title: "Sew with jannu",
    icon: "/images/work/SWJ/logo.jpg",
    slug: "sew-with-jannu",
    category: "Showcase",
    keywords: [
      "Instagram Content Strategy",
      "Reels Production & Editing",
      "Visual Branding & Aesthetic Design",
      "Audience Engagement Campaigns",
      "Influencer Collaborations",
      "Product Photography & Styling",
      "Hashtag Research & Optimization",
      "Community Growth Management",
      "Social Media Calendar Planning",
      "Analytics & Performance Tracking",
    ],
    summary: [
      "We helped SewWithJaanu grow from a passion-driven boutique label to a thriving online brand by creating captivating visual content and running consistent engagement campaigns.",
      "Through authentic storytelling and trend-driven Reels, we built an active community of fashion enthusiasts and turned followers into loyal customers—organically and sustainably.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl: "/images/work/SWJ/cover.png",
    videoUrl: "/videos/",
    media: [
      {
        type: "image",
        url: "/images/work/SWJ/img2.png",
      },
      {
        type: "image",
        url: "/images/work/SWJ/img1.png",
      },
    ],
  },

  {
    title: "Saran Builders",
    icon: "/images/work/delivrd/logo.jpg",
    slug: "saran",
    category: "Showcase",
    keywords: [
      "Social Media Content Strategy & Planning",
      "Project Portfolio Showcases (Completed & Ongoing Builds)",
      "Local Branding & Visual Identity Design",
      "Construction & Site-Progress Photography & Video",
      "Customer Testimonials & Case Study Storytelling",
      "Lead Generation via Facebook/Instagram Campaigns",
      "Community Engagement & Local Trust Building",
      "Before-&-After Transformations",
      "Hashtag & Local SEO Optimization",
      "Performance Tracking & Monthly Analytics",
    ],
    summary: [
      "We worked with Saran Builders to spotlight their craftsmanship and reliability in the South Chennai construction market.",
      "Using a consistent visual style, detailed project features, and authentic stories from satisfied clients, we built their social presence to reflect trust, quality, and professionalism.",
      "Through curated content and engagement campaigns, we turned their Instagram and Facebook into strong sales funnels—connecting them with homeowners who want quality construction without compromise.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl: "/images/work/saran/cover.png",
    videoUrl: "/videos/",
    media: [
      {
        type: "image",
        url: "/images/work/saran/img2.png",
      },
      {
        type: "image",
        url: "/images/work/saran/img1.png",
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

  // (commented-out Rivera, IIEC, Presave unchanged)
];
