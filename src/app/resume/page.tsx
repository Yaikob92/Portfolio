"use client";

import React from "react";
import {
  PERSONAL,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
} from "@/lib/data";
import { Printer, ArrowLeft } from "lucide-react";
import { MailIcon, GithubIcon, LinkedInIcon, TelegramIcon, MapPinIcon } from "@/components/ui/Icons";
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const formatUrl = (url: string) => {
    return url.replace(/^https?:\/\/(www\.)?/, "");
  };

  const RESUME_BIO = "Software Engineer specializing in building scalable backend systems, secure APIs, and high-performance mobile applications (React Native/Expo). Focused on clean architecture, database optimization, and end-to-end product engineering.";

  const PROJECT_SHORT_DESCS: Record<string, string> = {
    "01": "Co-engineered a B2B campaign platform with OAuth2, real-time WebSockets, automated workflows, and an analytics dashboard.",
    "02": "Real-time aggregator scraping public Telegram channels, processing and curating news content with Node.js.",
    "03": "Secure backend service built in Go (Gin) featuring JWT token rotation, role-based access control (RBAC), and middleware security.",
    "04": "Creative portfolio with a dark aesthetic, custom layout, parallax scrolls, and fluid Framer Motion animations.",
  };

  return (
    <>
      <style jsx global>{`
        /* Print overrides */
        @media print {
          body {
            background: white !important;
            color: #111111 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 15mm !important; /* Re-introduce padding for printed page area */
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
            min-height: 0 !important;
          }
          /* Ensure colors aren't lost in printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            transition: none !important;
          }
          @page {
            size: A4;
            margin: 0; /* Set print page margin to 0 to remove headers (localhost, dates, titles) */
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#f0f4f8] text-neutral-800 flex flex-col font-[family:var(--font-body)] antialiased transition-none pb-12">
        {/* Top Control Bar (Hidden on print) */}
        <header className="no-print w-full max-w-[820px] mx-auto pt-6 px-4 grid grid-cols-3 items-center z-10">
          <div className="justify-self-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Site
            </Link>
          </div>

          <div className="justify-self-center">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-[#963d3d] hover:bg-[#7e3131] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Printer size={14} />
              Save as PDF
            </button>
          </div>

          <div className="justify-self-end" />
        </header>

        {/* Paper Sheet Container */}
        <div className="print-container w-full max-w-[820px] mx-auto my-6 bg-white border border-neutral-200/40 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.06),0_6px_20px_-10px_rgba(0,0,0,0.04)] rounded-[2px] p-6 sm:p-10 md:p-12 flex flex-col gap-4 relative">

          {/* Header Section */}
          <div className="text-center flex flex-col items-center">
            {/* Name */}
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 font-sans uppercase">
              {PERSONAL.name}
            </h1>

            {/* Title */}
            <h2 className="text-[#963d3d] text-[11px] font-bold tracking-[0.25em] uppercase mt-1">
              {PERSONAL.title}
            </h2>

            {/* Contact details line */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2.5 text-[10.5px] text-neutral-500 font-mono tracking-wide">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="hover:text-neutral-800 flex items-center gap-1 transition-colors"
              >
                <span className="text-neutral-400"><MailIcon size={11} /></span>
                {PERSONAL.email}
              </a>
              <span className="text-[#963d3d] opacity-50">•</span>
              <span className="flex items-center gap-1">
                <span className="text-neutral-400"><MapPinIcon size={11} /></span>
                {PERSONAL.location}
              </span>
              <span className="text-[#963d3d] opacity-50">•</span>
              <a
                href="https://github.com/Yaikob92"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-800 flex items-center gap-1 transition-colors"
              >
                <span className="text-neutral-400"><GithubIcon size={11} /></span>
                {formatUrl("https://github.com/Yaikob92")}
              </a>
              <span className="text-[#963d3d] opacity-50">•</span>
              <a
                href="https://www.linkedin.com/in/yaikob/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-800 flex items-center gap-1 transition-colors"
              >
                <span className="text-neutral-400"><LinkedInIcon size={11} /></span>
                {formatUrl("https://linkedin.com/in/yaikob/")}
              </a>
              <span className="text-[#963d3d] opacity-50">•</span>
              <a
                href="https://t.me/An_n_em"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-800 flex items-center gap-1 transition-colors"
              >
                <span className="text-neutral-400"><TelegramIcon size={11} /></span>
                {formatUrl("https://t.me/An_n_em")}
              </a>
            </div>

            {/* Line below contact details - bold red accent */}
            <div className="w-full border-t-2 border-[#963d3d]/70 mt-2.5" />
          </div>

          {/* Education Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#963d3d] uppercase shrink-0">
                Education
              </h3>
              <div className="flex-grow border-t-[1.5px] border-[#963d3d]/25" />
            </div>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-[12.5px] text-neutral-900 font-bold">
                    {edu.role} <span className="text-neutral-400 font-normal">|</span> <span className="text-[#963d3d] font-semibold">{edu.company}</span>
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-mono mt-0.5 sm:mt-0 whitespace-nowrap shrink-0 ml-4">
                    {edu.period}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-600 leading-relaxed text-justify">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#963d3d] uppercase shrink-0">
                Experience
              </h3>
              <div className="flex-grow border-t-[1.5px] border-[#963d3d]/25" />
            </div>

            <div className="flex flex-col gap-3">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 className="text-[12.5px] text-neutral-900 font-bold">
                      {exp.role} <span className="text-neutral-400 font-normal">|</span> <span className="text-[#963d3d] font-semibold">{exp.company}</span>
                    </h4>
                    <span className="text-[10px] text-neutral-400 font-mono mt-0.5 sm:mt-0 whitespace-nowrap shrink-0 ml-4">
                      {exp.period}
                    </span>
                  </div>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="list-disc list-outside ml-4 text-[11px] text-neutral-600 space-y-0.5 pl-1">
                      {exp.role === "Full-Stack Engineer" && (
                        <>
                          <li>Shipped responsive Next.js UIs and engineered secure REST/GraphQL APIs in Go and Node.js.</li>
                          <li>Optimized relational/NoSQL databases (PostgreSQL, MongoDB) and set up Redis caching layers.</li>
                        </>
                      )}
                      {exp.role === "Frontend Web Developer Intern" && (
                        <>
                          <li>Developed responsive and user-friendly web interfaces using React.</li>
                          <li>Built reusable UI components and implemented modern frontend development practices.</li>
                          <li>Collaborated with designers and developers to deliver web application features.</li>
                        </>
                      )}
                      {exp.role === "Mobile Application Developer" && (
                        <>
                          <li>Developed cross-platform mobile apps with React Native, Expo, TypeScript, and React Navigation.</li>
                          <li>Created fluid UI interactions and high-performance layouts using Reanimated and Framer Motion.</li>
                        </>
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#963d3d] uppercase shrink-0">
                Selected Projects
              </h3>
              <div className="flex-grow border-t-[1.5px] border-[#963d3d]/25" />
            </div>

            <div className="flex flex-col gap-3">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-[12.5px] text-neutral-900 font-bold">
                        {project.title}
                      </h4>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#963d3d] text-[10px] font-mono hover:underline"
                        >
                          {formatUrl(project.github)}
                        </a>
                      )}
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {project.tech.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] bg-neutral-100/80 text-neutral-600 border border-neutral-200/50 px-1.5 py-0.2 rounded-[1px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    {PROJECT_SHORT_DESCS[project.id] || project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#963d3d] uppercase shrink-0">
                Skills
              </h3>
              <div className="flex-grow border-t-[1.5px] border-[#963d3d]/25" />
            </div>

            <div className="flex flex-col gap-1">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-y-0.5 gap-x-2 text-[11px] leading-snug">
                  <span className="col-span-12 sm:col-span-3 font-bold text-[#963d3d] uppercase text-[10px] tracking-wider leading-none">
                    {skillGroup.category}
                  </span>
                  <span className="col-span-12 sm:col-span-9 text-neutral-600 font-mono">
                    {skillGroup.items.join("  •  ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#963d3d] uppercase shrink-0">
                Summary
              </h3>
              <div className="flex-grow border-t-[1.5px] border-[#963d3d]/25" />
            </div>

            <p className="text-[11.5px] text-neutral-600 leading-relaxed text-justify">
              {RESUME_BIO}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
