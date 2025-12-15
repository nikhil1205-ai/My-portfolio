import { Layout, BarChart3, Bot, Users } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Web Development',
    description: 'Modern, responsive websites, dashboards, and web applications using React, Node.js, and modern frameworks.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with statistical analysis, visualization, and predictive modeling.',
  },
  {
    icon: Bot,
    title: 'AI/ML Solutions',
    description: 'Custom machine learning models and AI-powered applications for automation and intelligent decision-making.',
  },
  {
    icon: Users,
    title: 'Technical Collaboration',
    description: 'Supporting college clubs and teams with technical development, mentorship, and project guidance.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Services</h2>
          <p className="text-body max-w-2xl mx-auto">
            Offering expertise through college clubs, freelance work, and collaborative projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-portfolio text-center group">
              <div className="inline-flex p-4 bg-brown/10 rounded-2xl mb-6 group-hover:bg-brown group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-brown group-hover:text-cream" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-brown-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
