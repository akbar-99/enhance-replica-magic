import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'Data Security Platform', href: '/products/data-security' },
    { label: 'Cloud Security', href: '/products/cloud-security' },
    { label: 'Network Security', href: '/products/network-security' },
    { label: 'Endpoint Security', href: '/products/endpoint-security' },
    { label: 'All Products', href: '/products' },
  ],
  Solutions: [
    { label: 'Enterprise Security', href: '/solutions/enterprise' },
    { label: 'AI & ML Security', href: '/solutions/ai-security' },
    { label: 'Compliance', href: '/solutions/compliance' },
    { label: 'Zero Trust', href: '/solutions/zero-trust' },
    { label: 'All Solutions', href: '/solutions' },
  ],
  Resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Case Studies', href: '/resources/case-studies' },
    { label: 'Whitepapers', href: '/resources/whitepapers' },
    { label: 'Webinars', href: '/resources/webinars' },
    { label: 'Documentation', href: '/resources/docs' },
  ],
  Company: [
    { label: 'About Us', href: '/company/about' },
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact', href: '/company/contact' },
    { label: 'News', href: '/company/news' },
    { label: 'Partners', href: '/partners' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-glow-cyan rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                Enhance<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Protecting enterprise data with AI-native security solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Enhance Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
