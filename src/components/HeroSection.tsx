import { useState, useEffect, useCallback } from "react";
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
    label: "Lack of In-House IT Expertise",
    title: "Expert Skills at a Lower Cost",
    description: "Access a full team of certified specialists for a fraction of the cost of hiring internally.",
  },
  {
    id: "discovery",
    label: "Inefficient IT Projects and Rollouts",
    title: "Strategic Project Management",
    description:
      "Streamline your execution with precision planning that keeps every rollout on track and cost-effective.",
  },
  {
    id: "enhance",
    label: "Frequent Downtime?",
    title: "Ensure Business Continuity",
    description:
      "Proactive maintenance and 24 X 7 monitoring to identify and resolve potential issues before they disrupt your operations.",
  },
  {
    id: "Enhance 3",
    label: "Security & Compliance Gaps? ",
    title: "Fortify Your Infrastructure",
    description:
      "Implement robust defense strategies that safeguard your sensitive data and ensure adherence to industry standards.",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("ai-security");
  const [isSplineLoading, setIsSplineLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentTab = heroTabs.find((tab) => tab.id === activeTab) || heroTabs[0];

  const goToNextTab = useCallback(() => {
    const currentIndex = heroTabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % heroTabs.length;
    setActiveTab(heroTabs[nextIndex].id);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNextTab, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNextTab, isPaused]);
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 lg:pt-30">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide mb-12 group cursor-default">
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300">We</span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:[text-shadow:0_0_25px_hsl(var(--accent)/0.9),0_0_50px_hsl(var(--accent)/0.5)]">
            <span className="text-primary hover:text-accent transition-colors duration-300">Resolve</span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300">Your</span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:rotate-1 animate-glow-pulse">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              IT Challenges
            </span>
          </span>
        </h2>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Tabs */}
          <div
            className="lg:col-span-3 space-y-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {heroTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`hero-tab w-full text-left transition-all duration-300 ${activeTab === tab.id ? "active" : ""}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-1 h-full min-h-[24px] rounded-full transition-all duration-300 ${activeTab === tab.id ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && !isPaused && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary animate-progress" />
                )}
              </button>
            ))}
            <Link
              to="/use-cases"
              className="hero-tab w-full flex items-center gap-2 text-primary hover:text-primary/80 mt-4 transition-all duration-300 hover:[text-shadow:0_0_15px_hsl(var(--primary)/0.8),0_0_30px_hsl(var(--primary)/0.4)]"
            >
              Explore More Solutions
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
            </Link>
          </div>

          {/* Center - Hero Content */}
          <div className="lg:col-span-5 space-y-6 animate-fade-up flex flex-col justify-center" key={activeTab}>
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
