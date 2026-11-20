import { CopyEmailButton } from "@/components/copy-email-button";

const EMAIL = "faizmangal807@gmail.com";
const GITHUB_URL = "https://github.com/Faiz-l";
const LINKEDIN_URL = "https://www.linkedin.com/in/faiz-muhammad-99bb9643a";

type SocialIconName = "github" | "linkedin" | "email";

function SocialIcon({
  name,
  className = "",
}: {
  name: SocialIconName;
  className?: string;
}) {
  const iconClassName = `h-4 w-4 shrink-0 ${className}`;

  if (name === "github") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClassName}
      >
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.23-1.65-1.23-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.61 1.2 3.25.92.1-.72.39-1.2.7-1.48-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.15-3.02-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.09-1.15 3.09-1.15.62 1.55.23 2.7.12 2.98.72.79 1.14 1.79 1.14 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.75 1.03.75 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClassName}
      >
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.02h2.96v9.32ZM6.45 7.75a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm11.89 10.59h-2.95v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.61H9.2V9.02h2.83v1.27h.04c.39-.73 1.36-1.5 2.8-1.5 2.99 0 3.55 1.97 3.55 4.53v5.02Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

const skillGroups = [
  {
    category: "AI & Agentic Systems",
    items: [
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "AI Agents",
      "Google Gemini",
      "Ollama",
      "FAISS",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "SQL",
    ],
  },
  {
    category: "Automation & Interfaces",
    items: ["n8n", "Streamlit", "Webhooks", "Git & GitHub"],
  },
];

