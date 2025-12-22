import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
const solutions = [{
  title: "Secure Your Network",
  link: "/solutions/secure-network"
}, {
  title: "Prevent Data Loss",
  link: "/solutions/prevent-data-loss"
}, {
  title: "Modernize Meeting Spaces",
  link: "/solutions/meeting-spaces"
}, {
  title: "Enhance Physical Security",
  link: "/solutions/physical-security"
}, {
  title: "Optimize Cloud Operations",
  link: "/solutions/cloud-operations"
}, {
  title: "Stop Cyber Threats",
  link: "/solutions/cyber-threats"
}, {
  title: "Upgrade Enterprise Hardware",
  link: "/solutions/enterprise-hardware"
}, {
  title: "Streamline IT Support",
  link: "/solutions/it-support"
}, {
  title: "Strengthen Infrastructure",
  link: "/solutions/infrastructure"
}, {
  title: "Manage Microsoft 365",
  link: "/solutions/microsoft-365"
}];
const ProtectDataSection = () => {
  const leftColumn = solutions.slice(0, 5);
  const rightColumn = solutions.slice(5, 10);
  return <section className="bg-white py-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-border/20">
        {/* Left Panel - Dark Gradient */}
        <div className="relative bg-hero-gradient p-10 lg:p-14 flex items-center min-h-[420px] mx-0">
          {/* Decorative gradient overlay */}


          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-white">Secure Your Data,</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Secure Your Future.</span>
            </h2>
          </div>
        </div>

        {/* Right Panel - Solutions List */}
        <div className="bg-slate-50 p-6 lg:p-10 py-[102px]">
          <p className="font-medium mb-6 foreground tracking-wider text-2xl text-primary-foreground">
            Explore Our Solutions To:
          </p>

          <div className="grid md:grid-cols-2 gap-x-6">
            {/* Left Column */}
            <div>
              {leftColumn.map((solution, index) => <Link key={index} to={solution.link} className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200 font-bold">
                <span className="text-slate-700 group-hover:text-primary transition-colors duration-200 font-bold text-sm">
                  {solution.title}
                </span>
                <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </Link>)}
            </div>

            {/* Right Column */}
            <div>
              {rightColumn.map((solution, index) => <Link key={index} to={solution.link} className="group flex items-center justify-between py-3 border-b border-slate-200/80 hover:border-primary/40 transition-all duration-200">
                <span className="text-slate-700 group-hover:text-primary transition-colors duration-200 font-bold text-sm">
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