const featuredData = [
  {
    title: "BullReckon - Virtual Trading & Algorithmic Backtesting Platform",
    tag: "October 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/BullReckon",
    deployUrl: "https://bullreckon.abhi07.xyz",
    description:
      "Centralized microservices platform with containerized services, Nginx reverse proxies, internal API calls, and BullMQ/Redis queues for distributed processing. API gateway powering backtesting, automated trading, and sandboxed multi-language code playground in isolated Docker environments. Scalable infra with TypeScript monorepo, MongoDB persistence, live market data aggregation, and automated risk/strategy alerts.",
  },
  {
    title: "Dream11 Predictor - Inter IIT Tech Meet 13.0 (IIT Bombay)",
    tag: "Nov 2024 - Dec 2024",
    githubUrl: "https://github.com/Abhishek-Punhani/productUI_Dream11",
    deployUrl: "https://product-ui-dream11.vercel.app/",
    description:
      "Predictive model for player performance using Flask, Python, and context-aware features. Integrated explainable AI (SHAP) into Next.js + Tailwind CSS dashboard for lineup guidance. Applied attention-based feature importance for interpretable predictions.",
  },
  {
    title: "MetaBet - Base India Hackathon",
    tag: "March 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/metabet",
    deployUrl: "https://metabet.abhi07.xyz",
    description:
      "On-chain games (Dice, Plinko, Mines) built with Next.js, Tailwind CSS, and Ethers.js. Provable fairness via commit–reveal cryptographic scheme on Base Sepolia. Interactive UIs with real-time ETH payouts and animated game feedback.",
  },
  {
    title: "Shravya - Real-Time Messaging Platform",
    tag: "June 2024",
    githubUrl: "https://github.com/Abhishek-Punhani/shravya_fe",
    deployUrl: "https://shravya.abhi07.xyz",
    description:
      "Scalable real-time messaging with socket clustering and live presence tracking. Event-driven architecture for concurrent user handling. Tech Stack: React, Node.js, Express, MongoDB, Socket.io. Features chat, file/audio sharing, voice/video calls, and presence sync. Socket clustering with Express + WebSockets for high concurrency and fault tolerance.",
  },
  {
    title: "Redis-Go",
    tag: "August 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/redis-go",
    deployUrl: "",
    description:
      "Fully functional Redis clone in Go implementing core commands (PING, ECHO, SET, GET, INCR, MULTI, EXEC) with expiry, transactions, replication, persistence, and pub/sub. Advanced data structures (Lists, Streams) with blocking operations, stream queries, and transactional guarantees.",
  },
  {
    title: "LLM_Response_Eval – EvalDash",
    tag: "September 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/LLM_Response_Eval",
    deployUrl: "",
    description:
      "Full-stack platform for evaluating Large Language Model responses. Modern React (TypeScript) dashboard with Flask (Python) backend. Multi-judge automated evaluation: instruction following, hallucination detection, coherence scoring. Integrates DistilBERT, DeBERTa, Gemini API, and web search for multi-dimensional quality metrics.",
  },
  {
    title: "Raffle - Web3 Lottery App",
    tag: "October 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/Raffle",
    deployUrl: "",
    description:
      "Decentralized lottery on Ethereum with Chainlink VRF for randomness. Smart contracts handle ticket purchases and automated prize distribution. React frontend with Web3.js, IPFS storage. Real-time lottery status, ticket history, secure wallet integration.",
  },
  {
    title: "Lunar Lens",
    tag: "October 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/LunarLens",
    deployUrl: "",
    description:
      "Web app for lunar XRF spectroscopy analysis from Chandrayaan-2 CLASS. Interactive 3D globe, spectral analysis, elemental mapping. Next.js, Three.js, Python FastAPI. Processes FITS files, peak detection, element identification, spatial analysis.",
  },
  {
    title: "Terraform-vpc-demo",
    tag: "November 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/Terraform-vpc-demo",
    deployUrl: "",
    description:
      "IaC demo for AWS VPC with Terraform. Automated VPC, subnets, security groups, NAT gateways, route tables. Multi-AZ deployment, modular architecture. Terraform state management, remote backends, GitHub Actions CI/CD.",
  },
  {
    title: "Sky-Sync",
    tag: "November 2024",
    githubUrl: "https://github.com/Abhishek-Punhani/skysync",
    deployUrl: "",
    description:
      "Laravel cloud storage with AWS. Vue.js frontend, Laravel Sanctum auth. File upload/download, sharing, version control, real-time sync. S3 storage, RDS metadata, Lambda processing. Secure encryption and access control.",
  },
  {
    title: "Novachat",
    tag: "September 2025",
    githubUrl: "https://github.com/Abhishek-Punhani/Novachat",
    deployUrl: "",
    description:
      "Multimodal AI agent for enterprise conversations. Chain-of-Thought query routing, multi-tool selection, context awareness. Speaker activity analysis, sentiment trends, topic categorization. Audio processing, transcription. Streamlit, Google Gemini, ChromaDB, vector retrieval.",
  },
  {
    title: "MoonAnalyzer",
    tag: "October 2024",
    githubUrl: "https://github.com/Abhishek-Punhani/Astro-ML-PS",
    deployUrl: "",
    description:
      "Comprehensive tool for visualizing ML-classified X-ray burst data. Interactive web interface with standalone app for analyzing model predictions. Features secure OTP login, project saving, client-side caching, and Nginx load balancing. Processes FITS/ASCII/XLS files with peak detection and DBSCAN clustering.",
  },
  {
    title: "CTFv",
    tag: "2024",
    githubUrl: "https://github.com/Abhishek-Punhani/ctfv",
    deployUrl: "",
    description:
      "Mono-repo CTF platform with React frontend and Hono.js backend. Features database migrations, user management, challenge creation, and admin panel. Includes automated database population with sample accounts and challenges. Built for secure, scalable CTF competitions.",
  },
  {
    title: "Grievance Portal - IIT BHU",
    tag: "2024",
    githubUrl: "https://github.com/Abhishek-Punhani/Grievance-Portal",
    deployUrl: "",
    description:
      "Institutional grievance management system for IIT BHU. Efficient issue tracking and resolution platform for students and staff. Features complaint submission, status tracking, admin dashboard, and automated notifications. Built for seamless institutional workflow management.",
  },
  {
    title: "Pariavartan",
    tag: "2024",
    githubUrl: "https://github.com/Abhishek-Punhani/Pariavartan",
    deployUrl: "https://pariavartan.vercel.app",
    description:
      "Web3-integrated environmental platform with zero-knowledge proofs for anonymous reporting. Community-driven river pollution monitoring and cleanup organization. Features chatbot support, real-time pollution updates, and decentralized complaint verification. Empowering environmental activism through blockchain.",
  },
  {
    title: "Ross-Mess",
    tag: "2025",
    githubUrl: "https://github.com/Abhishek-Punhani/ross-mess",
    deployUrl: "",
    description:
      "Flutter-based mess management portal for hostel operations. Full-featured app for meal planning, inventory tracking, feedback collection, and resident management. Deployed at CMC LDh hostel with real-time updates and user-friendly interface for streamlined mess administration.",
  },
];

export default featuredData;
