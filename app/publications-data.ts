// Add papers here. Filter options, counts and JSON-LD are derived from this array.
// Real data only: tests/rendered-html.test.mjs fails on empty, example.com or bare-homepage URLs.
export type Status = "Preprint" | "Under review" | "In preparation" | "Published";
export const LINK_LABELS = { paper: "Paper", pdf: "PDF", ssrn: "SSRN", arxiv: "arXiv", doi: "DOI", code: "Code", slides: "Slides" } as const;

export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue?: string; // journal, series or repository; leave out for preprints without one
  venueUrl?: string;
  status: Status;
  statusNote?: string; // e.g. the journal a submission is under review at
  applications: string[];
  domains: string[];
  methods: string[];
  abstract?: string; // one sentence
  bibtex?: string; // enables the Cite button
  links?: Partial<Record<keyof typeof LINK_LABELS, string>>; // only keys with a real URL
};

/* TEMPLATE (not rendered): copy into the array below and fill with real data.
{
  id: "short-unique-slug",
  year: 2026,
  title: "",
  authors: ["First Author", "Abhishek Dey"],
  venue: "",
  venueUrl: "",
  status: "Preprint", // Preprint | Under review | In preparation | Published
  applications: [],
  domains: [],
  methods: [],
  abstract: "",
  bibtex: "",
  links: { paper: "", pdf: "", ssrn: "", arxiv: "", doi: "", code: "", slides: "" },
},
*/
export const publications: Publication[] = [
  {
    id: "stack-overflow-after-chatgpt",
    year: 2026,
    title: "Generative AI and the Public Programming Commons: What We Know About Stack Overflow After ChatGPT, 2023–2026",
    authors: ["Abhishek Dey"],
    venue: "SSRN",
    status: "Preprint",
    applications: [],
    domains: [],
    methods: [],
    // TODO: add links.ssrn once the public SSRN URL is confirmed.
  },
  {
    id: "rag-assistants-higher-education",
    year: 2026,
    title: "Evaluating Retrieval-Augmented Generation Assistants for Higher-Education Information Services: A Systematic Review of Metrics, Test Sets and Failure Modes",
    authors: ["Abhishek Dey"],
    venue: "Zenodo and OSF Preprints",
    status: "Preprint",
    applications: [],
    domains: [],
    methods: [],
    links: { doi: "https://doi.org/10.5281/zenodo.23659256" },
  },
  {
    id: "agent-labels-accountable-deployment",
    year: 2026,
    title: "From Agent Labels to Accountable Deployment: Evidence Maturity and Meaningful Human Oversight for Agentic AI in Higher Education",
    authors: ["Abhishek Dey"],
    venue: "Research Square",
    status: "Under review",
    statusNote: "Discover Education",
    applications: [],
    domains: [],
    methods: [],
    // TODO: add links.paper once the Research Square URL is confirmed.
  },
  {
    id: "beyond-the-agent-label",
    year: 2026,
    title: "Beyond the Agent Label: Evidence Maturity, Human Monitoring, and Governance of Agentic AI in Higher Education: A Critical Integrative Review",
    authors: ["Abhishek Dey"],
    venue: "OSF Preprints",
    status: "Preprint",
    applications: [],
    domains: [],
    methods: [],
    links: { doi: "https://doi.org/10.35542/osf.io/va5pz_v1" },
  },
  {
    id: "exchange-rate-pass-through-russia",
    year: 2026,
    title: "Exchange-Rate Pass-Through and Food Inflation in Russia: Evidence from Monthly Data", // full title taken from app/writing-data.ts
    authors: ["Abhishek Dey"],
    status: "Under review",
    statusNote: "Post-Communist Economies",
    applications: [],
    domains: [],
    methods: [],
  },
];
