import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'nikhildangi1205@gmail.com', href: 'mailto:nikhildangi1205@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7724088978', href: 'tel:+917724088978' },
  { icon: MapPin, label: 'Location', value: 'VIT, Bhopal, India', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nikhil1205-ai' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhil-dangi-aa6b64329' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/nikhildangi_official/' },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">Get In Touch</h2>
          <p className="text-body max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-brown-dark mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-soft transition-shadow"
                >
                  <div className="p-3 bg-brown/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-brown" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-brown-dark font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="font-heading text-xl font-semibold text-brown-dark mb-4">
              Connect With Me
            </h3>
            
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-background rounded-xl hover:bg-brown hover:text-cream transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all"
                  placeholder="Nik D"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown-dark mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all"
                  placeholder="nik@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-dark mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-brown focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your reviews...."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
