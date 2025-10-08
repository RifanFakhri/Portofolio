'use client';

import { Send, Mail, Menu, X, Github, Linkedin, Instagram, Phone, MapPin } from 'lucide-react';
import { motion, easeOut, easeInOut } from 'framer-motion';
import { useState } from 'react';

// ============================================================================
// CONFIGURATION & VARIANTS
// ============================================================================

const PROFILE_IMAGE_URL = '/rifan.jpg';

// Reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.3, ease: easeInOut }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: easeInOut }
  },
  tap: { scale: 0.95 }
};

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

// ============================================================================
// ABOUT SECTION
// ============================================================================

const experiences = [
  {
    date: "Jul 2025",
    title: "CodeTag Studio",
    description:
      "Together with my teammate, I built CodeTag, a platform that helps people create websites for various purposes such as business needs, company profiles, and more."
  },
  {
    date: "Jul 2024",
    title: "PT. Telkom Indonesia Tbk - Network Area & IS Operation",
    description:
      "Maintenance of Backbone devices (DWDM) IGG, ZTE, and Huawei\n- Supervision of Fiber Optic (FO) cables\n- Repair of cut FO cables\n- DWDM link testing for operational needs"
  },
  {
    date: "Aug 2023",
    title: "Independent Study - Dicoding",
    description:
      "Studied and practiced Front-End and Back-End web development, focusing on building responsive interfaces and developing robust server-side applications. Gained experience with modern web technologies and frameworks while enhancing problem-solving and coding skills."
  },
  {
    date: "Jul 2023",
    title: "Junior Web Developer - VSGA",
    description:
      "Vocational School Graduate Academy Digital Talent Scholarship Kominfo. During my training as a Junior Web Developer, I mastered the basic principles of web development, implemented creative ideas, and honed my skills using various web technologies."
  }
];

const ExperienceCard = ({ date, title, description }: { date: string; title: string; description: string; }) => (
  <motion.div
    variants={itemVariants}
    className="bg-[#1C1C1C] p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors duration-300"
  >
    <p className="text-gray-400 text-sm mb-3">{date}</p>
    <h3 className="font-bold text-white text-lg mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{description}</p>
  </motion.div>
);

const AboutSection = () => (
  <motion.div
    className="max-w-6xl mx-auto min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <section>
      <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold mb-6">
        About Me
      </motion.h1>
      <motion.p variants={itemVariants} className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-4xl">
        I am a graduate of Telkom University Purwokerto with a degree in Informatics Engineering. 
        I have experience and a strong interest in front-end and back-end web development, with skills in PHP, JavaScript, Laravel, and Next.js. 
        I am also proficient in managing data using SQL and have a deep interest in emerging technologies and solving complex problems. Currently,
        I am seeking an internship opportunity to further develop my skills and build a career in the technology field.
      </motion.p>
    </section>

    <section className="mt-16 sm:mt-20">
      <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold mb-12">
        Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  </motion.div>
);

// ============================================================================
// PORTFOLIO SECTION
// ============================================================================

const portfolioItems = [
  {
    title: "Website: Grand Telar Residence",
    imageUrl: "/grand1.png",
    link: "https://grandtelarresidence.site/"
  },
  {
    title: "Website: CodeTag Studio",
    imageUrl: "/porto2.png",
    link: "https://codetag-ten.vercel.app/"
  },
  {
    title: "Website: Jokiin Rush",
    imageUrl: "/porto3.png",
    link: "https://jokirush-rsom.vercel.app/"
  },
  {
    title: "Website: Pemerintah Desa Sebet",
    imageUrl: "/porto4.png",
    link: "https://pemdes-sebet.site/"
  },
  {
    title: "Website : Cashvent",
    imageUrl: "/porto51.png",
    link: "https://cashvent.site/"
  },
  {
    title: "Website : Telkommerce",
    imageUrl: "/porto6.png",
    link: "https://telkommerce-seven.vercel.app/"
  }
];

const PortfolioCard = ({ title, imageUrl, link }: { title: string; imageUrl: string; link: string; }) => (
  <motion.a 
    href={link} 
    variants={itemVariants} 
    className="block group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-[#1C1C1C] rounded-xl overflow-hidden border border-gray-800/50 group-hover:border-purple-500/50 transition-all duration-300">
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-white text-lg">{title}</h3>
      </div>
    </div>
  </motion.a>
);

const PortfolioSection = () => (
  <motion.div
    className="max-w-6xl mx-auto min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={containerVariants}
  >
    <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold">
      My Portfolio
    </motion.h2>
    <motion.p variants={itemVariants} className="text-gray-300 text-lg lg:text-xl mt-4 max-w-3xl">
      Feel free to check out my design portfolio to see my works. Some of them are live, showcasing my versatility in different design styles.
    </motion.p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={index} {...item} />
      ))}
    </div>
  </motion.div>
);

