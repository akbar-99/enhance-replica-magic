import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";
const footerLinks = {
  Products: [
    {
      label: "Compute and Storage",
      href: "/products/data-security",
    },
    {
      label: "Network Security",
      href: "/products/cloud-security",
    },
    {
      label: "Networking & Infrastructure",
      href: "/products/network-security",
    },
    {
      label: "Physical Security & Surveillance",
      href: "/products/endpoint-security",
    },
    {
      label: "Meeting Room ",
      href: "/products/endpoint-security",
    },
    {
      label: "All Products",
      href: "/products",
    },
  ],
  Solutions: [
    {
      label: "Optimize Cloud Operations",
      href: "/solutions/enterprise",
    },
    {
      label: "Stop Cyber Threats",
      href: "/solutions/ai-security",
    },
    {
      label: "Prevent Data Loss",
      href: "/solutions/compliance",
    },
    {
      label: "Streamline IT Support",
      href: "/solutions/zero-trust",
    },
    {
      label: "Microsoft 365 Management",
      href: "/solutions/zero-trust",
    },

    {
      label: "All Solutions",
      href: "/solutions",
    },
  ],
  Resources: [
    {
      label: "Blog",
      href: "/resources/blog",
    },
    {
      label: "News",
      href: "/news",
    },
  ],
  Company: [
    {
      label: "About Us",
      href: "/company/about",
    },
    {
      label: "Careers",
      href: "/company/careers",
    },
    {
      label: "Contact",
      href: "/company/contact",
    },
  ],
  "Quick Link": [
    {
      label: "Get IT AMC Quote",
      href: "/it-amc-quote",
    },
    {
      label: "IT Support in Dubai",
      href: "/services/it-support-dubai",
    },
    {
      label: "IT Support in Sharjah",
      href: "/services/it-support-sharjah",
    },
    {
      label: "IT Support in DIFC",
      href: "/services/it-support-difc",
    },
    {
      label: "IT Support in Qatar",
      href: "/services/it-support-qatar",
    },
    {
      label: "IT Consulting in Dubai",
      href: "/services/it-consulting-dubai",
    },
  ],
};
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
];
export default function Footer() {
  const location = useLocation();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-start">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 group" onClick={handleLogoClick}>
              <img
                src={enhanceTechLogo}
                alt="Enhance Tech"
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_hsl(var(--glow-cyan)/0.6)]"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Protecting enterprise data with AI-native security solutions.
            </p>
            <div className="space-y-2.5 text-sm text-muted-foreground mb-6">
              <a className="flex items-center gap-2 hover:text-foreground transition-colors" href="tel:+971 4 329 6840">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+971 4 329 6840</span>
              </a>
              <a
                href="mailto:social@itenhance.tech"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>social@itenhance.tech</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Addiyar Building - Ground Floor - Sheikh Zayed Rd - Al Wasl - Dubai, UAE</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col">
              <h4 className="font-semibold mb-4 text-sm text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block"
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
