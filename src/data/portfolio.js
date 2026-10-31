// src/data/portfolio.js
// All the website content lives here.
// To change a text later, edit this file only (no need to touch the design).

export const profile = {
  name: "FARAOUN Djillali",
  role: "Systems & AI Engineering",
  school: "ENSTTIC",
  headline: ["Bridging Network Infrastructure", "& Artificial Intelligence"],
  intro:
    "I'm an engineering student at ENSTTIC. I build and rigorously evaluate machine learning systems for networks and real-world data, then ship them as full-stack applications.",
  github: "https://github.com/Djilali-77",
  linkedin: "https://www.linkedin.com/in/faraoun-djillali-51217b326/",
  email: "faraoundjilali.fd@gmail.com",
};

// Small numbers shown under the hero text
// Each label names its project so visitors know where the number comes from
export const stats = [
  { value: "0.939", label: "ROC AUC · AI-Powered IDS" },
  { value: "1.6%", label: "False alarm rate · AI-Powered IDS" },
  { value: "2", label: "End-to-end ML systems · IDS & DzAuto-Radar" },
];

// Big cards: the two strongest projects
export const featuredProjects = [
  {
    id: "ids",
    title: "AI-Powered Intrusion Detection System",
    category: "Deep Learning & Security",
    summary:
      "An autoencoder trained on normal traffic to flag anomalies in network flows, compared against a classical baseline and served through a live dashboard.",
    highlights: [
      "ROC AUC 0.939 vs 0.861 for the Isolation Forest baseline",
      "Precision 0.890 with a 1.6% false positive rate",
      "Started as a study during an immersion internship at Algérie Télécom",
    ],
    stack: ["PyTorch", "FastAPI", "React", "Docker", "CICIDS2017"],
    github: "https://github.com/Djilali-77/AI-Powered-IDS",
    demo: "https://ai-powered-ids.vercel.app",
  },
  {
    id: "dzauto",
    title: "DzAuto-Radar",
    category: "Data Engineering & ML",
    summary:
      "A dockerized pipeline for the Algerian car market: it scrapes Ouedkniss, cleans the data, spots good deals and predicts fair prices.",
    highlights: [
      "Isolation Forest to detect underpriced listings",
      "Random Forest model for price prediction",
      "FastAPI backend with a React dashboard, run with Docker Compose",
    ],
    stack: ["Python", "Playwright", "scikit-learn", "FastAPI", "React", "Docker"],
    github: "https://github.com/Djilali-77/car-market-pipeline",
    demo: null, // no live demo yet
  },
    {
    id: "bannerhound",
    title: "BannerHound Network Scanner",
    category: "Networking & Security",
    summary:
      "A concurrent network auditing tool that scans hosts and ports, grabs service banners and fingerprints the operating system, with live results in a web interface.",
    highlights: [
      "Concurrent scanning, with results streamed in real time over SSE",
      "Banner grabbing and OS fingerprinting to identify what runs on each host",
      "CSV export of the findings, packaged with Docker Compose",
    ],
    stack: ["Python", "FastAPI", "React", "SSE", "Docker"],
    github: "https://github.com/Djilali-77/BannerHound",
    demo: null, // no live demo for now
  },
];

// Smaller cards: other projects
export const otherProjects = [
  {
    id: "rag",
    title: "Enterprise RAG Assistant",
    category: "GenAI & Full-Stack",
    summary:
      "A Q&A system using LangChain, ChromaDB and FastAPI to extract precise answers from custom PDFs via LLMs.",
    github: "https://github.com/Djilali-77/Enterprise-RAG-Assistant",
  },
  {
    id: "ai_diagnostic",
    title: "Retina AI Diagnostic System",
    category: "Deep Learning & ResNet18",
    summary:
      "An advanced AI application that detects Diabetic Retinopathy from retinal scans.",
    github: "https://github.com/Djilali-77/Blindness-Detection",
  },

];

// ---------- Navigation links (used by the Navbar) ----------
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

// ---------- About section ----------
export const about = {
  paragraphs: [
    "I come from a telecommunications and networking background, which taught me how real infrastructure behaves: protocols, traffic, failures. Today I apply machine learning to those problems.",
    "I care about the whole lifecycle: collecting and cleaning data, training models, comparing them honestly against baselines, and deploying them in containerized full-stack applications.",
    "From detecting network intrusions with autoencoders to optimizing energy grids with Reinforcement Learning, I'm drawn to problems where a model has to prove itself on real data.",
  ],
  principles: [
    {
      icon: "📏",
      title: "Measure, don't guess",
      text: "Every model is compared against a baseline. My IDS autoencoder reaches 0.939 ROC AUC against 0.861 for Isolation Forest.",
    },
    {
      icon: "🚢",
      title: "Ship it",
      text: "A model in a notebook helps nobody. I deploy mine behind an API with a dashboard, like the live IDS demo.",
    },
    {
      icon: "🔁",
      title: "Make it reproducible",
      text: "Docker Compose and CI so anyone can run my projects with a single command and get the same results.",
    },
  ],
};

// ---------- Skills section ----------
export const skillCategories = [
  {
    title: "💻 Core Engineering",
    skills: ["Python", "C", "Algorithms", "Operating Systems", "Network Protocols (OSPF/BGP)", "Linux"],
  },
  {
    title: "🤖 Data & AI",
    skills: ["Deep Learning (PyTorch)", "Autoencoders", "Anomaly Detection", "Machine Learning", "Scikit-Learn", "Reinforcement Learning", "Computer Vision"],
  },
  {
    title: "🌐 Full-Stack",
    skills: ["React JS", "FastAPI", "Node.js", "Tailwind CSS", "RESTful APIs", "Web Scraping (Playwright)"],
  },
  {
    title: "⚙️ MLOps & Infrastructure",
    skills: ["Docker & Compose", "GitHub Actions (CI)", "Vercel / Render", "LangChain", "ChromaDB", "Weights & Biases", "Network Automation (Netmiko)"],
  },
];