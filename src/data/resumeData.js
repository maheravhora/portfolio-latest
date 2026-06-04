// ─── Personal Info ───────────────────────────────
export const personalInfo = {
  name:       'Mahera Vhora',
  title:      'AI/ML Engineer | Generative AI Specialist | Python Developer',
  email:      'voramahera24@gmail.com',
  location:   'India',
  linkedin:   'https://www.linkedin.com/in/maheravhora-043172268',
  github:     'https://github.com/maheravhora',
  freelancer: 'https://www.freelancer.com/u/maheravhora',
  calendly:   '#',
  resumeUrl:  '#',
};

// ─── Hero ─────────────────────────────────────────
export const heroIntro =
  'IBM Certified Generative AI Specialist with expertise in LLMs, RAG Pipelines, Voice AI, LangChain, FastAPI and Enterprise AI Solutions. I build production-ready AI applications that solve real-world problems and drive measurable business impact.';

export const heroMetrics = [
  { label: 'Years Experience',    value: 1,   suffix: '+' },
  { label: 'AI Projects',         value: 5,  suffix: '+' },
  { label: 'Certifications',      value: 10,  suffix: '+' },
  { label: 'Deployments',         value: 5,   suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

// ─── Expertise ────────────────────────────────────
export const expertiseData = [
  {
    icon: '🤖',
    title: 'Generative AI',
    desc: 'Building intelligent AI systems with cutting-edge LLMs',
    tags: ['GPT-4', 'Claude', 'Gemini', 'Prompt Engineering', 'Fine-tuning', 'OpenAI API'],
  },
  {
    icon: '📚',
    title: 'LLMs & RAG Systems',
    desc: 'End-to-end retrieval-augmented generation pipelines',
    tags: ['LangChain', 'RAG Pipelines', 'Vector DB', 'ChromaDB', 'Pinecone', 'AI Agents'],
  },
  {
    icon: '🎤',
    title: 'Voice AI',
    desc: 'Multilingual voice assistants with STT and TTS',
    tags: ['Whisper', 'Speech-to-Text', 'gTTS', 'ElevenLabs', 'PyAudio', 'Multilingual'],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Scalable APIs and microservices for AI applications',
    tags: ['FastAPI', 'Django', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Authentication'],
  },
  {
    icon: '📊',
    title: 'Data Science & ML',
    desc: 'From raw data to actionable insights and ML models',
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'SQL', 'Tableau'],
  },
  {
    icon: '☁️',
    title: 'Tools & Cloud',
    desc: 'Modern DevOps and cloud infrastructure for AI',
    tags: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Streamlit', 'API Integration'],
  },
];

// ─── Tech Stack ───────────────────────────────────
export const techStack = {
  row1: [
    { name: 'Python',      emoji: '🐍' },
    { name: 'LangChain',   emoji: '🔗' },
    { name: 'FastAPI',     emoji: '⚡' },
    { name: 'OpenAI',      emoji: '🤖' },
    { name: 'React',       emoji: '⚛️' },
    { name: 'TensorFlow',  emoji: '🧠' },
    { name: 'MongoDB',     emoji: '🍃' },
    { name: 'AWS',         emoji: '☁️' },
    { name: 'PostgreSQL',  emoji: '🐘' },
  ],
  row2: [
    { name: 'Whisper',     emoji: '🎤' },
    { name: 'ChromaDB',    emoji: '🎯' },
    { name: 'Django',      emoji: '🌿' },
    { name: 'Streamlit',   emoji: '📊' },
    { name: 'Pandas',      emoji: '🐼' },
    { name: 'Keras',       emoji: '🔬' },
    { name: 'Git',         emoji: '📁' },
    { name: 'Linux',       emoji: '🐧' },
    { name: 'Tableau',     emoji: '📈' },
    { name: 'Pinecone',    emoji: '🌲' },
  ],
};

// ─── Projects ─────────────────────────────────────
export const projectsData = [
  {
    id: 0,
    title: 'Mahera.io - Private AI Assistant',
    category: 'LLMs',
    description: 'A fully client-side AI chat interface running LLMs (Llama 3.2 3B, Qwen 2.5 7B) directly in the browser via WebGPU. Features 100% data privacy, offline capabilities after caching, and zero server latency.',
    tags: ['WebGPU', 'WebLLM', 'React', 'Offline AI', 'Privacy'],
    github: '#',
    demo: '#',
    featured: true,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 1,
    title: 'AI SQL Chatbot',
    category: 'LLMs',
    description: 'Natural language to SQL chatbot with voice support, multi-table querying, context memory, and real-time database interaction using LangChain agents.',
    tags: ['LangChain', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL', 'Whisper'],
    github: '#',
    demo: '#',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Multilingual Voice Assistant',
    category: 'Voice AI',
    description: 'Real-time voice assistant supporting 10+ languages with STT, LLM reasoning, TTS and MongoDB conversation history. Deployed as a FastAPI microservice.',
    tags: ['Whisper', 'FastAPI', 'gTTS', 'MongoDB', 'React', 'LangChain'],
    github: '#',
    demo: '#',
    featured: true,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'StockVision AI',
    category: 'Data Science',
    description: 'Interactive web dashboard for stock market analysis using Streamlit. Integrates Yahoo Finance data with a Keras LSTM model to forecast future price trends and employs NLP for sentiment analysis.',
    tags: ['Python', 'Streamlit', 'Keras', 'LSTM', 'Yahoo Finance', 'NLP'],
    github: '#',
    demo: '#',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    title: 'TravelPackage Platform',
    category: 'Web App',
    description: 'Full-stack travel package booking platform with user and admin panels, package scheduling, booking management, and analytics dashboard.',
    tags: ['Django', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
    github: '#',
    demo: '#',
    featured: false,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    title: 'RAG Knowledge Base',
    category: 'LLMs',
    description: 'Enterprise-grade RAG pipeline for document Q&A with PDF ingestion, semantic chunking, OpenAI embeddings, ChromaDB vector store, and GPT-4 reasoning.',
    tags: ['LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'Python', 'React'],
    github: '#',
    demo: '#',
    featured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
  },
];

export const projectCategories = ['All', 'LLMs', 'Voice AI', 'Web App', 'Data Science'];

// ─── Experience ───────────────────────────────────
export const experienceData = [
  {
    id: 1,
    role: 'AI/ML Engineer (Freelance)',
    company: 'Freelancer.com',
    companyUrl: 'https://www.freelancer.com/u/maheravhora',
    period: '2026 – Present',
    location: 'Remote',
    description: 'Building production AI applications for global clients — SQL chatbots, RAG pipelines, and LLM-powered APIs.',
    highlights: [
      'Developed AI SQL Chatbot with voice input and natural language querying',
      'Built RAG pipelines for enterprise document intelligence',
      'Delivered 5+ AI projects with 100% client satisfaction',
      'Integrated OpenAI, LangChain, and FastAPI in microservice architecture',
    ],
    tags: ['LangChain', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Zoho Developer',
    company: 'Cognition Inc',
    companyUrl: '#',
    period: '2025 – 2026',
    location: 'Remote',
    description: 'Led enterprise CRM migration and automation projects using Zoho suite, integrating AI-powered workflows.',
    highlights: [
      'Migrated enterprise CRM data with zero downtime',
      'Built Deluge scripts for automated business workflows',
      'Integrated third-party APIs with Zoho CRM',
      'Delivered custom dashboards for executive reporting',
    ],
    tags: ['Zoho CRM', 'Deluge', 'REST APIs', 'JavaScript', 'Analytics'],
  },
  {
    id: 3,
    role: 'AI/ML Developer',
    company: 'MindSyncX Labs',
    companyUrl: '#',
    period: '2025',
    location: 'Remote',
    description: 'Developed RAG systems, voice AI pipelines, and intelligent AI agents for various client projects.',
    highlights: [
      'Built multilingual voice assistant with Whisper + gTTS',
      'Implemented RAG pipeline with ChromaDB and LangChain',
      'Created AI agent framework for automated task execution',
      'Optimized LLM inference for production deployment',
    ],
    tags: ['Python', 'LangChain', 'Whisper', 'ChromaDB', 'FastAPI'],
  },
  {
    id: 4,
    role: 'Data Science Trainee',
    company: 'ZiAo Development',
    companyUrl: '#',
    period: '2024',
    location: 'India',
    description: 'Hands-on training in machine learning, data analysis, and building data-driven applications.',
    highlights: [
      'Built and deployed ML models for predictive analytics',
      'Created interactive Tableau dashboards for business insights',
      'Performed EDA on large datasets using Pandas and NumPy',
      'Developed StockVision AI with LSTM time-series forecasting',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Tableau', 'SQL'],
  },
];

// ─── Architecture ─────────────────────────────────
export const architectureData = [
  {
    title: 'AI SQL Chatbot',
    subtitle: 'Natural Language → Database',
    nodes: [
      { icon: '🎤', label: 'Voice / Text\nInput', step: 1 },
      { icon: '🔊', label: 'Whisper\nSTT', step: 2 },
      { icon: '🤖', label: 'LangChain\nAgent', step: 3 },
      { icon: '💾', label: 'SQL\nGenerator', step: 4 },
      { icon: '🗄️', label: 'PostgreSQL\nDatabase', step: 5 },
      { icon: '📢', label: 'TTS\nResponse', step: 6 },
    ],
    tags: ['LangChain', 'Whisper', 'PostgreSQL', 'FastAPI', 'OpenAI'],
  },
  {
    title: 'RAG Pipeline',
    subtitle: 'Document Intelligence System',
    nodes: [
      { icon: '📄', label: 'Document\nUpload', step: 1 },
      { icon: '✂️', label: 'Text\nChunker', step: 2 },
      { icon: '🔢', label: 'OpenAI\nEmbeddings', step: 3 },
      { icon: '🎯', label: 'Vector DB\nChromaDB', step: 4 },
      { icon: '🔍', label: 'Semantic\nRetrieval', step: 5 },
      { icon: '💡', label: 'GPT-4\nAnswer', step: 6 },
    ],
    tags: ['LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'React'],
  },
  {
    title: 'Voice Assistant',
    subtitle: 'Multilingual AI Assistant',
    nodes: [
      { icon: '🎙️', label: 'Microphone\nInput', step: 1 },
      { icon: '🔊', label: 'Whisper\nSTT', step: 2 },
      { icon: '🧠', label: 'Intent\nDetection', step: 3 },
      { icon: '🔗', label: 'LangChain\nReasoning', step: 4 },
      { icon: '🔈', label: 'gTTS\nSynthesis', step: 5 },
      { icon: '🌍', label: 'Audio\nOutput', step: 6 },
    ],
    tags: ['Whisper', 'gTTS', 'LangChain', 'FastAPI', 'MongoDB'],
  },
];

// ─── Certifications ───────────────────────────────
export const certificationsData = [
  { issuer: 'IBM',      title: 'Generative AI Engineering Professional Certificate',     date: '2024', credentialUrl: '#', color: '#1F70C1' },
  { issuer: 'IBM',      title: 'AI Developer Professional Certificate',                  date: '2024', credentialUrl: '#', color: '#1F70C1' },
  { issuer: 'IBM',      title: 'Data Science Professional Certificate',                  date: '2024', credentialUrl: '#', color: '#1F70C1' },
  { issuer: 'AWS',      title: 'Cloud Foundations Professional Certificate',              date: '2024', credentialUrl: '#', color: '#FF9900' },
  { issuer: 'HP',       title: 'Data Science Professional Certificate',                  date: '2024', credentialUrl: '#', color: '#0096D6' },
  { issuer: 'Coursera', title: 'Machine Learning Specialization (Stanford / DeepLearning.AI)', date: '2023', credentialUrl: '#', color: '#0056D2' },
  { issuer: 'Google',   title: 'Google Data Analytics Certificate',                      date: '2023', credentialUrl: '#', color: '#4285F4' },
  { issuer: 'NVIDIA',   title: 'Fundamentals of Deep Learning Certificate',              date: '2024', credentialUrl: '#', color: '#76B900' },
  { issuer: 'Microsoft', title: 'Azure AI Fundamentals (AI-900)',                       date: '2024', credentialUrl: '#', color: '#0078D4' },
  { issuer: 'Meta',     title: 'Back-End Development Professional Certificate',          date: '2023', credentialUrl: '#', color: '#1877F2' },
];

// ─── Achievements ─────────────────────────────────
export const achievementsData = [
  { icon: '🏆', title: 'IBM Certified GenAI Specialist', desc: 'Earned IBM Professional Certificate in Generative AI Engineering — top 5% of learners globally.', badge: 'Certified' },
  { icon: '🚀', title: '5+ Production AI Deployments',   desc: 'Successfully deployed AI systems in production serving real users with measurable business impact.', badge: 'Production' },
  { icon: '💻', title: 'Open Source Contributor',        desc: 'Active GitHub contributor with AI/ML projects, tools, and tutorials helping the community.', badge: 'Open Source' },
  { icon: '🌍', title: 'Global Freelance AI Expert',     desc: 'Top-rated AI freelancer delivering enterprise-grade solutions to clients across multiple countries.', badge: 'Freelancer' },
];

// ─── Testimonials ─────────────────────────────────
export const testimonialsData = [
  {
    quote: "Mahera delivered an exceptional AI chatbot that transformed how our team queries databases. The natural language interface is incredibly intuitive and the voice feature is a game-changer.",
    author: 'Alex M.',
    role: 'CTO, TechStartup',
    initials: 'AM',
    stars: 5,
  },
  {
    quote: "Outstanding RAG pipeline implementation. Mahera's deep knowledge of LangChain and vector databases resulted in a system that handles complex document queries with remarkable accuracy.",
    author: 'Sarah K.',
    role: 'Product Manager, Enterprise Co.',
    initials: 'SK',
    stars: 5,
  },
  {
    quote: "The multilingual voice assistant exceeded all expectations. Professional, responsive, and delivered exactly what was promised on time. Highly recommended for any AI project.",
    author: 'Raj P.',
    role: 'Founder, AI Solutions',
    initials: 'RP',
    stars: 5,
  },
];

// ─── Blog ─────────────────────────────────────────
export const blogData = [
  {
    category: 'Generative AI',
    title:    'Building Production-Ready RAG Pipelines with LangChain',
    excerpt:  'A deep dive into designing scalable retrieval-augmented generation systems — from document chunking to semantic search and LLM integration.',
    date:     'May 2025',
    readTime: '8 min read',
    url:      '#',
  },
  {
    category: 'Voice AI',
    title:    'Multilingual Voice Assistants: Whisper + gTTS + LangChain',
    excerpt:  'How I built a real-time multilingual voice assistant supporting 10+ languages using open-source STT, TTS, and LLM reasoning.',
    date:     'Apr 2025',
    readTime: '6 min read',
    url:      '#',
  },
  {
    category: 'Career',
    title:    'My Journey from Data Science Trainee to AI/ML Engineer',
    excerpt:  "Lessons learned, certifications earned, and projects shipped — the honest story of building an AI career from scratch in 2024–2025.",
    date:     'Mar 2025',
    readTime: '5 min read',
    url:      '#',
  },
];

// ─── Chatbot responses ────────────────────────────
export const chatbotResponses = {
  skills:      "I specialize in Generative AI, LLMs, RAG pipelines, Voice AI, and Python backend development. My core stack includes LangChain, FastAPI, OpenAI, Whisper, and React. I'm IBM Certified in Generative AI Engineering! 🤖",
  projects:    "I've built 5+ AI projects including: an AI SQL Chatbot with voice input, a Multilingual Voice Assistant supporting 10+ languages, a RAG Knowledge Base for document Q&A, StockVision AI for stock forecasting, and a TravelPackage booking platform. Which one would you like to know more about? 🚀",
  experience:  "I have 1+ years of experience as an AI/ML Engineer. I currently freelance on Freelancer.com, previously worked as Zoho Developer at Cognition Inc, AI/ML Developer at MindSyncX Labs, and Data Science Trainee at ZiAo Development. 💼",
  available:   "Yes! I'm currently open to AI/ML freelance projects and full-time opportunities. I specialize in building production-ready AI systems. You can reach me at voramahera24@gmail.com or connect on LinkedIn! ✅",
  certifications: "I hold 10+ certifications including IBM Generative AI Engineering Professional Certificate, AWS Cloud Foundations, HP Data Science, Machine Learning Specialization (Stanford/DeepLearning.AI), Google Data Analytics, NVIDIA Deep Learning, and Microsoft Azure AI-900! 🏆",
  contact:     "You can reach me at:\n📧 voramahera24@gmail.com\n💼 LinkedIn: maheravhora-043172268\n🐙 GitHub: github.com/maheravhora\n\nI typically respond within 24 hours! 😊",
  default:     "Great question! I'm Mahera's AI assistant. I can tell you about her skills, projects, experience, certifications, or how to get in touch. What would you like to know? 💡",
};
