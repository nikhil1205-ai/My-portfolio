import { Code, Brain, Laptop, Trophy } from 'lucide-react';

const highlights = [
  { icon: Brain, label: 'AI/ML Expert' },
  { icon: Code, label: 'Full Stack Dev' },
  { icon: Laptop, label: 'Self-Taught' },
  { icon: Trophy, label: 'Hackathon Winner' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card bg-secondary">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brown/5 to-brown/20">
                <div className="grid grid-cols-2 gap-6 p-8">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="card-portfolio flex flex-col items-center justify-center p-6 text-center"
                    >
                      <item.icon className="w-8 h-8 text-brown mb-3" />
                      <span className="text-sm font-medium text-brown-dark">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative bracket */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-brown/20 rounded-tr-3xl" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="heading-section mb-6">About Me</h2>
            
            <div className="space-y-4 text-body">
              <p>
                My journey into the world of Data Science began during Class 11 when I discovered 
                the fascinating intersection of mathematics, programming, and real-world problem-solving. 
                What started as curiosity through YouTube tutorials quickly evolved into a deep passion 
                for Machine Learning and Artificial Intelligence.
              </p>
              
              <p>
                Currently pursuing my undergraduate studies at <strong className="text-brown-dark">Vellore Institute of Technology</strong>, 
                I've built a strong foundation in Python, exploring everything from traditional 
                ML algorithms to cutting-edge Deep Learning architectures including RNNs, LSTMs, 
                Transformers, and Generative AI.
              </p>
              
              <p>
                Beyond AI, I've expanded my skill set into Full Stack Web Development, mastering 
                technologies like React, Node.js, and modern database systems. I believe in 
                continuous learning and actively participate in hackathons, open-source contributions, 
                and collaborative projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-secondary rounded-full">
                <span className="text-sm font-medium text-brown-dark">📍 VIT Student</span>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <span className="text-sm font-medium text-brown-dark">🎯 Self-Learner</span>
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full">
                <span className="text-sm font-medium text-brown-dark">💡 Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
