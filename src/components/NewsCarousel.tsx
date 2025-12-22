import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Link2, Eye, Users, Building2, Circle } from "lucide-react";
import { Link } from "react-router-dom";
type SlideType = "dark" | "light-tablet" | "analytics";
interface BaseSlide {
  id: string;
  type: SlideType;
}
interface DarkSlide extends BaseSlide {
  type: "dark";
  titleHighlight: string;
  titleRest: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
}
interface LightTabletSlide extends BaseSlide {
  type: "light-tablet";
  titleStart: string;
  titleHighlight: string;
  cta: string;
  ctaLink: string;
}
interface AnalyticsSlide extends BaseSlide {
  type: "analytics";
  title: string;
  highlight: string;
  cta: string;
  ctaLink: string;
  percentage: number;
  volumeData: number[];
  stats: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}
type Slide = DarkSlide | LightTabletSlide | AnalyticsSlide;
const slides: Slide[] = [
  {
    id: "1",
    type: "dark",
    titleHighlight: "Enhance Tech Offers 24/7",
    titleRest: "Managed IT and Cyber Security Services with AI-driven threat intelligence for proactive protection.",
    primaryCta: "Get AI-Native DSPM",
    primaryCtaLink: "/products",
    secondaryCta: "Learn More",
    secondaryCtaLink: "/resources",
  },
  {
    id: "2",
    type: "light-tablet",
    titleStart: "Enhance Tech delivers a comprehensive, multi-layered security architecture",
    titleHighlight: "powered by industry leaders including Fortinet, Bitdefender, Acronis, and SonicWall.",
    cta: "Read the Report",
    ctaLink: "/resources",
  },
  {
    id: "3",
    type: "analytics",
    title: "Identify your biggest security risks before hackers do. ",
    highlight: "Schedule your Zero-Cost Threat Review.",
    cta: "Start Your Free Assessment",
    ctaLink: "/demo",
    percentage: 62.5,
    volumeData: [350000, 300000, 250000, 200000, 150000, 100000, 50000],
    stats: [
      {
        label: "EXTERNAL ACCESS",
        value: "17K",
        icon: <Building2 className="w-3 h-3" />,
      },
      {
        label: "PUBLIC LINK SHARING",
        value: "1.1K",
        icon: <Link2 className="w-3 h-3" />,
      },
      {
        label: "ANONYMOUS VIEWS",
        value: "95",
        icon: <Eye className="w-3 h-3" />,
      },
      {
        label: "ORG-WIDE SHARING",
        value: "5K",
        icon: <Building2 className="w-3 h-3" />,
      },
      {
        label: "OTHER ACCESS",
        value: "8.6M",
        icon: <Circle className="w-3 h-3" />,
      },
    ],
  },
];