const projects = [
  {
    number: "01",
    category: "Agentic Backend",
    title: "AI Food Ordering Assistant",
    description:
      "An AI-powered food ordering backend (OrderOps AI) built with FastAPI, LangGraph, Google Gemini, and SQLAlchemy to process customer requests and support restaurant ordering workflows.",
    highlight:
      "Stateful LangGraph conversation flow backed by SQLAlchemy persistence and typed FastAPI endpoints.",
    technologies: ["Python", "FastAPI", "LangGraph", "Gemini", "SQLAlchemy"],
    githubUrl: "https://github.com/Faiz-l/orderops-ai",
  },
  {
    number: "02",
    category: "Multi-Step Agent",
    title: "Sequential Code Auditor",
    description:
      "A sequential code-review pipeline built with LangGraph and Streamlit that inspects source code across structured stages to produce audit reports, refactored code, and documentation.",
    highlight:
      "A three-stage LangGraph pipeline that moves code through scanning, refactoring, and documentation.",
    technologies: ["Python", "LangGraph", "Gemini", "Streamlit", "Pydantic"],
    githubUrl: "https://github.com/Faiz-l/langgraph_sequential_code_auditor",
  },
  {
    number: "03",
    category: "Retrieval-Augmented Generation",
    title: "RAG Document Assistant",
    description:
      "A document question-answering web app using FastAPI, LangChain, FAISS vector search, and PDF ingestion to retrieve relevant context and ground LLM responses.",
    highlight:
      "End-to-end PDF chunking, vector indexing with FAISS, and FastAPI + Jinja2 query interface.",
    technologies: ["Python", "FastAPI", "LangChain", "FAISS", "Gemini"],
    githubUrl: "https://github.com/Faiz-l/rag-chatbot-mvp",
  },
  {
    number: "04",
    category: "Language Model from Scratch",
    title: "Mini-GPT",
    description:
      "An educational GPT-style language model project with NumPy demonstrations and a trainable PyTorch model. Train on a small sample corpus or provide your own permitted text, then chat with the trained model.",
    highlight:
      "Separate training and chat entry points, a saved tokenizer vocabulary and PyTorch checkpoint, plus automated model tests.",
    technologies: ["Python", "PyTorch", "NumPy", "Tokenization", "Language Models"],
    githubUrl: "https://github.com/Faiz-l/Mini-GPT",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#31443b] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Skip to content
      </a>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f8faf7]/85 border-b border-[#dfe8df]">
        <div className="container-main flex justify-between items-center py-5">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-[#26372f]"
          >
            FAIZ<span className="text-[#526d5c]">.</span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5 sm:gap-7 text-sm text-[#4a5f53]"
          >
            <a href="#about" className="hover:text-[#26372f] transition-colors">
              About
            </a>
            <a
              href="#skills"
              className="hover:text-[#26372f] transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-[#26372f] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#26372f] transition-colors"
            >
              Contact
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 border border-[#cad7cd] text-[#31443b] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#edf3ed] transition-colors"
            >
              <SocialIcon name="github" className="text-[#4e735c]" />
              GitHub ↗︎
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="container-main">
        {/* HERO */}
        <section className="hero-section px-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6e2d7] bg-[#eff5ef] px-4 py-1.5 text-xs font-medium text-[#3b5746] mb-7">
            <span
              className="h-2 w-2 rounded-full bg-[#4e7a5d]"
              aria-hidden="true"
            />
            Aspiring AI Engineer · Forward Deployed Engineer
          </div>

          <p className="font-mono text-xs tracking-[0.22em] text-[#4d6b59] uppercase mb-4">
            AI Engineering · Software Development
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl text-[#26372f]">
            Building useful things with{" "}
            <span className="text-[#4e735c]">AI and code.</span>
          </h1>

          <p className="hero-description text-[#4a5f53] text-base sm:text-lg leading-relaxed mt-7">
            I&apos;m Faiz Muhammad, an aspiring AI Engineer focused on practical
            LLM applications, RAG pipelines, multi-step agents, and backend
            services that solve real problems.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5 mt-9">
            <a
              href="#projects"
              className="bg-[#3d5948] text-white px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-[#2f4739] transition-colors"
            >
              Explore my work →
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#c5d4c8] bg-white text-[#31443b] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#edf3ed] transition-colors"
            >
              <SocialIcon name="github" className="text-[#4e735c]" />
              GitHub ↗︎
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#c5d4c8] bg-white text-[#31443b] px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#edf3ed] transition-colors"
            >
              <SocialIcon name="linkedin" className="text-[#4e735c]" />
              LinkedIn ↗︎
            </a>
          </div>

          <p className="font-mono text-xs text-[#546d5f] mt-14 tracking-widest">
            SCROLL TO EXPLORE ↓
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="section border-t border-[#dfe8df]">
          <p className="font-mono text-xs text-[#4d6b59] uppercase tracking-widest">
            Introduction
          </p>

          <h2 className="section-title mt-3 mb-8">About me</h2>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7 text-[#4a5f53] leading-8 space-y-4">
              <p>
                I build at the intersection of backend software engineering and
                applied artificial intelligence—turning LLMs into reliable
                applications rather than one-off demos.
              </p>

              <p>
                Most of my work centers on designing FastAPI services, stateful
                LangGraph workflows, and retrieval-augmented generation (RAG)
                pipelines backed by structured data.
              </p>

              <p>
                I enjoy shipping end-to-end systems—connecting APIs, databases,
                and automation tools into practical products people can use
                immediately.
              </p>
            </div>

            <div className="md:col-span-5 bg-white border border-[#dfe8df] rounded-2xl p-6 space-y-5">
              <div>
                <p className="font-mono text-xs text-[#526d5c] uppercase">
                  Focus
                </p>
                <p className="font-semibold text-[#26372f] mt-1">
                  Applied AI &amp; Backend Engineering
                </p>
              </div>

              <div className="border-t border-[#eef3ee] pt-4">
                <p className="font-mono text-xs text-[#526d5c] uppercase">
                  Core Stack
                </p>
                <p className="font-semibold text-[#26372f] mt-1">
                  Python · FastAPI · LangGraph · RAG
                </p>
              </div>

              <div className="border-t border-[#eef3ee] pt-4">
                <p className="font-mono text-xs text-[#526d5c] uppercase">
                  Target Roles
                </p>
                <p className="font-semibold text-[#26372f] mt-1">
                  AI Engineer / Forward Deployed Engineer
                </p>
              </div>

              <div className="border-t border-[#eef3ee] pt-4">
                <p className="font-mono text-xs text-[#526d5c] uppercase">
                  Code &amp; Activity
                </p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#3d5948] hover:underline mt-1"
                >
                  <SocialIcon name="github" className="text-[#4e735c]" />
                  github.com/Faiz-l ↗︎
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section border-t border-[#dfe8df]">
          <p className="font-mono text-xs text-[#4d6b59] uppercase tracking-widest">
            My toolkit
          </p>

          <h2 className="section-title mt-3 mb-8">
            Skills &amp; Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-[#dfe8df] rounded-2xl p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#4d6b59] mb-4">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#f4f8f4] border border-[#dfe8df] rounded-lg px-3 py-1.5 text-sm font-medium text-[#26372f] hover:border-[#8eaa95] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section border-t border-[#dfe8df]">
          <p className="font-mono text-xs text-[#4d6b59] uppercase tracking-widest">
            Selected work
          </p>

          <h2 className="section-title mt-3 mb-3">Projects</h2>

          <p className="text-[#4a5f53] mb-9 max-w-2xl">
            Practical systems built around multi-step LLM workflows, vector
            retrieval, and backend APIs.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <article key={project.number} className="project-card">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-xs text-[#4d6b59]">
                      PROJECT {project.number}
                    </p>
                    <span className="font-mono text-[11px] text-[#4d6b59] bg-[#eef4ee] px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#26372f] mt-5 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[#4a5f53] text-sm leading-7">
                    {project.description}
                  </p>

                  <p className="text-xs text-[#51665b] bg-[#f7faf7] border border-[#e7efe7] rounded-lg px-3.5 py-2.5 mt-4 leading-relaxed">
                    {project.highlight}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#eef3ee]">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#edf3ed] text-[#365041] rounded px-2.5 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3d5948] hover:text-[#26372f] hover:underline"
                      >
                        <SocialIcon name="github" className="text-[#4e735c]" />
                        View source on GitHub ↗︎
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-[#587062]">
                        Repository link coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section border-t border-[#dfe8df]">
          <div className="bg-[#e9f0e9] border border-[#d6e3d7] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
            <div>
              <p className="font-mono text-xs text-[#4d6b59] uppercase tracking-widest mb-2">
                Get in touch
              </p>
              <h2 className="text-3xl font-bold text-[#26372f]">
                Let&apos;s build something useful.
              </h2>

              <p className="text-[#4a5f53] mt-3 max-w-xl">
                Looking for an AI Engineer or Forward Deployed Engineer? Reach
                out directly via email or connect on LinkedIn.
              </p>

              <p className="font-mono text-xs text-[#3d5948] mt-3">{EMAIL}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 bg-[#3d5948] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2f4739] transition-colors"
              >
                <SocialIcon name="email" className="text-[#cbdcca]" />
                Email me ↗︎
              </a>

              <CopyEmailButton email={EMAIL} />

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#bdd0c1] bg-white/80 text-[#344e3f] px-5 py-3 rounded-lg text-sm font-medium hover:bg-white transition-colors"
              >
                <SocialIcon name="linkedin" className="text-[#4e735c]" />
                LinkedIn ↗︎
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="container-main border-t border-[#dfe8df] py-8 mt-12 flex flex-col sm:flex-row justify-between gap-4 text-sm text-[#4d6b59]">
        <p>© 2026 Faiz Muhammad.</p>

        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-[#26372f] transition-colors"
          >
            <SocialIcon name="email" className="text-[#4e735c]" />
            Email
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#26372f] transition-colors"
          >
            <SocialIcon name="github" className="text-[#4e735c]" />
            GitHub ↗︎
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#26372f] transition-colors"
          >
            <SocialIcon name="linkedin" className="text-[#4e735c]" />
            LinkedIn ↗︎
          </a>
        </div>
      </footer>
    </div>
  );
}