import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STB Creators",
  description: "STB Creators",

  // Basic SEO
  keywords: [
    "STB Creators",
    "Senior software design engineer",
    "Software engineer",
    "Frontend engineer",
    "Software architect",
    "Software engineer",
    "Software developer",
    "Design engineer",
  ],
  authors: [{ name: "STB Creators", url: "https://www.stbcreators.space/" }],
  creator: "STB Creators",
  publisher: "STB Creators",

  // Open Graph
  openGraph: {
    title: "STB Creators",
    description:
      "STB Creators",
    url: "https://www.stbcreators.space/",
    siteName: "STB Creators",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "STB Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "STB Creators",
    description:
      "STB Creators",
    creator: "@itsjay.us",
    images: [
      {
        url: "/src/app/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "STB Creators",
      },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.stbcreators.space/",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Other
  category: "Portfolio",
  colorScheme: "light dark",
  themeColor: "#FBC1D5",
};
