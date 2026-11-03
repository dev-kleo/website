// Edit this file to add papers. Filter options, counts and JSON-LD are derived from it.
// PLACEHOLDER entries (ids start with "placeholder-"): replace with real publications.
export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  venueUrl?: string;
  badges?: string[];
  applications: string[];
  domains: string[];
  methods: string[];
  links?: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    id: "placeholder-fdi-spillovers",
    year: 2026,
    title: "[Placeholder] Foreign Direct Investment and Productivity Spillovers in Emerging Markets",
    authors: ["Abhishek Dey", "Jane Placeholder"],
    venue: "SSRN Electronic Journal",
    venueUrl: "https://papers.ssrn.com/",
    badges: ["Preprint"],
    applications: ["International trade & investment"],
    domains: ["Economics"],
    methods: ["Panel data", "Difference-in-differences"],
    links: [{ label: "SSRN", url: "https://papers.ssrn.com/" }, { label: "PDF", url: "https://example.com/placeholder.pdf" }],
  },
  {
    id: "placeholder-llm-forecasting",
    year: 2026,
    title: "[Placeholder] Language Models for Macroeconomic Nowcasting",
    authors: ["John Placeholder", "Abhishek Dey"],
    venue: "Working paper",
    badges: ["Working paper"],
    applications: ["Forecasting", "Financial markets"],
    domains: ["Economics", "AI & data science"],
    methods: ["Machine learning", "Text analysis"],
    links: [{ label: "Code", url: "https://github.com/Luffy-me" }],
  },
  {
    id: "placeholder-sme-ai-adoption",
    year: 2025,
    title: "[Placeholder] AI Adoption and Export Performance of Small Firms",
    authors: ["Abhishek Dey", "Alex Placeholder", "Sam Placeholder"],
    venue: "Journal of International Business Studies (placeholder)",
    venueUrl: "https://example.com/journal",
    badges: ["Under review"],
    applications: ["International trade & investment", "Firm strategy"],
    domains: ["International business", "AI & data science"],
    methods: ["Survey methods", "Panel data"],
    links: [{ label: "Paper", url: "https://example.com/paper" }, { label: "Slides", url: "https://example.com/slides" }],
  },
  {
    id: "placeholder-scholarship-networks",
    year: 2025,
    title: "[Placeholder] Student Mobility and Scholarship Networks: A Graph Analysis",
    authors: ["Abhishek Dey"],
    venue: "Conference on Higher Education Economics (placeholder)",
    badges: ["Online"],
    applications: ["Education & mobility"],
    domains: ["Economics"],
    methods: ["Network analysis", "Machine learning"],
    links: [{ label: "arXiv", url: "https://arxiv.org/" }, { label: "DOI", url: "https://doi.org/" }],
  },
  {
    id: "placeholder-price-tracking",
    year: 2024,
    title: "[Placeholder] Price Dispersion in Online Marketplaces",
    authors: ["Abhishek Dey", "Jane Placeholder"],
    venue: "Google Scholar listing (placeholder)",
    applications: ["Forecasting", "Firm strategy"],
    domains: ["International business"],
    methods: ["Web scraping", "Panel data"],
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/" }],
  },
];
