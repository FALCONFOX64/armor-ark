"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, Users, ArrowRight, Menu, X, ExternalLink, 
  Target, MessageCircle, Database, Wand2, Command, Lock 
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
    description: "The Web Team bridges sophisticated technical requirements with intuitive interfaces that satisfy both engineering stakeholders and everyday users. We collaborate closely with development teams to translate complex system logic into delightful, brand-aligned experiences that maintain technical integrity while feeling simple on the surface.",
    tools: ["Figma Dev Mode", "Next.js / React", "Framer", "UserTesting", "Design Tokens"]
  }
];

const features = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Menu Bar Chat",
    desc: "Streaming conversations with OpenAI and Anthropic directly from the menu bar."
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Knowledge Base (RAG)",
    desc: "Import PDF/TXT/MD/RTF, embed with OpenAI, semantic search at chat time."
  },
  {
    icon: <Wand2 className="w-5 h-5" />,
    title: "ReAct Agents",
    desc: "Autonomous tool-using agent with Calculator, WebSearch, KnowledgeSearch and more."
  },
  {
    icon: <Command className="w-5 h-5" />,
    title: "Quick Command",
    desc: "Global hotkey (⌥Space) to act on selected text from anywhere."
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Secure & Persistent",
    desc: "API keys in Keychain. Conversations and knowledge via SwiftData."
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

    await new Promise(resolve => setTimeout(resolve, 1200));

    toast.success("Thanks! We'll get back to you shortly.", {
      description: "ArmorArk AI team received your message.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[var(--navy)] text-[var(--text-primary)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[var(--navy)]" />
            </div>
            <div>
              <div className="font-semibold tracking-[-0.02em] text-xl">ArmorArk AI</div>
              <div className="text-[10px] text-[var(--text-secondary)] -mt-1">MENU BAR AI ASSISTANT</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <button onClick={() => scrollToSection('about')} className="nav-link text-[var(--text-secondary)] hover:text-white">About</button>
            <button onClick={() => scrollToSection('features')} className="nav-link text-[var(--text-secondary)] hover:text-white">Features</button>
            <button onClick={() => scrollToSection('web-team')} className="nav-link text-[var(--text-secondary)] hover:text-white">Web Team</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-[var(--text-secondary)] hover:text-white">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-5 py-2 text-sm font-medium rounded-full bg-[var(--accent)] text-[var(--navy)] hover:bg-white transition-colors"
            >
              Get Started
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
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--navy)] px-6 py-6 flex flex-col gap-4 text-sm">
            {['about', 'features', 'web-team', 'contact'].map((id) => (
              <button 
                key={id} 
                onClick={() => scrollToSection(id)} 
                className="text-left py-2 text-[var(--text-secondary)] hover:text-white capitalize"
              >
                {id === 'web-team' ? 'The Web Team' : id}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mt-2 w-full py-3 bg-[var(--accent)] text-[var(--navy)] rounded-full font-medium"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 pt-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] text-xs tracking-[2px] mb-6 text-[var(--text-secondary)]">
            macOS 14+ • NATIVE MENU BAR EXPERIENCE
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.2px] leading-none mb-6">
            ArmorArk AI.<br />Right where you work.
          </h1>
          
          <p className="max-w-xl mx-auto text-xl text-[var(--text-secondary)] mb-10">
            A native macOS menu bar AI assistant with streaming chat, Knowledge Base (RAG), and autonomous ReAct agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('features')}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent)] text-[var(--navy)] rounded-2xl font-medium text-base hover:bg-white transition-all active:scale-[0.985]"
            >
              Explore Features 
              <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
            <button 
              onClick={() => scrollToSection('web-team')}
              className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl font-medium text-base transition-all"
            >
              Meet the Web Team
            </button>
          </div>

          <div className="mt-16 text-xs text-[var(--text-secondary)] flex items-center justify-center gap-6 tracking-widest">
            <div>SECURE BY DESIGN</div>
            <div>BUILT FOR POWER USERS</div>
            <div>OPENAI + ANTHROPIC</div>
          </div>
        </div>
      </section>

      {/* About / Branding */}
      <section id="about" className="section max-w-5xl mx-auto px-6 py-20 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8">
          <div className="md:col-span-5">
            <div className="uppercase text-xs tracking-[3px] text-[var(--text-secondary)] mb-3">NATIVE MACOS AI</div>
            <h2 className="text-5xl font-semibold tracking-[-1.5px] leading-none">Your AI, always at hand.</h2>
          </div>
          <div className="md:col-span-7 text-lg text-[var(--text-secondary)] space-y-6 leading-relaxed">
            <p>
              ArmorArk AI is a powerful native macOS menu bar assistant inspired by the best modern productivity tools.
            </p>
            <p>
              Stream conversations, build personal knowledge bases with RAG, and run autonomous agents — all without leaving your workflow.
            </p>
            <div className="pt-2 text-sm text-[var(--text-secondary)]">
              Every interface you see is crafted by the Armor Ark Web Team using high-performance, intuitive, and cross-audience principles.
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section bg-[var(--surface)] py-20 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[var(--text-secondary)] mb-2">CORE CAPABILITIES</div>
              <h3 className="text-4xl font-semibold tracking-tight">Everything you need. Nothing you don't.</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-colors group">
                <div className="text-[var(--accent)] mb-6">{feature.icon}</div>
                <h4 className="font-semibold text-2xl tracking-tight mb-3">{feature.title}</h4>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
            macOS 14.0+ • OpenAI &amp; Anthropic support • SwiftData persistence
          </div>
        </div>
      </section>

      {/* The Web Team - Keep as is but rebranded */}
      <section id="web-team" className="section max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[3px] bg-[var(--surface)] px-4 py-1 rounded-full mb-4">THE TEAM BEHIND THE EXPERIENCE</div>
          <h2 className="text-5xl font-semibold tracking-[-1.8px]">The Armor Ark Web Team</h2>
          <p className="mt-4 max-w-md mx-auto text-[var(--text-secondary)]">
            Senior designers and engineers responsible for every public and internal interface at ArmorArk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glass rounded-3xl p-8 skill-card border border-[var(--border)] hover:border-[var(--accent)] group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--surface-elevated)] flex items-center justify-center mb-8 text-[var(--accent)] group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="font-semibold text-2xl tracking-tight mb-4">{skill.title}</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-8">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-[var(--navy)] border border-[var(--border)] text-[var(--text-secondary)]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            Collaborate with the team <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "macOS 14+", label: "Native Experience", sub: "Menu bar + global hotkeys" },
              { number: "RAG + Agents", label: "Powerful Tools", sub: "Knowledge & autonomous reasoning" },
              { number: "Keychain", label: "Secure by Default", sub: "Your keys stay on your device" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-semibold tracking-[-1px] text-[var(--accent)] tabular-nums">{stat.number}</div>
                <div className="mt-2 font-medium text-lg">{stat.label}</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight mb-3">Ready to armor your workflow?</h2>
          <p className="text-[var(--text-secondary)]">Questions about ArmorArk AI, the Web Team, or collaboration opportunities.</p>
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
              className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] rounded-2xl px-6 py-4 placeholder:text-[var(--text-secondary)] outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Work email"
              required
              className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] rounded-2xl px-6 py-4 placeholder:text-[var(--text-secondary)] outline-none"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project, feedback, or how you'd like to collaborate..."
            required
            rows={6}
            className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] rounded-3xl px-6 py-4 placeholder:text-[var(--text-secondary)] outline-none resize-y min-h-[140px]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-10 py-4 bg-[var(--accent)] disabled:bg-zinc-400 text-[var(--navy)] font-medium rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            {!isSubmitting && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-[var(--text-secondary)]">
          The native app is available for macOS 14+. See the <a href="https://github.com/FALCONFOX64/ArmorArkAI" target="_blank" className="underline hover:text-white">GitHub repo</a> for setup.
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-10 text-xs text-[var(--text-secondary)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
          <div>© {new Date().getFullYear()} ArmorArk. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://github.com/FALCONFOX64/ArmorArkAI" target="_blank" className="hover:text-white flex items-center gap-1">App Repo <ExternalLink size={12} /></a>
            <a href="https://github.com/FALCONFOX64/armor-ark" target="_blank" className="hover:text-white flex items-center gap-1">This Site <ExternalLink size={12} /></a>
            <a href="#web-team" onClick={(e) => { e.preventDefault(); scrollToSection('web-team'); }} className="hover:text-white">Web Team</a>
          </div>
          <div className="text-[10px]">Website by the Armor Ark Web Team • Native app by ArmorArk</div>
        </div>
      </footer>
    </div>
  );
}