// Dark Slide Component
function DarkSlideContent({ slide }: { slide: DarkSlide }) {
  return (
    <div className="relative bg-gradient-to-r from-[hsl(215,50%,12%)] via-[hsl(215,45%,15%)] to-[hsl(215,40%,20%)] rounded-xl overflow-hidden min-h-[200px] lg:min-h-[240px]">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(280,60%,25%)] via-[hsl(200,70%,30%)] to-transparent opacity-60" />
      <div className="absolute top-10 right-20 w-32 h-32 bg-[hsl(280,70%,50%)] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-40 w-24 h-24 bg-[hsl(200,80%,50%)] rounded-full blur-2xl opacity-40" />

      {/* 3D geometric shapes */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-64 h-48">
          <div className="absolute w-20 h-20 border-2 border-[hsl(200,80%,60%)]/40 bg-[hsl(200,80%,50%)]/10 transform rotate-12 translate-x-10" />
          <div className="absolute w-24 h-24 border-2 border-[hsl(280,70%,60%)]/40 bg-[hsl(280,70%,50%)]/10 transform -rotate-6 translate-x-20 translate-y-6" />
          <div className="absolute w-16 h-16 border-2 border-[hsl(320,70%,60%)]/40 bg-[hsl(320,70%,50%)]/10 transform rotate-45 translate-x-32 translate-y-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 lg:p-10 lg:pr-80 flex flex-col justify-center h-full min-h-[200px] lg:min-h-[240px]">
        <h3 className="text-xl lg:text-2xl xl:text-[28px] font-bold leading-snug">
          <span className="text-[hsl(45,90%,55%)]">{slide.titleHighlight}</span>{" "}
          <span className="text-white font-normal">{slide.titleRest}</span>
        </h3>
        <div className="mt-5 flex items-center gap-6">
          <Link
            to={slide.primaryCtaLink}
            className="inline-flex items-center gap-2 text-[hsl(45,90%,55%)] hover:text-[hsl(45,90%,65%)] font-bold text-sm transition-colors group"
          >
            {slide.primaryCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          {slide.secondaryCta && (
            <Link
              to={slide.secondaryCtaLink || "#"}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 font-bold text-sm transition-colors group"
            >
              {slide.secondaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Light Tablet Slide Component
function LightTabletSlideContent({ slide }: { slide: LightTabletSlide }) {
  return (
    <div className="relative bg-gradient-to-r from-[hsl(210,30%,96%)] via-[hsl(200,40%,92%)] to-[hsl(185,50%,85%)] rounded-xl overflow-hidden min-h-[200px] lg:min-h-[240px]">
      {/* Content */}
      <div className="relative z-10 p-8 lg:p-10 lg:pr-72 flex flex-col justify-center h-full min-h-[200px] lg:min-h-[240px] py-[37px]">
        <h3 className="text-xl lg:text-2xl xl:text-[26px] font-normal text-[hsl(215,30%,25%)] leading-snug">
          {slide.titleStart} <span className="font-bold text-[hsl(310,70%,40%)]">{slide.titleHighlight}</span>
        </h3>
        <Link
          to={slide.ctaLink}
          className="mt-5 inline-flex items-center gap-2 text-[hsl(215,70%,30%)] hover:text-[hsl(215,70%,20%)] font-bold text-sm transition-colors group"
        >
          {slide.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Tablet mockup */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <div className="w-40 h-52 bg-[hsl(215,20%,20%)] rounded-lg p-1.5 shadow-xl transform rotate-3">
            <div className="w-full h-full bg-white rounded-md p-3 overflow-hidden">
              <div className="w-8 h-1.5 bg-[hsl(215,70%,50%)] rounded mb-2" />
              <div className="text-[6px] font-bold text-[hsl(215,30%,20%)] mb-1">Market Guide for Data Security</div>
              <div className="text-[5px] text-[hsl(215,20%,50%)] mb-2">Posture Management</div>
              <div className="space-y-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-[hsl(215,15%,90%)] rounded"
                    style={{
                      width: `${70 + Math.random() * 30}%`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 p-1.5 bg-[hsl(210,30%,96%)] rounded">
                <div className="text-[5px] font-bold text-[hsl(215,30%,30%)] mb-1">Key Findings</div>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 bg-[hsl(215,20%,85%)] rounded mb-0.5"
                    style={{
                      width: `${60 + Math.random() * 35}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Slide Component
function AnalyticsSlideContent({ slide }: { slide: AnalyticsSlide }) {
  const maxVolume = Math.max(...slide.volumeData);
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[200px] lg:min-h-[240px]">
        {/* Left Content */}
        <div className="flex-1 p-8 lg:p-10 lg:pr-8 flex flex-col justify-center">
          <h3 className="text-xl lg:text-2xl xl:text-[26px] font-light text-[hsl(215,30%,25%)] leading-snug">
            {slide.title} <span className="font-bold italic text-[hsl(215,70%,30%)]">{slide.highlight}</span>
          </h3>
          <Link
            to={slide.ctaLink}
            className="mt-5 inline-flex items-center gap-2 text-[hsl(215,70%,30%)] hover:text-[hsl(215,70%,20%)] font-bold text-sm transition-colors group"
          >
            {slide.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Analytics Panel */}
        <div className="lg:w-[440px] xl:w-[480px] bg-[hsl(220,15%,96%)] p-4 lg:p-5 flex items-center">
          <div className="w-full bg-white rounded-lg shadow-sm border border-[hsl(220,20%,92%)] p-3">
            {/* Dashboard Header */}
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <p className="text-[9px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider">
                  % Sensitive Files
                </p>
                <p className="text-[7px] text-[hsl(215,20%,55%)]">PII, PCI, PHI as % of total scanned</p>
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider">
                  Access Level Breakdown
                </p>
                <p className="text-[7px] text-[hsl(215,20%,55%)]">Exposure types detected</p>
              </div>
              <div className="w-14">
                <p className="text-[9px] font-bold text-[hsl(215,30%,25%)] uppercase tracking-wider text-right">
                  Volume
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              {/* Gauge */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" stroke="hsl(220, 15%, 90%)" strokeWidth="10" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="hsl(168, 76%, 42%)"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${slide.percentage * 2.39} 239`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-[hsl(215,30%,20%)]">{slide.percentage}%</span>
                  </div>
                </div>
              </div>

              {/* Stats List */}
              <div className="flex-1 space-y-1">
                {slide.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between text-[9px]">
                    <span className="font-bold text-[hsl(215,30%,20%)] w-8">{stat.value}</span>
                    <div className="flex items-center gap-1 text-[hsl(215,20%,50%)] flex-1">
                      {stat.icon}
                      <span className="uppercase tracking-wide text-[8px]">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Volume Bar Chart */}
              <div className="w-14 flex flex-col items-end">
                <div className="flex items-end gap-0.5 h-16">
                  {slide.volumeData.map((value, index) => (
                    <div
                      key={index}
                      className="w-1 bg-[hsl(215,70%,30%)] rounded-t-sm transition-all duration-500"
                      style={{
                        height: `${(value / maxVolume) * 100}%`,
                        opacity: 0.3 + index * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);
  const currentSlide = slides[currentIndex];
  const renderSlide = () => {
    switch (currentSlide.type) {
      case "dark":
        return <DarkSlideContent slide={currentSlide} />;
      case "light-tablet":
        return <LightTabletSlideContent slide={currentSlide} />;
      case "analytics":
        return <AnalyticsSlideContent slide={currentSlide} />;
    }
  };
  return (
    <section className="w-full">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center gap-4 lg:gap-6 py-0 [&>div]:shadow-2xl [&>div]:drop-shadow-xl">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(215,70%,30%)] flex items-center justify-center text-[hsl(215,70%,30%)] hover:bg-[hsl(215,70%,30%)] hover:text-white transition-all duration-300 bg-white/50"
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Main Slide */}
          <div className="flex-1" key={currentSlide.id}>
            {renderSlide()}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-[hsl(215,70%,30%)] flex items-center justify-center text-[hsl(215,70%,30%)] hover:bg-[hsl(215,70%,30%)] hover:text-white transition-all duration-300 bg-white/50"
          >
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
