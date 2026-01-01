import { useState, useEffect, useCallback, memo } from "react";
import { ArrowRight, Loader2, Network, Activity, Users, Globe, Headset, Sparkles, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import heroBackground from "@/assets/hero-background.webp";
import enhanceFloatingIcon from "@/assets/enhance-floating-icon.png";

// Lazy load Spline embed
// SplineEmbed removed as per user request to remove the cube

interface HeroTab {
  id: string;
  label: string;
  title: string;
  description: string;
}

const heroTabs: HeroTab[] = [
  {
    id: "ai-security",
    label: "Expert Skills at a Lower Cost",
    title: "Lack of In-House IT Expertise",
    description: "Access a full team of certified specialists for a fraction of the cost of hiring internally.",
  },
  {
    id: "discovery",
    label: "Strategic Project Management",
    title: "Inefficient IT Projects and Rollouts",
    description:
      "Streamline your execution with precision planning that keeps every rollout on track and cost-effective.",
  },
  {
    id: "enhance",
    label: "Ensure Business Continuity",
    title: "Frequent Downtime",
    description:
      "Proactive maintenance and 24 X 7 monitoring to identify and resolve potential issues before they disrupt your operations.",
  },
  {
    id: "Enhance 3",
    label: "Fortify Your Infrastructure",
    title: "Security & Compliance Gaps",
    description:
      "Implement robust defense strategies that safeguard your sensitive data and ensure adherence to industry standards.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

function HeroSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("ai-security");
  const [isPaused, setIsPaused] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const blobTranslateX1 = useTransform(mouseX, [-500, 500], [-30, 30]);
  const blobTranslateY1 = useTransform(mouseY, [-500, 500], [-30, 30]);
  const blobTranslateX2 = useTransform(mouseX, [-500, 500], [30, -30]);
  const blobTranslateY2 = useTransform(mouseY, [-500, 500], [30, -30]);

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

  // Delay Spline loading for faster initial render

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-screen overflow-hidden py-0">
      {/* Preload hero background for LCP */}
      <link rel="preload" as="image" href={heroBackground} />

      {/* Background Image with priority loading */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Animated Background Elements with Mouse Parallax */}
      <motion.div
        style={{
          x: blobTranslateX1,
          y: blobTranslateY1,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{
          x: blobTranslateX2,
          y: blobTranslateY2,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide mb-6 sm:mb-8 group cursor-default">
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300"></span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:[text-shadow:0_0_25px_hsl(var(--accent)/0.9),0_0_50px_hsl(var(--accent)/0.5)]">
            <span className="text-primary hover:text-accent transition-colors duration-300"></span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_hsl(var(--primary)/0.8),0_0_40px_hsl(var(--primary)/0.4)]">
            <span className="text-primary hover:text-primary/80 transition-colors duration-300"></span>
          </span>{" "}
          <span className="inline-block transition-all duration-300 hover:scale-105 hover:rotate-1 animate-glow-pulse">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent"></span>
          </span>
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left - Tabs (hidden on mobile, shown on desktop) */}
          <div
            className="block lg:col-span-3 space-y-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-slate-700 text-sm font-bold  tracking-wider text-foreground mb-4 w-fit ml-4">
              <Settings className="w-4 h-4 text-blue-400" />
              Problems We Solve
            </div>
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
          <div className="order-1 lg:order-none lg:col-span-5 space-y-4 sm:space-y-6 animate-fade-up" key={activeTab}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {currentTab.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg">
              {currentTab.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link to="/demo" className="btn-primary text-sm sm:text-base">
                {t("hero.getStarted")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/learn-more" className="btn-secondary text-sm sm:text-base">
                {t("hero.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side - Interactive Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-none w-full lg:col-span-4 relative flex items-center justify-center lg:-mt-24"
          >
            <div className="relative z-10 w-full bg-background/40 backdrop-blur-3xl p-1 rounded-[40px] border border-white/10 shadow-[0_0_50px_-12px_rgba(var(--primary),0.2)]">
              <div className="bg-slate-950/60 p-6 sm:p-8 rounded-[38px] border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: Activity, label: "Uptime SLA", value: "99.9% Performance", color: "text-blue-400" },
                    { icon: Users, label: "Endpoints", value: "14K+ Managed", color: "text-indigo-400" },
                    { icon: Globe, label: "Countries Protected", value: "150+ Locations", color: "text-cyan-400" },
                    { icon: Headset, label: "Global Support", value: "24/7 Response", color: "text-primary" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 sm:p-6 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group flex flex-col items-center justify-center text-center"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                          {stat.label}
                        </p>
                        <p className="text-white font-bold text-sm sm:text-base xl:text-lg leading-[1.2]">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating brand icon */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 p-2.5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl hidden lg:block z-20"
            >
              <img
                src={enhanceFloatingIcon}
                alt="Brand Logo"
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_hsl(var(--glow-cyan)/0.6)]"
              />
            </motion.div>
          </motion.div>
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

export default memo(HeroSection);
