import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { title: 'Prevent Data Loss', link: '/solutions' },
  { title: 'Data Access Governance', link: '/solutions' },
  { title: 'Compliance Readiness', link: '/solutions' },
  { title: 'Insider Risk Protection', link: '/solutions' },
  { title: 'Data Security for AI', link: '/solutions' },
  { title: 'Comprehensive Email Security', link: '/solutions' },
  { title: 'AI Data Classification', link: '/solutions' },
  { title: 'BYOD Security', link: '/solutions' },
  { title: 'Unified Breach and Incident Readiness', link: '/solutions' },
  { title: 'Secure Microsoft 365 and Copilot', link: '/solutions' },
  { title: 'Protect Data in ChatGPT', link: '/solutions' },
  { title: 'Data Risk Mitigation', link: '/solutions' },
  { title: 'Stop Ransomware', link: '/solutions' },
];

const ProtectDataSection = () => {
  const leftColumn = solutions.slice(0, 7);
  const rightColumn = solutions.slice(7);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 rounded-2xl overflow-hidden shadow-xl">
          {/* Left Panel - Dark Gradient */}
          <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 lg:p-16 flex items-center min-h-[500px]">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-cyan-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Protect Your Data.
                <br />
                Protect Your Business.
              </h2>
            </div>
          </div>

          {/* Right Panel - Solutions List */}
          <div className="bg-slate-50 p-8 lg:p-12">
            <p className="text-slate-600 text-lg mb-8">Explore our solutions for:</p>
            
            <div className="grid md:grid-cols-2 gap-x-8">
              {/* Left Column */}
              <div className="space-y-0">
                {leftColumn.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.link}
                    className="group flex items-center justify-between py-4 border-b border-slate-200 hover:border-primary/50 transition-colors"
                  >
                    <span className="text-slate-800 font-medium group-hover:text-primary transition-colors">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-0">
                {rightColumn.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.link}
                    className="group flex items-center justify-between py-4 border-b border-slate-200 hover:border-primary/50 transition-colors"
                  >
                    <span className="text-slate-800 font-medium group-hover:text-primary transition-colors">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectDataSection;
