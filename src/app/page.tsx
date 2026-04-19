import Link from 'next/link';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'; // Added the import

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative transition-colors duration-300"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-top transition-opacity duration-300 group-hover:opacity-80"
          style={{ backgroundImage: "url('/profile.jpeg?v=2')" }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/40 transition-colors" />

        {/* --- ADD THIS NEW FADE EFFECT --- */}
        {/* Fades from transparent to the exact background color of the Projects section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 z-10" />

        {/* Text Content */}
        <div className="max-w-3xl relative z-20">

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-slate-900 dark:text-white transition-colors relative">
            Hi, I'm a <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Full Stack & AI Developer
            </span>
            <span className="absolute -inset-1 blur-sm text-slate-900/10 dark:text-white/10 select-none">Hi, I'm a <span className="text-emerald-500/10 dark:text-emerald-400/10">Full Stack & AI Developer</span></span>
          </h1>

          {/* ... The rest of your paragraphs and buttons ... */}

          {/* Changed: Adjusted text color for potentially better contrast, ensured high visibility */}
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-100 mb-10 leading-relaxed transition-colors drop-shadow-md">
            I am Raj Kumar Gupta, a passionate Computer Science Engineering student specializing in Artificial Intelligence, with a strong interest in Machine Learning and building practical and impactful technology solutions. Currently, I am focused on strengthening my core programming skills, while expanding my knowledge toward advanced concepts such as data structures and algorithms, and backend development. I am actively seeking internship opportunities, where I can apply my skills, learn from industry professionals, and contribute to innovative projects. If you're looking for a dedicated and eager intern to join your team, please don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"> {/* Ensure buttons are also on top */}
            <Link
              href="#projects"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/25 w-full sm:w-auto"
            >
              View My Work
            </Link>

            <Link
              href="#contact"
              className="border border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:border-emerald-400 font-bold px-8 py-3 rounded-lg w-full sm:w-auto bg-white/10 dark:bg-transparent transition-all hover:scale-105"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </main>
      <Projects />
      <Contact />
    </>
  );
}