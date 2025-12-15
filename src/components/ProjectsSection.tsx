import { ExternalLink, Github, Globe, Brain, MessageSquare, Activity, User } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'WanderLust',
    description: 'A full-stack web application showcasing modern web development skills with dynamic features and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Brain,
    title: 'TRACE-HUNTER',
    description: 'Machine learning-based malware and network detection system for identifying malicious files, URLs, and images.',
    tags: ['Python', 'ML', 'Security', 'Deep Learning'],
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    icon: Activity,
    title: 'Heart Disease Prediction',
    description: 'ML model classifying ECG signals to detect myocardial infarction, abnormal heartbeat, and cardiac conditions.',
    tags: ['Python', 'TensorFlow', 'ECG Analysis', 'Healthcare AI'],
    color: 'from-rose-500/20 to-red-500/20',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Chat Analyzer',
    description: 'Data analysis tool extracting meaningful insights, patterns, and statistics from WhatsApp conversation data.',
    tags: ['Python', 'Pandas', 'NLP', 'Data Visualization'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: User,
    title: 'Body_Poses_nikhil-ai',
    description: 'AI-driven project exploring human body pose detection and movement analysis using computer vision.',
    tags: ['Python', 'Computer Vision', 'Pose Detection', 'AI'],
    color: 'from-blue-500/20 to-cyan-500/20',
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
                    <button className="p-2 bg-secondary rounded-lg hover:bg-brown hover:text-cream transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-secondary rounded-lg hover:bg-brown hover:text-cream transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
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
