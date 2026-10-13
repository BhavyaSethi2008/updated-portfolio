import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase border border-cyan-500/20">
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Whether you want to discuss electronics, collaborate on a project, or just say hello — my inbox and profiles are always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Email Address</h3>
              <p className="text-xs text-slate-400">
                Direct inquiries and project collaborations.
              </p>
              <div className="text-xs font-mono text-cyan-300 break-all bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                {personalInfo.email}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-2 text-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">LinkedIn</h3>
              <p className="text-xs text-slate-400">
                Professional network, engineering updates, and career connections.
              </p>
              <div className="text-xs font-mono text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-850 truncate">
                bhavya-sethi-967221430
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
              >
                <span>Visit LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white border border-slate-700 flex items-center justify-center">
                <GithubIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">GitHub</h3>
              <p className="text-xs text-slate-400">
                Open source repositories, practice code, and project commits.
              </p>
              <div className="text-xs font-mono text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-850 truncate">
                @BhavyaSethi2008
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Status Footer Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Based in {personalInfo.location}</p>
              <p className="text-xs text-slate-400">{personalInfo.college} • Open to opportunities</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for technical discussions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
