export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type BlogPost = {
  slug: string;
  href?: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  topic: string;
  sections: readonly ArticleSection[];
  references?: readonly { label: string; href: string }[];
};

export type AcademicPaper = {
  title: string;
  publicationType: string;
  year: string;
  description: string;
  researchAreas: readonly string[];
  status: string;
  href: string;
  // Short venue name and monogram used on the home page research cards.
  venue: string;
  mark: string;
};

// Add a post here to publish a complete, indexable article at /writing/[slug].
// Keep each post focused on one topic, begin with a direct answer in `summary`,
// and include sources in `references` when you make research-based claims.
export const blogPosts: BlogPost[] = [
  {
    slug: "education-in-russia-scholarship-journey",
    href: "/education-in-russia-scholarship-journey",
    title: "My Education in Russia Scholarship Journey",
    summary: "How I received a Russian Government Scholarship, began my master’s degree in Chelyabinsk, and learned what funded study in Russia actually covers.",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-12",
    topic: "Education in Russia",
    sections: [],
  },
  {
    slug: "south-ural-state-university-experience-review",
    href: "/south-ural-state-university-experience-review",
    title: "South Ural State University Experience: My Honest Review",
    summary: "An Indian master's student shares an honest South Ural State University review covering academics, professors, scholarships, Russian life, work, and Chelyabinsk.",
    publishedAt: "2026-09-04",
    topic: "Student experience",
    sections: [],
  },
];

// Add public papers, reviews, preprints, or conference material here.
// Use a direct PDF, DOI, SSRN, Google Scholar, or publisher link in `href`.
export const academicPapers: AcademicPaper[] = [
  {
    title: "Generative AI and the Public Programming Commons: What We Know About Stack Overflow After ChatGPT, 2023–2026",
    publicationType: "Preprint / Working Paper",
    year: "2026",
    // TODO: Replace this line with the abstract from the SSRN page.
    description: "A working paper on what is known about Stack Overflow, one of the web's largest public programming commons, after the arrival of ChatGPT, covering 2023 to 2026.",
    researchAreas: ["Generative AI", "Stack Overflow", "Knowledge Commons"],
    status: "Preprint",
    // TODO: Replace with the public SSRN abstract page URL.
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7555720",
    venue: "SSRN",
    mark: "SSRN",
  },
  {
    title: "Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education — A Critical Integrative Review",
    publicationType: "Preprint / Review Article",
    year: "2026",
    description: "A critical integrative review examining the evidence maturity of agentic AI systems in higher education, focusing on governance frameworks, meaningful human oversight, and responsible AI deployment.",
    researchAreas: ["Artificial Intelligence", "AI Governance", "Educational Technology", "Higher Education"],
    status: "Preprint",
    href: "https://osf.io/va5pz_v1",
    venue: "OSF Preprints",
    mark: "OSF",
  },
  {
    title: "From Agent Labels to Accountable Deployment: Evidence Maturity and Meaningful Human Oversight for Agentic AI in Higher Education",
    publicationType: "Preprint / Critical Integrative Review",
    year: "2026",
    description: "A review of whether current evidence supports giving agentic AI consequential roles in higher education, proposing the Autonomy-Oversight-Evidence framework: delegated autonomy should not exceed the maturity of the evidence or the strength of accountable human oversight.",
    researchAreas: ["Agentic AI", "AI Governance", "Human Oversight", "Higher Education"],
    // Research Square v1 (not peer reviewed); under review at Discover Education per the page's journal logo.
    status: "Under review",
    href: "https://www.researchsquare.com/article/rs-11020094/latest",
    venue: "Research Square",
    mark: "RS",
  },
  {
    title: "Evaluating Retrieval-Augmented Generation Assistants for Higher-Education Information Services: A Systematic Review of Metrics, Test Sets and Failure Modes",
    publicationType: "Preprint / Systematic Review",
    year: "2026",
    description: "A systematic review of 59 studies on retrieval-augmented generation assistants that answer university students' questions, examining the metrics, test sets and failure modes they report, and proposing a minimum reporting checklist.",
    researchAreas: ["Retrieval-Augmented Generation", "Evaluation", "Higher Education", "Systematic Review"],
    status: "Preprint",
    href: "https://zenodo.org/records/23659588",
    venue: "Zenodo",
    mark: "ZEN",
  },
  {
    title: "Exchange-Rate Pass-Through and Food Inflation in Russia: Evidence from Monthly Data",
    publicationType: "Research Article",
    year: "2026",
    description: "An empirical economics study investigating the relationship between exchange-rate movements and food inflation in Russia using monthly macroeconomic data.",
    researchAreas: ["Economics", "International Finance", "Inflation", "Macroeconomics"],
    // Submitted to Post-Communist Economies on 8 September 2026. Update when the decision arrives.
    status: "Under review",
    // TODO: Replace with the journal page or DOI URL.
    href: "ADD_JOURNAL_OR_DOI_LINK",
    venue: "Post-Communist Economies",
    mark: "PCE",
  },
];
