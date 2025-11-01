"use client";

import { aiToolsData } from "@/data/ai-tools";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e6e1] overflow-hidden">
      {/* Header */}
      <header className="pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
          <span className="text-[#d97642]">AI</span>{" "}
          <span className="text-[#2c2c2c]">PRODUCTIVITY TOOLS</span>
        </h1>
      </header>

      {/* Main Grid */}
      <div className="px-4 md:px-8 pb-12 md:pb-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {aiToolsData.map((category) => (
            <div key={category.id} className="space-y-3 md:space-y-4">
              {/* Category Title */}
              <h2 className={`text-xs md:text-sm font-bold ${category.color} tracking-wide uppercase`}>
                {category.name}
              </h2>

              {/* Tools List */}
              <div className="space-y-2.5 md:space-y-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex items-center gap-2 md:gap-3 group"
                  >
                    {/* Connector Line */}
                    <div className="flex items-center">
                      <div className="w-4 md:w-6 h-px bg-[#2c2c2c] opacity-30"></div>
                    </div>

                    {/* Logo */}
                    <Link
                      href={`/tool/${tool.id}`}
                      className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden border border-gray-300 hover:border-gray-400 transition-all hover:scale-110"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Tool Name - Click to visit website */}
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2c2c2c] text-xs md:text-sm hover:text-[#d97642] transition-colors font-medium flex items-center gap-1 group"
                    >
                      {tool.name}
                      <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 text-center text-xs md:text-sm text-gray-600">
        <p>AI Productivity Tools © 2025</p>
      </footer>
    </main>
  );
}

