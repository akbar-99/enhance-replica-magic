import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
interface HeroTab {
  id: string;
  label: string;
  title: string;
  description: string;
}
const heroTabs: HeroTab[] = [
  {
    id: "ai-security",
    label: "Unplanned Downtime & Revenue Impact ",
    title: "Protecting Business Continuity and Brand Trust",
    description:
      "We architect resilient IT environments with proactive monitoring and redundancy to ensure uninterrupted business operations.",
  },
  {
    id: "discovery",
    label: "Cyber Risk & Regulatory Exposure",
    title: "Reducing Enterprise-Level Risk",
    description:
      "We implement enterprise security frameworks that protect critical assets, reduce exposure to cyber threats.",
  },
  {
    id: "enhance",
    label: "IT Skill Gaps & Leadership Bandwidth Constraints",
    title: "Extending Your IT Leadership Capability",
    description:
      "Executive teams should focus on strategy—not day-to-day IT firefighting. We augment your organization with senior-level technical expertise and advisory support, reducing internal strain and improving execution.",
  },
  {
    id: "Enhance 3",
    label: "Operational Inconsistency Across Locations",
    title: "Standardized Control Across the Enterprise",
    description:
      "Fragmented IT environments increase cost and risk. We unify systems, policies, and service delivery to ensure consistent performance, security, and governance across all business units and locations.",
  },
  {
    id: "Enhance 4",
    label: "Scalability Constraints Limiting Growth",
    title: "IT That Evolves with the Business",
    description:
      "Legacy systems inhibit expansion and agility. We design scalable, cloud-ready infrastructures that support mergers, expansion, and future growth without operational friction.red data.",
  },
];
export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("ai-security");
  const [isSplineLoading, setIsSplineLoading] = useState(true);
  const currentTab = heroTabs.find((tab) => tab.id === activeTab) || heroTabs[0];
  return (
    <section className="relative min-h-screen overflow-hidden py-0">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-primary/25 rounded-full animate-[float_9s_ease-in-out_infinite_1.5s]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite_2s]" />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide mb-8 group cursor-default">
          <span className="inline-block animate-[slide-up_0.6s_ease-out_forwards] opacity-0 [animation-delay:0.1s] transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300">We</span>
          </span>{" "}
          <span className="inline-block animate-[slide-up_0.6s_ease-out_forwards] opacity-0 [animation-delay:0.2s] transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:[text-shadow:0_0_25px_hsl(var(--accent)/0.9),0_0_50px_hsl(var(--accent)/0.5)]">
            <span className="text-primary hover:text-accent transition-colors duration-300">Resolve</span>
          </span>{" "}
          <span className="inline-block animate-[slide-up_0.6s_ease-out_forwards] opacity-0 [animation-delay:0.3s] transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300">Your</span>
          </span>{" "}
          <span className="inline-block animate-[slide-up_0.6s_ease-out_forwards] opacity-0 [animation-delay:0.4s] transition-all duration-300 hover:scale-105 hover:rotate-1 hover:[text-shadow:0_0_30px_hsl(var(--primary)/0.9),0_0_60px_hsl(var(--accent)/0.6),0_0_90px_hsl(var(--primary)/0.3)]">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:animate-[shimmer_2s_linear_infinite] bg-clip-text text-transparent transition-all duration-500">
              IT Challenges
            </span>
          </span>
        </h2>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left - Tabs */}
          <div className="lg:col-span-3 space-y-2">
            {heroTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`hero-tab w-full text-left animate-[slide-in-left_0.5s_ease-out_forwards] opacity-0 ${activeTab === tab.id ? "active" : ""}`}
                style={{
                  animationDelay: `${index * 100 + 500}ms`,
                }}
              >
                {tab.label}
              </button>
            ))}
            <Link
              to="/use-cases"
              className="hero-tab w-full flex items-center gap-2 text-primary hover:text-primary/80 mt-4 animate-[slide-in-left_0.5s_ease-out_forwards] opacity-0"
              style={{ animationDelay: '1000ms' }}
            >
              View All Use Cases
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Center - Hero Content */}
          <div className="lg:col-span-5 space-y-6" key={activeTab}>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight animate-[fade-in-up_0.5s_ease-out_forwards]">
              {currentTab.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-[fade-in-up_0.5s_ease-out_forwards_0.1s] opacity-0">{currentTab.description}</p>
            <div className="flex flex-wrap gap-4 pt-4 animate-[fade-in-up_0.5s_ease-out_forwards_0.2s] opacity-0">
              <Link to="/demo" className="btn-primary group">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/learn-more" className="btn-secondary group">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Side - Spline 3D */}
          <div className="lg:col-span-4 relative h-[500px] lg:h-[600px] flex items-center justify-center -mt-24 overflow-hidden animate-[scale-in_0.8s_ease-out_forwards_0.3s] opacity-0">
            {isSplineLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            )}
            <iframe
              src="https://my.spline.design/cubeandballs-8E1GulS3ZESsoKit9aF93qKF/"
              frameBorder="0"
              width="150%"
              height="150%"
              className="rounded-2xl"
              onLoad={() => setIsSplineLoading(false)}
              style={{
                opacity: isSplineLoading ? 0 : 1,
              }}
            />
            {/* Overlay to hide Spline watermark */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-[scroll-dot_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
