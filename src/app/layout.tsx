import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar"; // <-- Brought this back!

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 dark:bg-[#0f172a] dark:text-[#f8fafc] transition-colors duration-300">
        <ThemeProvider>
          <Navbar /> {/* <-- Brought this back! */}
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}