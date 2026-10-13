import React from 'react';
import { Cpu, Code, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-cyan-400">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A breakdown of my foundational programming, hardware, and modern technology toolsets.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all duration-200"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/20">
                    0{catIdx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-850 hover:border-cyan-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
