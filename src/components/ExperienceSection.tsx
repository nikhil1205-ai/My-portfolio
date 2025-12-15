import { Code, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    icon: Code,
    title: 'Open Source Contributor',
    organization: 'ACWOC (Android Club Winter of Code)',
    description: 'Contributed to open-source projects, collaborating with developers worldwide and improving codebases through meaningful contributions.',
    type: 'Open Source',
  },
  {
    icon: Award,
    title: 'Hackathon Participant',
    organization: 'Solvit Hackathon (Offline)',
    description: 'Participated in competitive offline hackathon, developing innovative solutions under time constraints and presenting to industry judges.',
    type: 'Competition',
  },
  {
    icon: Briefcase,
    title: 'Freelance Developer',
    organization: 'Independent',
    description: 'Delivering web development and ML-related solutions for clients, focusing on quality, communication, and problem-solving.',
    type: 'Freelance',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Experience</h2>
          <p className="text-body max-w-2xl mx-auto">
            Building real-world experience through hackathons, open-source, and freelance work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brown rounded-full md:-translate-x-1/2 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="card-portfolio">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-brown/10 rounded-xl shrink-0">
                        <exp.icon className="w-6 h-6 text-brown" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs bg-brown text-cream rounded-full mb-2">
                          {exp.type}
                        </span>
                        <h3 className="font-heading text-xl font-semibold text-brown-dark">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-brown font-medium">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-body text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
