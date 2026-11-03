export const profile = {
  name: "Abhishek Dey",
  brand: "Dey Intelligence",
  role: "AI Engineer & Product Builder",
  description: "Portfolio of Abhishek Dey, an AI engineer and product builder creating reliable AI systems, developer tools, and research-driven software.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deyintelligence.com",
  currentFocusUpdated: "September 1, 2026",
  links: {
    github: "https://github.com/Luffy-me",
    linkedin: "https://www.linkedin.com/in/abhishekdeyint",
    email: "hello.deyabhishek@gmail.com",
    phone: "+79128083769",
    orcid: "https://orcid.org/0009-0007-4913-7090",
    resume: undefined,
  },
} as const;

export const hasWriting = true;
export const hasReading = true;

export const experience = [
  {
    index: "01",
    title: "Education",
    paragraphs: [
      "MSc Economics (International Business), South Ural State University, 2025–2027, in progress.",
      "BSc Computer Science, Kalinga University, 2019–2022.",
    ],
  },
  {
    index: "02",
    title: "Independent practice",
    paragraphs: [
      "Web developer and Google Ads administrator, self-employed in Kolkata, 2019–2025. Founded and ran an advertising firm for small businesses new to digital advertising.",
      "Since 2025, building AI tools and browser extensions as a solo developer in Chelyabinsk.",
    ],
  },
  {
    index: "03",
    title: "Credentials",
    paragraphs: [
      "Google Project Management and Google Business Intelligence certificates. edX APA POS-PSY certificate.",
      "Bengali and Hindi (native), English (IELTS 7.0), Russian (A2).",
    ],
  },
] as const;

export const navigationItems = [
  { href: "/projects", label: "Work" },
  ...(hasWriting ? [{ href: "/publications", label: "Publications" }] : []),
  ...(hasReading ? [{ href: "/reading", label: "Reading" }] : []),
  { href: "/about", label: "About" },
  ...(profile.links.resume ? [{ href: profile.links.resume, label: "Resume" }] : []),
];
