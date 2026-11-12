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
// export const stats = [
//   { value: "3", label: "End-to-End ML Systems Built & Deployed" },
//   { value: "99.8%", label: "Accuracy · XGBoost IDS" },
//   { value: "100%", label: "Containerized (Docker) Workflows" },
// ];

// Big cards: the strongest projects
export const featuredProjects = [
  {
    id: "1",
    title: "Network Intrusion Detection System (IDS) & Attack Profiling",
    category: "Machine Learning & Security",
    summary:
      "An advanced, supervised modular Machine Learning pipeline designed to classify and profile network traffic using the CICIDS2017 dataset.",
    highlights: [
      
    ],
    stack: ["Scikit-learn", "FastAPI", "React", "Docker", "CICIDS2017", "XGBoost", "Random Forest"],
    github: "https://github.com/Djilali-77/attack_classification",
    demo: null,
  },
  {
    id: "2",
    title: "Zero-Day Network Anomaly Detection System",
    category: "Machine Learning & Security",
    summary:
      "An End-to-End, Full-Stack MLOps project that leverages Unsupervised Machine Learning (Isolation Forest) to detect Zero-Day network threats and anomalous traffic.",
    highlights: [
      
    ],
    stack: ["Scikit-learn", "FastAPI", "React", "Docker", "NSL-KDD", "Isolation Forest"],
    github: "https://github.com/Djilali-77/zero-day-threat-scanner",
    demo: null,
  },
  {
    id: "3",
    title: "DeepAnomaly: PyTorch Autoencoder IDS",
    category: "Deep Learning & Security",
    summary:
      "A full-stack network intrusion detection system Self-Supervised Learning powered by a custom PyTorch Autoencoder.",
    highlights: [
      // "Designed and trained a PyTorch Autoencoder on the UNSW-NB15 dataset to detect anomalous network traffic via MSE reconstruction loss.",
      // "Engineered a dynamic zero-padding FastAPI inference pipeline to handle real-time partial inputs without crashing the scaler.",
      // "Built and containerized (Docker Compose) a modern React/Tailwind dashboard for live threat monitoring and simulation."
    ],
    stack: ["PyTorch", "FastAPI", "React", "TailwindCSS", "Docker", "UNSW-NB15"],
    github: "https://github.com/Djilali-77/l2-DeepAnomaly-PyTorch-Autoencoder",
    demo: null,
  },
];

// Smaller cards: other projects
export const otherProjects = [
  // {
  //   id: "rag",
  //   title: "Enterprise RAG Assistant",
  //   category: "GenAI & Full-Stack",
  //   summary:
  //     "A Q&A system using LangChain, ChromaDB and FastAPI to extract precise answers from custom PDFs via LLMs.",
  //   github: "https://github.com/Djilali-77/Enterprise-RAG-Assistant",
  // },
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
      text: "Every model is evaluated rigorously. Whether it's tuning the MSE threshold of an Autoencoder or handling severe dataset imbalances, I rely on metrics to drive decisions.",
    },
    {
      icon: "🚢",
      title: "Ship it",
      text: "A model in a notebook helps nobody. I deploy my AI engines behind FastAPI backends and connect them to modern React dashboards for real-world interaction.",
    },
    {
      icon: "🔁",
      title: "Make it reproducible",
      text: "I package my entire stack (Frontend + Backend) using Docker and Docker Compose so anyone can run my systems with a single command.",
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
    skills: ["Deep Learning (PyTorch)", "Autoencoders", "Anomaly Detection", "Machine Learning", "Scikit-Learn", /*"Reinforcement Learning"*/],
  },
  {
    title: "🌐 Full-Stack",
    skills: ["React JS", "FastAPI", "Node.js", "Tailwind CSS", "RESTful APIs", "Web Scraping (Playwright)"],
  },
  {
    title: "⚙️ MLOps & Infrastructure",
    skills: ["Docker & Compose", "Vercel / Render", "LangChain", "ChromaDB", "Weights & Biases", "Network Automation (Netmiko)"],
  },
];