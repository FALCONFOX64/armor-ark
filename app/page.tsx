"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, Users, ArrowRight, Menu, X, ExternalLink, 
  Award, Target, Globe 
} from 'lucide-react';
import { toast } from 'sonner';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
}

const skills: Skill[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High-Performance Visual Systems",
    description: "The Web Team designs and delivers visually striking interfaces that achieve exceptional speed and fluidity across all devices and network conditions. We combine advanced animation, responsive systems, and rigorous performance engineering to create engaging experiences that feel premium while consistently meeting top-tier Core Web Vitals benchmarks.",
    tools: ["Figma", "Tailwind CSS", "GSAP / Framer Motion", "Next.js", "Lighthouse"]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Intuitive Information Architecture",
    description: "The Web Team structures complex content and navigation into clear, accessible flows that minimize friction for every user. Through collaborative research, wireframing, and accessibility-first processes, we build seamless user journeys that scale from marketing sites to sophisticated web applications.",
    tools: ["Figma", "Framer", "axe DevTools", "Storybook", "WCAG 2.2"]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cross-Audience Experience Design",
    description: "The Web Team bridges sophisticated technical requirements with intuitive interfaces that satisfy both engineering stakeholders and everyday users. We collaborate closely with development teams to translate complex system logic into delightful, brand-aligned experiences.",
    tools: ["Figma Dev Mode", "Next.js / React", "Framer", "UserTesting", "Design Tokens"]
  }
];

