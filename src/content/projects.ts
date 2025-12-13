// Placeholder content for 4 ML projects

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  whyItMatters: string;
  dataSummary: string;
  methods: string;
  metrics: string;
  resultsHighlights: string;
  stack: string[];
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  writeupUrl: string;
  images: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    oneLiner: "Predicting which customers are likely to churn for a SaaS platform.",
    problem: "High churn rates impact revenue and growth for SaaS businesses.",
    whyItMatters: "Reducing churn directly increases ARR and customer lifetime value.",
    dataSummary: "100k+ user records, tabular, time-series, engineered features, no leakage.",
    methods: "Baseline: Logistic Regression → XGBoost → Feature selection → SHAP analysis.",
    metrics: "AUC: 0.89, Precision@Top10%: 0.72",
    resultsHighlights: "Reduced churn by 18% in pilot, actionable insights for retention.",
    stack: ["Python", "Pandas", "XGBoost", "SHAP", "Docker"],
    tags: ["tabular", "churn", "production"],
    repoUrl: "https://github.com/nishantatgit/churn-prediction",
    demoUrl: "#",
    writeupUrl: "#",
    images: [],
    featured: true,
  },
  {
    slug: "nlp-support-ticket-routing",
    title: "NLP Support Ticket Routing",
    oneLiner: "Automated routing of support tickets using NLP classification.",
    problem: "Manual ticket triage is slow and error-prone, delaying response times.",
    whyItMatters: "Faster, more accurate routing improves customer satisfaction and efficiency.",
    dataSummary: "50k+ tickets, multi-label, text, stratified split, handled class imbalance.",
    methods: "Baseline: TF-IDF + Logistic Regression → fine-tuned BERT → error analysis.",
    metrics: "Macro F1: 0.81, Routing accuracy: 92%",
    resultsHighlights: "Reduced triage time by 60%, improved first-response SLAs.",
    stack: ["Python", "PyTorch", "Transformers", "scikit-learn"],
    tags: ["nlp", "classification", "bert"],
    repoUrl: "https://github.com/nishantatgit/ticket-routing-nlp",
    demoUrl: "#",
    writeupUrl: "#",
    images: [],
    featured: true,
  },
  {
    slug: "energy-forecasting-timeseries",
    title: "Energy Demand Forecasting",
    oneLiner: "Forecasting hourly energy demand for a utility provider.",
    problem: "Accurate demand forecasts are critical for grid stability and cost savings.",
    whyItMatters: "Improved forecasts reduce over-provisioning and blackouts.",
    dataSummary: "3 years hourly data, weather features, train/val/test split, no leakage.",
    methods: "Baseline: ARIMA → LSTM → Feature engineering → Hyperparameter tuning.",
    metrics: "MAE: 0.13, RMSE: 0.21",
    resultsHighlights: "Improved forecast accuracy by 22%, enabled dynamic pricing.",
    stack: ["Python", "TensorFlow", "pandas", "matplotlib"],
    tags: ["time-series", "forecasting", "lstm"],
    repoUrl: "https://github.com/nishantatgit/energy-forecasting",
    demoUrl: "#",
    writeupUrl: "#",
    images: [],
    featured: true,
  },
  {
    slug: "rag-llm-knowledge-base",
    title: "RAG-powered Knowledge Base",
    oneLiner: "Retrieval-Augmented Generation for internal knowledge base Q&A.",
    problem: "Employees struggle to find accurate answers in large documentation.",
    whyItMatters: "Faster, more accurate answers boost productivity and reduce support load.",
    dataSummary: "100k+ docs, embeddings, chunked, retrieval pipeline, eval set.",
    methods: "Baseline: BM25 → Dense retrieval → OpenAI GPT-3.5 → RAG pipeline.",
    metrics: "Top-1 accuracy: 84%, Mean reciprocal rank: 0.78",
    resultsHighlights: "Reduced internal support tickets by 35%, improved answer quality.",
    stack: ["Python", "OpenAI", "FAISS", "LangChain"],
    tags: ["rag", "llm", "retrieval"],
    repoUrl: "https://github.com/nishantatgit/rag-knowledge-base",
    demoUrl: "#",
    writeupUrl: "#",
    images: [],
    featured: true,
  },
];
