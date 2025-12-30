import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import enhanceTechLogo from "@/assets/enhance-logo-new.png";
const footerLinks = {
  Products: [{
    label: "Compute and Storage",
    href: "/products/data-security"
  }, {
    label: "Network Security",
    href: "/products/cloud-security"
  }, {
    label: "Networking & Infrastructure",
    href: "/products/network-security"
  }, {
    label: "Physical Security & Surveillance",
    href: "/products/endpoint-security"
  }, {
    label: "Meeting Room ",
    href: "/products/endpoint-security"
  }, {
    label: "All Products",
    href: "/products"
  }],
  Solutions: [{
    label: "Optimize Cloud Operations",
    href: "/solutions/enterprise"
  }, {
    label: "Stop Cyber Threats",
    href: "/solutions/ai-security"
  }, {
    label: "Prevent Data Loss",
    href: "/solutions/compliance"
  }, {
    label: "Streamline IT Support",
    href: "/solutions/zero-trust"
  }, {
    label: "Microsoft 365 Management",
    href: "/solutions/zero-trust"
  }, {
    label: "All Solutions",
    href: "/solutions"
  }],
  Resources: [{
    label: "Blog",
    href: "/resources/blog"
  }, {
    label: "News",
    href: "/news"
  }],
  Services: [{
    label: "Managed Services",
    href: "/services/managed-it"
  }, {
    label: "Infrastructure Deployment",
    href: "/services/infrastructure-deployment"
  }, {
    label: "Workplace Modernization",
    href: "/services/workplace-modernization"
  }, {
    label: "Software & Web Development",
    href: "/services/software-development"
  }],
  "Quick Link": [{
    label: "Get IT AMC Quote",
    href: "/it-amc-quote"
  }, {
    label: "IT Support in Dubai",
    href: "/services/it-support-dubai"
  }, {
    label: "IT Support in Sharjah",
    href: "/services/it-support-sharjah"
  }, {
    label: "IT Support in DIFC",
    href: "/services/it-support-difc"
  }, {
    label: "IT Support in Qatar",
    href: "/services/it-support-qatar"
  }, {
    label: "IT Consulting in Dubai",
    href: "/services/it-consulting-dubai"
  }]
};

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
    <footer className="bg-[#0B0F1A] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
              <img
                src={enhanceTechLogo}
                alt="Enhance Tech"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_hsl(var(--glow-cyan)/0.6)] z-10 relative"
              />
              <div className="flex overflow-hidden">
                {/* "Enhance" Animation */}
                {"Enhance".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    animate={{ x: [-40, 0, 0, -40], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.5,
                      times: [0, 0.15, 0.85, 1],
                      repeat: Infinity,
                      delay: index * 0.05,
                      ease: "easeInOut"
                    }}
                    className="font-bold text-2xl tracking-tight glow-text transition-colors duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* Space */}
                <span className="w-2"></span>
                {/* "Tech" Animation */}
                {"Tech".split("").map((letter, index) => (
                  <motion.span
                    key={`tech-${index}`}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: [-40, 0, 0, -40], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.5,
                      times: [0, 0.15, 0.85, 1],
                      repeat: Infinity,
                      delay: 0.8 + (index * 0.05),
                      ease: "easeInOut"
                    }}
                    className="font-bold text-2xl tracking-tight glow-text transition-colors duration-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Enhance Tech designs, secures, and manages enterprise-grade IT infrastructure, delivering proactive monitoring, advanced cybersecurity, and strategic IT consulting to help organizations scale securely and efficiently.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.Products.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Quick Link
            </h4>
            <ul className="space-y-4">
              {footerLinks["Quick Link"].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8" />

        {/* Bottom Contact Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-4">
          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-400" />
            </div>
            <a href="tel:+971 4 329 6840" className="text-sm font-medium hover:text-white transition-colors">
              +971 4 329 6840
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <a href="mailto:connect@itenhance.tech" className="text-sm font-medium hover:text-white transition-colors">
              connect@itenhance.tech
            </a>
          </div>

          <a
            href="https://www.google.com/maps/dir//Enhance+Tech+Addiyar+Building+-+Ground+Floor+Sheikh+Zayed+Rd+Al+Wasl+-+Dubai/@25.1876876,55.2553621,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69a49b927fe3:0xa9561028f36e44d8!2m2!1d55.2553621!2d25.1876876?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-slate-300 max-w-sm hover:text-white transition-colors group/address"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover/address:bg-blue-500/20 transition-colors">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-sm font-medium leading-relaxed">
              Addiyar Building - Ground Floor - Sheikh Zayed Rd - Al Wasl - Dubai, UAE
            </span>
          </a>
        </div>

        {/* Copyright & Legal Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Enhance Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-xs transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
