"use client";

import { aiToolsData } from "@/data/ai-tools";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e6e1]">
      {/* Container with max width and padding */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <header className="pt-12 md:pt-16 pb-8 md:pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            <span className="text-[#d97642]">AI</span>{" "}
            <span className="text-[#2c2c2c]">PRODUCTIVITY TOOLS</span>
          </h1>
        </header>

        {/* Main Grid */}
        <div className="pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {aiToolsData.map((category) => (
            <div key={category.id} className="space-y-3 md:space-y-4">
              {/* Category Title */}
              <h2 className={`text-[11px] md:text-xs font-bold ${category.color} tracking-wide uppercase leading-tight mb-1`}>
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
                      className="flex-shrink-0 w-[18px] h-[18px] md:w-[20px] md:h-[20px] rounded-full overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all hover:scale-110 flex items-center justify-center"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=128`}
                        alt={tool.name}
                        className="w-full h-full object-contain p-[2px]"
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
        <footer className="py-8 md:py-10 text-center text-xs md:text-sm text-gray-600 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span>Powered by</span>
            <a 
              href="https://promptpack.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[#d97642] hover:text-[#c26635] transition-colors inline-flex items-center gap-1 group"
            >
              PromptPack.net
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p>AI Productivity Tools © 2025</p>
        </footer>
      </div>
    </main>
  );
}

