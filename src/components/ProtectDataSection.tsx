import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const solutions = [{
  title: 'Prevent Data Loss',
  link: '/solutions'
}, {
  title: 'Data Access Governance',
  link: '/solutions'
}, {
  title: 'Compliance Readiness',
  link: '/solutions'
}, {
  title: 'Insider Risk Protection',
  link: '/solutions'
}, {
  title: 'Data Security for AI',
  link: '/solutions'
}, {
  title: 'Comprehensive Email Security',
  link: '/solutions'
}, {
  title: 'AI Data Classification',
  link: '/solutions'
}, {
  title: 'BYOD Security',
  link: '/solutions'
}, {
  title: 'Unified Breach and Incident Readiness',
  link: '/solutions'
}, {
  title: 'Secure Microsoft 365 and Copilot',
  link: '/solutions'
}, {
  title: 'Protect Data in ChatGPT',
  link: '/solutions'
}, {
  title: 'Data Risk Mitigation',
  link: '/solutions'
}, {
  title: 'Stop Ransomware',
  link: '/solutions'
}];
const ProtectDataSection = () => {
  const leftColumn = solutions.slice(0, 7);
  const rightColumn = solutions.slice(7);
  return <section className="py-6 bg-white lg:py-0 px-0 mx-[32px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-border/10">
          {/* Left Panel - Dark Gradient */}
          <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 lg:p-14 flex items-center min-h-[420px] mx-0">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/25 via-pink-500/15 to-cyan-400/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-full blur-2xl" />
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
                Protect Your Data.
                <br />
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                  Protect Your Business.
                </span>
              </h2>
            </div>
          </div>

          {/* Right Panel - Solutions List */}
          <div className="bg-slate-50 p-6 lg:p-10">
            <p className="text-slate-500 text-base font-medium mb-6 uppercase tracking-wider">Explore our solutions for:</p>
            
            <div className="grid md:grid-cols-2 gap-x-6">
              {/* Left Column */}
              <div>
                {leftColumn.map((solution, index) => <Link key={index} to={solution.link} className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200">
                    <span className="text-slate-700 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </Link>)}
              </div>

              {/* Right Column */}
              <div>
                {rightColumn.map((solution, index) => <Link key={index} to={solution.link} className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200">
                    <span className="text-slate-700 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProtectDataSection;