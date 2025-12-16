import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const solutions = [
  {
    title: "Secure Your Network",
    link: "/solutions/secure-network",
  },
  {
    title: "Prevent Data Loss",
    link: "/solutions/prevent-data-loss",
  },
  {
    title: "Modernize Meeting Spaces",
    link: "/solutions/meeting-spaces",
  },
  {
    title: "Enhance Physical Security",
    link: "/solutions/physical-security",
  },
  {
    title: "Optimize Cloud Operations",
    link: "/solutions/cloud-operations",
  },
  {
    title: "Stop Cyber Threats",
    link: "/solutions/cyber-threats",
  },
  {
    title: "Upgrade Enterprise Hardware",
    link: "/solutions/enterprise-hardware",
  },
  {
    title: "Streamline IT Support",
    link: "/solutions/it-support",
  },
  {
    title: "Strengthen Infrastructure",
    link: "/solutions/infrastructure",
  },
  {
    title: "Manage Microsoft 365",
    link: "/solutions/microsoft-365",
  },
];
const ProtectDataSection = () => {
  const leftColumn = solutions.slice(0, 7);
  const rightColumn = solutions.slice(7);
  return (
    <section className="bg-white py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-border/20">
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
                Secure Your Data, Secure Your Future.
                <br />
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">​</span>
              </h2>
            </div>
          </div>

          {/* Right Panel - Solutions List */}
          <div className="bg-slate-50 p-6 lg:p-10 py-[102px]">
            <p className="text-slate-500 text-base font-medium mb-6 uppercase tracking-wider">
              Explore our solutions to:
            </p>

            <div className="grid md:grid-cols-2 gap-x-6">
              {/* Left Column */}
              <div>
                {leftColumn.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.link}
                    className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200"
                  >
                    <span className="text-slate-700 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>

              {/* Right Column */}
              <div>
                {rightColumn.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.link}
                    className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200"
                  >
                    <span className="text-slate-700 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                      {solution.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
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
