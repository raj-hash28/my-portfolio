import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Name */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              MyPortfolio.
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#projects" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}