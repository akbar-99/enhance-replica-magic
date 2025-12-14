import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from 'lucide-react';
interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
  }[];
}
const navItems: NavItem[] = [{
  label: 'Products',
  dropdown: [{
    label: 'Data Security Platform',
    href: '/products/data-security',
    description: 'Comprehensive data protection'
  }, {
    label: 'Cloud Security',
    href: '/products/cloud-security',
    description: 'Secure cloud environments'
  }, {
    label: 'Network Security',
    href: '/products/network-security',
    description: 'Advanced network protection'
  }, {
    label: 'Endpoint Security',
    href: '/products/endpoint-security',
    description: 'Device-level protection'
  }]
}, {
  label: 'Solutions',
  dropdown: [{
    label: 'Enterprise Security',
    href: '/solutions/enterprise',
    description: 'For large organizations'
  }, {
    label: 'AI & ML Security',
    href: '/solutions/ai-security',
    description: 'Protect AI workflows'
  }, {
    label: 'Compliance',
    href: '/solutions/compliance',
    description: 'Meet regulatory requirements'
  }, {
    label: 'Zero Trust',
    href: '/solutions/zero-trust',
    description: 'Modern security framework'
  }]
}, {
  label: 'Resources',
  dropdown: [{
    label: 'Blog',
    href: '/resources/blog',
    description: 'Latest insights'
  }, {
    label: 'Case Studies',
    href: '/resources/case-studies',
    description: 'Success stories'
  }, {
    label: 'Whitepapers',
    href: '/resources/whitepapers',
    description: 'In-depth research'
  }, {
    label: 'Webinars',
    href: '/resources/webinars',
    description: 'Expert sessions'
  }]
}, {
  label: 'Partners',
  dropdown: [{
    label: 'Partner Program',
    href: '/partners/program',
    description: 'Join our ecosystem'
  }, {
    label: 'Find a Partner',
    href: '/partners/find',
    description: 'Local expertise'
  }, {
    label: 'Technology Partners',
    href: '/partners/technology',
    description: 'Integration partners'
  }]
}, {
  label: 'Company',
  dropdown: [{
    label: 'About Us',
    href: '/company/about',
    description: 'Our mission & values'
  }, {
    label: 'Careers',
    href: '/company/careers',
    description: 'Join our team'
  }, {
    label: 'Contact',
    href: '/company/contact',
    description: 'Get in touch'
  }, {
    label: 'News',
    href: '/company/news',
    description: 'Latest announcements'
  }]
}];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden lg:flex items-center">
            <div className="flex items-center border border-border/40 rounded-full px-2 py-1.5 bg-transparent">
              {navItems.map(item => (
                <div 
                  key={item.label} 
                  className="relative group" 
                  onMouseEnter={() => setActiveDropdown(item.label)} 
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item.label}
                  </span>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 min-w-[240px] bg-popover border border-border rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === item.label ? 'opacity-85 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      <div className="p-2">
                        {item.dropdown.map(subItem => (
                          <Link 
                            key={subItem.label} 
                            to={subItem.href} 
                            className="flex flex-col px-4 py-3 rounded-md hover:bg-secondary/50 transition-colors"
                          >
                            <span className="font-medium text-foreground">{subItem.label}</span>
                            {subItem.description && (
                              <span className="text-xs text-muted-foreground mt-0.5">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
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
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="lg:hidden bg-popover border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navItems.map(item => <div key={item.label}>
                <button className="flex items-center justify-between w-full py-2 text-foreground font-medium" onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}>
                  {item.label}
                  {item.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>
                {item.dropdown && activeDropdown === item.label && <div className="pl-4 mt-2 space-y-2 animate-slide-in">
                    {item.dropdown.map(subItem => <Link key={subItem.label} to={subItem.href} className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {subItem.label}
                      </Link>)}
                  </div>}
              </div>)}
            <Link to="/demo" className="btn-primary w-full justify-center mt-4" onClick={() => setMobileMenuOpen(false)}>
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>}
    </nav>;
}