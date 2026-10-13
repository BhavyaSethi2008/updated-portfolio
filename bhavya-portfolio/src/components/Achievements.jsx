import React from 'react';
import { Award, PlusCircle, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Goals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & <span className="text-emerald-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A growing roadmap of academic achievements, upcoming certifications, and hackathon participations.
          </p>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                item.isPlaceholder
                  ? 'bg-slate-900/30 border-dashed border-slate-800 hover:border-slate-700'
                  : 'bg-slate-900/60 border-slate-800 shadow-md hover:border-emerald-500/40'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className={`p-2.5 rounded-xl ${
                    item.isPlaceholder
                      ? 'bg-slate-800/80 text-slate-400'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {item.isPlaceholder ? (
                      <PlusCircle className="w-5 h-5 text-slate-400" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                    {item.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {item.date}
                </span>

                {item.isPlaceholder ? (
                  <span className="text-[11px] text-cyan-400">Ready to edit</span>
                ) : (
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
