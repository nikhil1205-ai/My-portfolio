import { Code2, Database, Globe, Shield } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'C', 'DSA in Java'],
  },
  {
    icon: Database,
    title: 'Data Science & AI',
    skills: [
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
      'Machine Learning', 'Deep Learning', 'NLP',
      'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn',
      'RNN', 'LSTM', 'Transformers', 'Generative AI',
      'Statistics for ML', 'MySQL', 'MongoDB'
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: [
      'HTML', 'CSS', 'JavaScript',
      'React', 'Redux', 'Node.js', 'Express',
      'REST APIs', 'SQL', 'MongoDB',
      'Bootstrap', 'Tailwind CSS', 'Git & GitHub'
    ],
  },
  {
    icon: Shield,
    title: 'Systems & Security',
    skills: ['Linux', 'Computer Networking', 'Cyber Security Basics'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Skills & Expertise</h2>
          <p className="text-body max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, AI, and modern web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-portfolio">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brown/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-brown" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brown-dark">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
