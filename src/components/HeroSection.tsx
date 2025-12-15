import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-card animate-scale-in">
                <img
                  src={profilePhoto}
                  alt="Nikhil Dangi - Data Scientist & Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brown/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-brown/20 rounded-xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="font-body text-brown-light tracking-widest uppercase text-sm mb-4 opacity-0 animate-fade-up">
              My Portfolio
            </p>
            
            <h1 className="heading-display mb-6 opacity-0 animate-fade-up stagger-1">
              NIKHIL<br />DANGI
            </h1>
            
            <h2 className="font-heading text-xl md:text-2xl text-brown-dark mb-4 opacity-0 animate-fade-up stagger-2">
              Data Scientist | ML & AI Enthusiast
            </h2>
            
            <p className="text-body max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up stagger-3">
              Passionate about transforming data into insights and building intelligent applications. 
              Started my journey in Class 11, now crafting ML solutions and full-stack applications 
              at VIT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-border opacity-0 animate-fade-up stagger-5">
              <p className="text-sm text-muted-foreground">
                @nikhildangi_official
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
