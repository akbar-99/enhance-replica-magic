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
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary foreground tracking-wide mb-8">
          We Resolve Your IT Challenges
        </h2>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left - Tabs */}
          <div className="lg:col-span-3 space-y-2">
            {heroTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`hero-tab w-full text-left ${activeTab === tab.id ? "active" : ""}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {tab.label}
              </button>
            ))}
            <Link
              to="/use-cases"
              className="hero-tab w-full flex items-center gap-2 text-primary hover:text-primary/80 mt-4"
            >
              View All Use Cases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Center - Hero Content */}
          <div className="lg:col-span-5 space-y-6 animate-fade-up" key={activeTab}>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight">
              {currentTab.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">{currentTab.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/demo" className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/learn-more" className="btn-secondary">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side - Spline 3D */}
          <div className="lg:col-span-4 relative h-[500px] lg:h-[600px] flex items-center justify-center -mt-24 overflow-hidden">
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
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
