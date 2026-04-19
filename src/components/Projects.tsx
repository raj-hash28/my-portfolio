export default function Projects() {
  const projects = [
    {
      title: "Classical-ML-on-Structured-Data",
      description: "Predict startup profit in one click from R&D, Admin, and Marketing spend—Flask + scikit‑learn.",
      tech: ["Python", "Flask", "Scikit-Learn", "Machine Learning", "Bootstrap"],
      link: "https://classical-ml-on-structured-data-4216u03vj.vercel.app/"
    },
    {
      title: "Full-Stack Portfolio",
      description: "A modern, high-performance developer portfolio built from the ground up with a custom design system and responsive layout.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "#"
    },
  ];

  return (
    // Changed: bg-slate-50 dark:bg-slate-900
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Changed text colors */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors">
          Featured <span className="text-emerald-500 dark:text-emerald-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Changed card backgrounds and borders
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow-md group hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, i) => (
                  // Changed tag colors
                  <span key={i} className="bg-slate-100 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={project.link} className="text-sm font-medium text-slate-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 inline-flex items-center transition-colors">
                View Project 
                <span className="ml-1 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}