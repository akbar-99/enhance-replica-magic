import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroTab {
  id: string;
  label: string;
  title: string;
  description: string;
}

const heroTabs: HeroTab[] = [
  {
    id: 'ai-security',
    label: 'AI-Native Data Security',
    title: 'Self-Aware Data Security',
    description: 'Know when data hits AI. Adapt to risk automatically. Protect at scale.',
  },
  {
    id: 'discovery',
    label: 'Discovery and Classification',
    title: 'Find and Tag Any Sensitive Data',
    description: 'Get visibility and control over structured and unstructured data.',
  },
  {
    id: 'prevent-loss',
    label: 'Prevent Data Loss',
    title: 'Prevent Breaches. Everywhere.',
    description: 'Secure sensitive data across AI, cloud, web, email, and endpoints.',
  },
  {
    id: 'compliance',
    label: 'Compliance and Governance',
    title: 'Control Access. Minimize Risk.',
    description: 'Enforce least privilege. Find over-permissioned files. Audit access.',
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('ai-security');
  const [isSplineLoading, setIsSplineLoading] = useState(true);

  const currentTab = heroTabs.find((tab) => tab.id === activeTab) || heroTabs[0];

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="space-y-1 max-w-sm">
              {heroTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`hero-tab w-full ${activeTab === tab.id ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tab.label}
                </button>
              ))}
              <Link
                to="/use-cases"
                className="hero-tab w-full flex items-center gap-2 text-primary hover:text-primary/80"
              >
                View All Use Cases
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Hero Content */}
            <div className="space-y-6 animate-fade-up" key={activeTab}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {currentTab.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {currentTab.description}
              </p>
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
          </div>

          {/* Right Side - Spline 3D */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {isSplineLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            )}
            <iframe
              src="https://my.spline.design/cubeandballs-qGiqKSMcCceFgbEJ6pH3ipwD/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-2xl"
              onLoad={() => setIsSplineLoading(false)}
              style={{ opacity: isSplineLoading ? 0 : 1 }}
            />
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
