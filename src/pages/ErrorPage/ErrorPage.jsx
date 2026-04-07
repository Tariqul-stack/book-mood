import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, RefreshCw, Sparkles } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0F172A] via-[#111827] to-[#1E293B] flex items-center justify-center px-6 py-10">
      <div className="relative max-w-3xl w-full">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C084FC]/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F59E0B]/20 blur-3xl rounded-full"></div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"></div>

          <div className="relative p-8 md:p-14 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#F59E0B]/30 to-[#C084FC]/30 flex items-center justify-center border border-white/10 shadow-lg">
                  <BookOpen className="w-11 h-11 text-[#F8FAFC]" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <p className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/10 text-[#E2E8F0] text-sm mb-5">
              Book Mood
            </p>

            <h1 className="text-6xl md:text-8xl font-extrabold bg-linear-to-r from-[#F8FAFC] via-[#E9D5FF] to-[#FDE68A] bg-clip-text text-transparent mb-4">
              404
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              This chapter is missing
            </h2>

            <p className="max-w-xl mx-auto text-[#CBD5E1] text-base md:text-lg leading-relaxed mb-10">
              The page you are looking for might have been removed, renamed, or
              does not exist right now.Let’s take you back to a better part of
              the story.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#C084FC] text-white font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Page
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-[#94A3B8] mb-1">Status</p>
                <h3 className="text-white font-semibold">Page Not Found</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-[#94A3B8] mb-1">Suggestion</p>
                <h3 className="text-white font-semibold">Check the URL</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-[#94A3B8] mb-1">Next Step</p>
                <h3 className="text-white font-semibold">Return to Library</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
