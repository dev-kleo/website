// Add papers here. Filter options, counts and JSON-LD are derived from this array.
// Real data only: tests/rendered-html.test.mjs fails on empty, example.com or bare-homepage URLs.
export type Status = "Preprint" | "Working paper" | "Under review" | "Published";
export const LINK_LABELS = { paper: "Paper", pdf: "PDF", ssrn: "SSRN", arxiv: "arXiv", doi: "DOI", code: "Code", slides: "Slides" } as const;

export type Publication = {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue?: string; // journal, series or repository; leave out for preprints without one
  venueUrl?: string;
  status: Status;
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
  status: "Preprint", // Preprint | Working paper | Under review | Published
  applications: [],
  domains: [],
  methods: [],
  abstract: "",
  bibtex: "",
  links: { paper: "", pdf: "", ssrn: "", arxiv: "", doi: "", code: "", slides: "" },
},
*/
export const publications: Publication[] = [];