// ============================================================================
// CONTACT SECTION
// ============================================================================

const ContactSection = () => (
  <motion.section
    id="contact"
    className="py-24 px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <div className="max-w-4xl mx-auto">
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Let's Start The Journey From Concept to Reality
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Ready to create something extraordinary together? Let's discuss how my skills as a Full-Stack Developer can elevate your projects to new heights.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, creative ideas, or potential collaborations. Let's connect and build something amazing!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-3 bg-purple-600/10 rounded-lg">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:rifannurfakhri17@gmail.com" className="hover:text-purple-400 transition-colors">
                  rifannurfakhri17@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-3 bg-purple-600/10 rounded-lg">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+628123456789" className="hover:text-purple-400 transition-colors">
                  +62 812-3456-789
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="p-3 bg-purple-600/10 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Bekasi, West Java, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1C1C1C] rounded-lg hover:bg-purple-600/20 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1C1C1C] rounded-lg hover:bg-purple-600/20 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </motion.a>
            <motion.a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1C1C1C] rounded-lg hover:bg-purple-600/20 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#1C1C1C] rounded-2xl p-8 border border-gray-800/50">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// ============================================================================
// FOOTER SECTION
// ============================================================================

const Footer = () => (
  <motion.footer
    className="bg-[#0A0A0A] border-t border-gray-800/50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 inline-block">
            Rifan Nurfakhri
          </a>
          <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
            Full-Stack Developer passionate about creating digital experiences that combine beautiful design with robust functionality. Let's build the future together.
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1C1C1C] rounded-lg hover:bg-purple-600/20 transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:rifannurfakhri17@gmail.com" className="hover:text-purple-400 transition-colors">
                rifannurfakhri17@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bekasi, Indonesia
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+628123456789" className="hover:text-purple-400 transition-colors">
                +62 812-3456-789
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rifan Nurfakhri. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
        </div>
      </motion.div>
    </div>
  </motion.footer>
);

// ============================================================================
// MAIN PAGE COMPONENT (COMBINED)
// ============================================================================

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Portfolio', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-sans relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.header
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="w-full mx-auto py-5 sticky top-5 z-50"
        >
          <div className="p-[1.5px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <nav className="bg-[#1A1A1A]/90 backdrop-blur-sm rounded-full flex items-center justify-between px-6 py-3">
              <motion.a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                RN
              </motion.a>
              <div className="hidden md:flex items-center gap-8 text-gray-300">
                {navItems.map((item) => (
                  <motion.a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item)} className="hover:text-white transition-colors relative group" whileHover={{ y: -2 }}>
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
              <motion.a href="#contact" className="hidden md:flex p-3 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all" variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Send className="w-5 h-5" />
              </motion.a>
              <button className="md:hidden p-2 rounded-lg bg-[#2A2A2A] hover:bg-[#333] transition" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>
            {isOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden mt-2 bg-[#1A1A1A] rounded-2xl shadow-lg flex flex-col items-center gap-6 py-6">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item)} className="text-gray-300 hover:text-white text-lg">
                    {item}
                  </a>
                ))}
                <a href="#contact" className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  <Send className="w-5 h-5 inline-block mr-2" />
                  Hire Me
                </a>
              </motion.div>
            )}
          </div>
        </motion.header>

        <motion.main id="home" variants={containerVariants} initial="hidden" animate="visible" className="min-h-[calc(100vh-120px)] flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-24 py-12">
          <div className="text-center md:text-left max-w-xl">
            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-2">
              Hello Welcome 👋
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              I'm Rifan Nurfakhri
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-gray-300 mt-1">
              Web Developer
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-gray-400 leading-relaxed text-lg">
              As a passionate Front-End and Back-End Developer, I take pride in helping businesses grow through impactful digital solutions. I specialize in building responsive, user-friendly interfaces while also developing robust and scalable back-end systems — creating products that are both visually engaging and technically strong.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex justify-center md:justify-start">
              <motion.a href="https://drive.google.com/file/d/1sATw0L5-vjoKq2OG0xRWUBTNDErMI6sj/view?usp=sharing" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-purple-600 to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all group" variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} whileHover="hover" className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50 animate-pulse"></div>
              <img src={PROFILE_IMAGE_URL} alt="Rifan Nurfakhri" className="relative rounded-full object-cover border-4 border-gray-800 shadow-2xl w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] z-10" />
            </div>
          </motion.div>
        </motion.main>
      </div>

      <section id="about">
        <AboutSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}