export default function ArmorArkWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - in production this would be a real endpoint
    await new Promise(resolve => setTimeout(resolve, 1200));

    toast.success("Message received. Our team will respond within 24 hours.", {
      description: "Thank you for reaching out to Armor Ark.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Navigation - Intuitive & High-Performance */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
              <Shield className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <div className="font-semibold tracking-[-0.02em] text-xl">ARMOR ARK</div>
              <div className="text-[10px] text-zinc-500 -mt-1">FORTIFYING INTELLIGENCE</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <button onClick={() => scrollToSection('about')} className="nav-link text-zinc-400 hover:text-white">About</button>
            <button onClick={() => scrollToSection('expertise')} className="nav-link text-zinc-400 hover:text-white">Expertise</button>
            <button onClick={() => scrollToSection('web-team')} className="nav-link text-zinc-400 hover:text-white">Web Team</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-zinc-400 hover:text-white">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-5 py-2 text-sm font-medium rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              Start a Project
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-6 flex flex-col gap-4 text-sm">
            {['about', 'expertise', 'web-team', 'contact'].map((id) => (
              <button 
                key={id} 
                onClick={() => scrollToSection(id)} 
                className="text-left py-2 text-zinc-400 hover:text-white capitalize"
              >
                {id === 'web-team' ? 'The Web Team' : id}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mt-2 w-full py-3 bg-white text-zinc-950 rounded-full font-medium"
            >
              Start a Project
            </button>
          </div>
        )}
      </nav>

      {/* Hero - Visually Engaging & High Performance */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 pt-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 text-xs tracking-[2px] mb-6 text-zinc-400">
            EST. 2024 • NEXT-GENERATION AI INFRASTRUCTURE
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.2px] leading-none mb-6">
            Fortifying the<br />future of intelligence.
          </h1>
          
          <p className="max-w-xl mx-auto text-xl text-zinc-400 mb-10">
            Armor Ark builds secure, high-performance AI systems and intuitive digital experiences that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('web-team')}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-2xl font-medium text-base hover:bg-zinc-100 transition-all active:scale-[0.985]"
            >
              Meet the Web Team 
              <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-2xl font-medium text-base transition-all"
            >
              Talk to our team
            </button>
          </div>

          <div className="mt-16 text-xs text-zinc-500 flex items-center justify-center gap-6 tracking-widest">
            <div>BUILT FOR PERFORMANCE</div>
            <div>DESIGNED FOR HUMANS</div>
            <div>TRUSTED BY BUILDERS</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section max-w-5xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8">
          <div className="md:col-span-5">
            <div className="uppercase text-xs tracking-[3px] text-zinc-500 mb-3">WHO WE ARE</div>
            <h2 className="text-5xl font-semibold tracking-[-1.5px] leading-none">We armor the systems that shape tomorrow.</h2>
          </div>
          <div className="md:col-span-7 text-lg text-zinc-400 space-y-6 leading-relaxed">
            <p>
              Armor Ark develops secure, agentic AI infrastructure and the digital experiences that make advanced technology feel human.
            </p>
            <p>
              Our work spans frontier model deployment, knowledge systems, and interfaces that allow technical teams and everyday users to collaborate with intelligence at scale.
            </p>
            <p className="text-sm text-zinc-500 pt-2">
              Every product and platform we ship is built using the rigorous standards of the Armor Ark Web Team.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise - Leveraging the 3 Core Skills */}
      <section id="expertise" className="section bg-zinc-900 py-20 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-zinc-500 mb-2">OUR APPROACH</div>
              <h3 className="text-4xl font-semibold tracking-tight">Expertise that compounds.</h3>
            </div>
            <div className="hidden md:block text-sm text-zinc-500 max-w-[260px] text-right">
              Every project is executed using the three foundational capabilities of the Armor Ark Web Team.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass rounded-3xl p-8 skill-card border border-zinc-800 hover:border-zinc-700 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 text-accent group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-2xl tracking-tight mb-4">{skill.title}</h4>
                <p className="text-zinc-400 leading-relaxed text-[15px] mb-8">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Web Team - Prominent Feature */}
      <section id="web-team" className="section max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[3px] bg-zinc-900 px-4 py-1 rounded-full mb-4">THE ENGINE BEHIND EVERY EXPERIENCE</div>
          <h2 className="text-5xl font-semibold tracking-[-1.8px]">The Armor Ark Web Team</h2>
          <p className="mt-4 max-w-md mx-auto text-zinc-400">
            A specialized team of senior designers and engineers who treat knowledge architecture, performance, and human experience as first-class engineering disciplines.
          </p>
        </div>

        <div className="prose prose-invert max-w-none mx-auto text-lg text-zinc-300">
          <p>
            The Web Team is responsible for every public and internal interface at Armor Ark. They don’t just design screens — they architect systems that feel alive while remaining ruthlessly performant and accessible.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm">
          {skills.map((skill, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900/50">
              <div className="font-mono text-[10px] text-zinc-500 mb-2">CAPABILITY {i + 1}</div>
              <div className="font-medium text-lg tracking-tight">{skill.title}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-900 transition-colors"
          >
            Work with the Web Team <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Impact / Trust signals */}
      <section className="border-t border-zinc-900 bg-zinc-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "99.8", label: "Average Lighthouse Score", sub: "Across production experiences" },
              { number: "3.2s", label: "Median Time to Interactive", sub: "Even on complex AI interfaces" },
              { number: "42%", label: "Avg. Engagement Lift", sub: "After Web Team-led redesigns" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-6xl font-semibold tracking-[-2px] text-white tabular-nums">{stat.number}</div>
                <div className="mt-1 font-medium">{stat.label}</div>
                <div className="text-xs text-zinc-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-3">Let’s build something enduring.</h2>
          <p className="text-zinc-400">Whether you’re an engineer, founder, or operator, we’d love to explore how Armor Ark can support your mission.</p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              className="bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 placeholder:text-zinc-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Work email"
              required
              className="bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-6 py-4 placeholder:text-zinc-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project or challenge..."
            required
            rows={6}
            className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-3xl px-6 py-4 placeholder:text-zinc-500 outline-none resize-y min-h-[140px]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-10 py-4 bg-white disabled:bg-zinc-400 text-zinc-950 font-medium rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-100 transition disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message to Armor Ark"}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="mt-12 text-center text-xs text-zinc-500">
          We typically respond within one business day. For urgent technical inquiries, reach out via our private channels.
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
          <div>© {new Date().getFullYear()} Armor Ark. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://github.com/FALCONFOX64/armor-ark" target="_blank" className="hover:text-zinc-300 flex items-center gap-1">GitHub <ExternalLink size={12} /></a>
            <a href="#web-team" onClick={(e) => { e.preventDefault(); scrollToSection('web-team'); }} className="hover:text-zinc-300">Web Team Principles</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-zinc-300">Work with us</a>
          </div>
          <div className="text-[10px] text-zinc-600">Crafted with the Armor Ark Web Team methodology</div>
        </div>
      </footer>
    </div>
  );
}
