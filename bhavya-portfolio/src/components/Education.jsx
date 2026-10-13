import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-sky-400">Coursework</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My foundational engineering studies and ongoing coursework at university.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all duration-200"
            >
              {/* Subtle accent border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
                    {edu.status}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-slate-300">
                    {edu.branch}
                  </p>
                  <p className="text-sm font-medium text-slate-400">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-3 text-xs text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Coursework list */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Key Foundational Coursework & Focus Areas</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {edu.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>

                {edu.highlights && (
                  <p className="text-xs sm:text-sm text-slate-400 italic pt-2">
                    Note: {edu.highlights}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
