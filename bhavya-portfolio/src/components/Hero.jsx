import React from 'react';
import { ArrowDown, Mail, Sparkles, MapPin, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial gradient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] sm:h-[550px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-sm animate-pulse-slow">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="h-2 w-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="font-medium text-slate-200">1st Year Fresher @ JECRC University</span>
          <span className="text-slate-600">•</span>
          <span className="inline-flex items-center gap-1 text-cyan-400">
            <MapPin className="w-3 h-3" />
            {personalInfo.location}
          </span>
        </div>

        {/* Name and Hero Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold text-slate-200">
            <Cpu className="w-5 h-5 text-cyan-400 sm:w-6 sm:h-6" />
            <h2>{personalInfo.title}</h2>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
            {personalInfo.headline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-200"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Quick highlight cards / stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 max-w-3xl mx-auto">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm text-left hover:border-slate-700 transition-colors"
            >
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-200 mt-0.5 truncate">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="inline-flex flex-col items-center text-xs text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] mb-1">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
