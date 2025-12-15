import {BookOpen, GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Education</h2>
          <p className="text-body max-w-2xl mx-auto">
            Building a strong academic foundation in technology and innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-5">
          <div className="card-portfolio relative">
            {/* Timeline dot */}
            <div className="absolute -left-3 top-8 w-6 h-6 bg-brown rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cream rounded-full" />
            </div>
            
            <div className="ml-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <BookOpen className="w-8 h-8 text-brown" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-brown-dark">
                    Vivekanand Vidya Vihar School Bioara
                  </h3>
                  <p className="text-brown font-medium">
                    Schooling
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Past Student</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Rajgarh, Biaora</span>
                </div>
              </div>

              <p className="text-body">
                I passed 10th class from Madhya Pradesh Board with <strong className="text-brown-dark">91% marks</strong> .
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="skill-tag">91%  Score</span>
                <span className="skill-tag">MP Board</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-5">
          <div className="card-portfolio relative">
            {/* Timeline dot */}
            <div className="absolute -left-3 top-8 w-6 h-6 bg-brown rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cream rounded-full" />
            </div>
            
            <div className="ml-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <BookOpen className="w-8 h-8 text-brown" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-brown-dark">
                    Govt. Higher Secondary School, Bioara
                  </h3>
                  <p className="text-brown font-medium">
                    Schooling
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Past Student</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Rajgarh, Bioara</span>
                </div>
              </div>

              <p className="text-body">
                I passed 12th class from Madhya Pradesh Board with <strong className="text-brown-dark">93% marks</strong>  in Mathematics.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="skill-tag">93%  Score</span>
                <span className="skill-tag">MP Board</span>
                <span className="skill-tag">Mathematics</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-5">
          <div className="card-portfolio relative">
            {/* Timeline dot */}
            <div className="absolute -left-3 top-8 w-6 h-6 bg-brown rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cream rounded-full" />
            </div>
            
            <div className="ml-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <GraduationCap className="w-8 h-8 text-brown" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-brown-dark">
                    Vellore Institute of Technology
                  </h3>
                  <p className="text-brown font-medium">
                    Bachelor of Technology
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Current Student</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Bhopal, India</span>
                </div>
              </div>

              <p className="text-body">
                I am currently pursuing an <strong className="text-brown-dark">Integrated M.Tech in Cyber Security</strong> at Vellore Institute of Technology. 
                Alongside my core academic curriculum in cyber security, 
                I have independently built strong expertise in Data Science, Machine Learning, Deep Learning, 
                and Full Stack Web Development through self-learning, projects, hackathons, and practical implementations
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="skill-tag">Data Science</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Cyber Security</span>
                <span className="skill-tag">Web Development</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
