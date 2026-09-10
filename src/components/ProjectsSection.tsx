import { ExternalLink, Github, Globe, Brain, MessageSquare, Activity, User, Calculator, PiggyBank, VideoIcon, Dna, Shield ,Sprout} from 'lucide-react';

const projects = [

  // ---------------------------------Main project--------------------------------------------------
  {
    icon: Dna,
    title: 'ProductDNA',
    description: 'An AI-powered platform that finds and enriches product information from company websites, URLs, and PDF sources. It identifies products and organizes the information into a reliable, structured product record.',
    tags: ['Python', 'FastAPI', 'React', 'LLMs', 'LangChain', 'LangGraph'],
    color: 'from-violet-500/20 to-purple-500/20',
    gitLink: "https://github.com/nikhil1205-ai/ProductDNA",
    deployLink: "https://product-dna-topaz.vercel.app/",
  },

  {
    icon: Shield,
    title: 'DevShield',
    description: 'A developer-first cybersecurity platform that analyzes source code and running applications to detect vulnerabilities, data leaks, and security risks with AI-powered explanations and fix suggestions.',
    tags: ['React', 'FastAPI', 'Python', 'Cybersecurity', 'LLM'],
    color: 'from-blue-500/20 to-indigo-500/20',
    gitLink: "https://github.com/nikhil1205-ai/DevShield",
    deployLink: "https://dev-shield-frontend.vercel.app/",
  },

  {
    icon: Sprout,
    title: 'AgriSangh',
    description: 'A full-stack collaborative farming platform that enables small farmers to form groups, coordinate crop operations, track contributions, create verified production batches, and build trusted agricultural workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    color: 'from-green-500/20 to-emerald-500/20',
    gitLink: "https://github.com/nikhil1205-ai/AgriSangh",
    deployLink: "https://agrisanghfrontend.vercel.app/",
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Chat Analyzer',
    description: 'Data analysis tool extracting meaningful insights, patterns, and statistics from WhatsApp conversation data.',
    tags: ['Python', 'Pandas', 'NLP', 'Data Visualization', 'ML'],
    color: 'from-green-500/20 to-emerald-500/20',
    gitLink: "https://github.com/nikhil1205-ai/Whatsapp_Chat_Analizer",
    deployLink: "https://whatsapp-chat-analizer-nikhil1205-ai.onrender.com",
  },

  {
    icon: VideoIcon,
    title: 'VideoConnect ',
    description: 'VideoConnect is a modern, browser-based video communication platform built to make online meetings effortless, fast, and reliable.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-green-500/20 to-emerald-500/20',
    gitLink: "https://github.com/nikhil1205-ai/VideoConnect",
    deployLink: "https://videoconnect-frontend.onrender.com",

  },
  {
    icon: Brain,
    title: 'TRACE-HUNTER',
    description: 'Machine learning-based malware and network detection system for identifying malicious files, URLs, and images.',
    tags: ['Python', 'ML', 'Security', 'Deep Learning', 'Malware Detection'],
    color: 'from-red-500/20 to-pink-500/20',
    gitLink: "https://github.com/nikhil1205-ai/TRACE-HUNTER",
    deployLink: "/",
  },

  // --------------------------------------Less relavant----------------------------------------------

  {
    icon: Calculator,
    title: 'Modern Calculater',
    description: ' It includes integration methods such as simple integral , double and triple integration. Additionally, the calculator features an interactive graphing tool that visually represents the area under the curve and regions of integration, making complex calculations easier to understand',
    tags: ['Python', 'streamlit', 'scipy', 'numpy', 'sympy'],
    color: 'from-red-500/20 to-pink-500/20',
    gitLink: "https://github.com/nikhil1205-ai/NIk_Calculator-__NIKHIL_DANGI_?tab=readme-ov-file",
    deployLink: "https://nik-calculator-nikhil-dangi.onrender.com/",
  },
  {
    icon: Activity,
    title: 'Heart Disease Prediction',
    description: 'ML model classifying ECG signals to detect myocardial infarction, abnormal heartbeat, and cardiac conditions.',
    tags: ['Python', 'TensorFlow', 'ECG Analysis', 'Healthcare AI'],
    color: 'from-rose-500/20 to-red-500/20',
    gitLink: "https://github.com/nikhil1205-ai/Heart-disease-prediction-using-ECG-AC",
    deployLink: "/",
  },

  {
    icon: Globe,
    title: 'WanderLust',
    description: 'A full-stack web application showcasing modern web development skills with dynamic features and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-amber-500/20 to-orange-500/20',
    gitLink: "https://github.com/nikhil1205-ai/WanderLust",
    deployLink: "https://wanderlust-05t8.onrender.com",

  },
  
  {
    icon: PiggyBank,
    title: 'Zerodha clone',
    description: 'A full-stack web application showcasing modern web development skills with dynamic features and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-blue-500/20 to-cyan-500/20',
    gitLink: "https://github.com/nikhil1205-ai/Zerodha-clone",
    deployLink: "https://zerodha-clone-frontend-r06o.onrender.com",
  },

  {
    icon: User,
    title: 'Body Poses Detection',
    description: 'AI-driven project exploring human body pose detection and movement analysis using computer vision.',
    tags: ['Python', 'Computer Vision', 'Pose Detection', 'AI', 'JavaScript'],
    color: 'from-blue-500/20 to-cyan-500/20',
    gitLink: "https://github.com/nikhil1205-ai/Body_Poses_nikhil-ai",
    deployLink: "https://nikhil1205-ai.github.io/Body_Poses_nikhil-ai/",
  },


];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Featured Projects</h2>
          <p className="text-body max-w-2xl mx-auto">
            A collection of projects showcasing expertise in AI/ML, web development, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-portfolio group overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-brown/10 rounded-xl group-hover:bg-brown/20 transition-colors">
                    <project.icon className="w-6 h-6 text-brown" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a className="p-2 bg-secondary rounded-lg hover:bg-brown hover:text-cream transition-colors" href={`${project.gitLink}`} >
                      <Github className="w-4 h-4" />
                    </a>
                    <a className="p-2 bg-secondary rounded-lg hover:bg-brown hover:text-cream transition-colors" href={`${project.deployLink}`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-brown-dark mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs bg-secondary rounded-full text-brown-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/nikhil1205-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
