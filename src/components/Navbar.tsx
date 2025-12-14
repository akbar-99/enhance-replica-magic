import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Search, Globe, Menu, X, ArrowRight,
  Shield, Cloud, Network, Smartphone, Building2, Brain, 
  ClipboardCheck, Lock, BookOpen, FileText, Video, Users,
  Handshake, MapPin, Cpu, Info, Briefcase, Phone, Newspaper,
  Server, Database, Globe2, Code, Mail, ShieldCheck, MonitorSmartphone,
  Palette, Search as SearchIcon, Share2, Target
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DropdownCategory {
  title: string;
  titleHighlight: string;
  items: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: DropdownCategory[];
}

const navItems: NavItem[] = [
  {
    label: 'Products',
    megaMenu: [
      {
        title: 'Security',
        titleHighlight: 'Products',
        items: [
          { label: 'Data Security Platform', href: '/products/data-security', icon: Shield },
          { label: 'Cloud Security', href: '/products/cloud-security', icon: Cloud },
          { label: 'Network Security', href: '/products/network-security', icon: Network },
          { label: 'Endpoint Security', href: '/products/endpoint-security', icon: Smartphone },
        ]
      },
      {
        title: 'Enterprise',
        titleHighlight: 'Solutions',
        items: [
          { label: 'Email Security', href: '/products/email-security', icon: Mail },
          { label: 'Web Security', href: '/products/web-security', icon: ShieldCheck },
          { label: 'Mobile Security', href: '/products/mobile-security', icon: MonitorSmartphone },
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    megaMenu: [
      {
        title: 'Business',
        titleHighlight: 'Solutions',
        items: [
          { label: 'Enterprise Security', href: '/solutions/enterprise', icon: Building2 },
          { label: 'AI & ML Security', href: '/solutions/ai-security', icon: Brain },
          { label: 'Compliance', href: '/solutions/compliance', icon: ClipboardCheck },
          { label: 'Zero Trust', href: '/solutions/zero-trust', icon: Lock },
        ]
      },
      {
        title: 'Industry',
        titleHighlight: 'Solutions',
        items: [
          { label: 'Financial Services', href: '/solutions/financial', icon: Database },
          { label: 'Healthcare', href: '/solutions/healthcare', icon: Shield },
          { label: 'Government', href: '/solutions/government', icon: Building2 },
        ]
      }
    ]
  },
  {
    label: 'Resources',
    megaMenu: [
      {
        title: 'Learn',
        titleHighlight: 'Resources',
        items: [
          { label: 'Blog', href: '/resources/blog', icon: BookOpen },
          { label: 'Case Studies', href: '/resources/case-studies', icon: FileText },
          { label: 'Whitepapers', href: '/resources/whitepapers', icon: FileText },
          { label: 'Webinars', href: '/resources/webinars', icon: Video },
        ]
      },
      {
        title: 'Support',
        titleHighlight: 'Center',
        items: [
          { label: 'Documentation', href: '/resources/docs', icon: BookOpen },
          { label: 'Knowledge Base', href: '/resources/kb', icon: Database },
          { label: 'Community', href: '/resources/community', icon: Users },
        ]
      }
    ]
  },
  {
    label: 'Partners',
    megaMenu: [
      {
        title: 'Partner',
        titleHighlight: 'Program',
        items: [
          { label: 'Partner Program', href: '/partners/program', icon: Handshake },
          { label: 'Find a Partner', href: '/partners/find', icon: MapPin },
          { label: 'Technology Partners', href: '/partners/technology', icon: Cpu },
        ]
      }
    ]
  },
  {
    label: 'Company',
    megaMenu: [
      {
        title: 'About',
        titleHighlight: 'Us',
        items: [
          { label: 'About Us', href: '/company/about', icon: Info },
          { label: 'Careers', href: '/company/careers', icon: Briefcase },
          { label: 'Contact', href: '/company/contact', icon: Phone },
          { label: 'News', href: '/company/news', icon: Newspaper },
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-glow-cyan rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              Enhance<span className="text-primary">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-8">
            <div className="flex items-center border border-border/40 rounded-full px-2 py-1.5 bg-transparent">
              {navItems.map(item => (
                <div 
                  key={item.label} 
                  className="relative" 
                  onMouseEnter={() => setActiveDropdown(item.label)} 
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className={`flex items-center gap-1 px-4 py-1.5 text-sm transition-colors cursor-pointer ${
                    activeDropdown === item.label ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </span>

                  {/* Mega Menu Dropdown */}
                  {item.megaMenu && (
                    <div 
                      className={`fixed left-0 right-0 top-16 transition-all duration-300 ${
                        activeDropdown === item.label 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      <div className="bg-nav/98 backdrop-blur-xl border-b border-border/50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {item.megaMenu.map((category, idx) => (
                              <div key={idx} className="space-y-4">
                                <h3 className="text-xl font-bold">
                                  <span className="text-primary">{category.title}</span>{' '}
                                  <span className="text-foreground">{category.titleHighlight}</span>
                                </h3>
                                <div className="space-y-1">
                                  {category.items.map((subItem) => {
                                    const IconComponent = subItem.icon;
                                    return (
                                      <Link
                                        key={subItem.label}
                                        to={subItem.href}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/30 transition-colors group"
                                      >
                                        <IconComponent className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                          {subItem.label}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/demo" className="btn-primary text-sm">
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground ml-auto" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nav border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navItems.map(item => (
              <div key={item.label}>
                <button 
                  className="flex items-center justify-between w-full py-2 text-foreground font-medium" 
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                {item.megaMenu && activeDropdown === item.label && (
                  <div className="pl-2 mt-2 space-y-4 animate-fade-in">
                    {item.megaMenu.map((category, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          <span className="text-primary">{category.title}</span>{' '}
                          <span className="text-foreground">{category.titleHighlight}</span>
                        </h4>
                        <div className="space-y-1 pl-2">
                          {category.items.map((subItem) => {
                            const IconComponent = subItem.icon;
                            return (
                              <Link 
                                key={subItem.label} 
                                to={subItem.href} 
                                className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground transition-colors" 
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <IconComponent className="w-4 h-4 text-primary/70" />
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/demo" 
              className="btn-primary w-full justify-center mt-4" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
