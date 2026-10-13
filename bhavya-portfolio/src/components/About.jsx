import React from 'react';
import { User, Compass, Lightbulb, Code2, Cpu, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: "ECE Foundations",
      desc: "Learning fundamental circuits, digital logic gates, and the physical principles driving modern electronics."
    },
    {
      icon: Code2,
      title: "Programming & Web",
      desc: "Writing clean Python scripts, building responsive web interfaces, and learning software architecture."
    },
    {
      icon: Lightbulb,
      title: "AI & Modern Tools",
      desc: "Exploring how generative AI and automation can accelerate developer workflows and solve problems."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase border border-cyan-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curious engineer at the intersection of <span className="text-cyan-400">hardware & software</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A snapshot of my background, academic mindset, and what drives my technical interests as a first-year student.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              My Journey So Far
            </h3>

            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Location: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Institution: {personalInfo.college}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>Status: Fresher (1st Year)</span>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
