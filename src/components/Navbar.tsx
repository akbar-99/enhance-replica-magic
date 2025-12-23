import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import enhanceTechLogo from "@/assets/enhance-tech-logo.png";
// Flatten all nav items for search
const getAllSearchItems = () => {
  const items: {
    label: string;
    href: string;
    description?: string;
    category: string;
  }[] = [];
  navItems.forEach((nav) => {
    if (nav.dropdown) {
      nav.dropdown.forEach((item) => {
        items.push({
          label: item.label,
          href: item.href,
          description: item.description,
          category: nav.label,
        });
      });
    }
  });
  return items;
};
interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
  }[];
}
const languages = [
  {
    code: "EN",
    i18nCode: "en",
    label: "English",
  },
  {
    code: "ES",
    i18nCode: "es",
    label: "Español",
  },
  {
    code: "FR",
    i18nCode: "fr",
    label: "Français",
  },
  {
    code: "DE",
    i18nCode: "de",
    label: "Deutsch",
  },
  {
    code: "IT",
    i18nCode: "it",
    label: "Italiano",
  },
  {
    code: "AR",
    i18nCode: "ar",
    label: "العربية",
  },
];
const navItems: NavItem[] = [
  {
    label: "Products",
    dropdown: [
      {
        label: "Compute and Storage",
        href: "/solutions/enterprise-hardware",
        description: " Enterprise Servers and Storage",
      },
      {
        label: "Network Security",
        href: "/solutions/secure-network",
        description: "Next-Gen Firewalls and Defense",
      },
      {
        label: "Networking & Infrastructure",
        href: "/solutions/infrastructure",
        description: "Core Switching and Cabling",
      },
      {
        label: "Physical Security & Surveillance",
        href: "/solutions/physical-security",
        description: "CCTV and Access Control",
      },
      {
        label: "Meeting Room ",
        href: "/solutions/meeting-spaces",
        description: "Audio-Visual Conferencing Systems	",
      },
    ],
  },
  {
    label: "Services",
    dropdown: [
      {
        label: "Managed Services",
        href: "/services/managed-it",
        description: "Proactive IT management & Support",
      },
      {
        label: "Infrastructure Deployment",
        href: "/services/infrastructure-deployment",
        description: "Network & System Implementation",
      },
      {
        label: "Workplace Modernization",
        href: "/services/workplace-modernization",
        description: "Modern Digital Workplace Solutions",
      },
      {
        label: "Software & Web Development",
        href: "/services/software-development",
        description: "Custom Software & Web Applications",
      },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      {
        label: "Optimize Cloud Operations",
        href: "/solutions/optimize-cloud-operations",
        description: "Cloud Cost and Performance Management",
      },
      {
        label: "Stop Cyber Threats",
        href: "/solutions/stop-cyber-threats",
        description: "Endpoint Detection and Response",
      },
      {
        label: "Prevent Data Loss",
        href: "/solutions/prevent-data-loss",
        description: "Backup and Disaster Recovery",
      },
      {
        label: "Streamline IT Support",
        href: "/solutions/streamline-it-operations",
        description: "24/7 Helpdesk & SOC",
      },
      {
        label: "Manage Microsoft 365",
        href: "/solutions/microsoft-365",
        description: "Tenant Administration and Governance",
      },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Blogs",
        href: "/resources/blog",
        description: "Latest Insights",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
        description: "Success Stories",
      },
      {
        label: "News",
        href: "/news",
        description: "Latest Tech News",
      },
    ],
  },

  {
    label: "Company",
    dropdown: [
      {
        label: "About Us",
        href: "/company/about",
        description: "Our Mission & Values",
      },
      {
        label: "Our Goals",
        href: "/resources/webinars",
        description: "",
      },
      {
        label: "Careers",
        href: "/company/careers",
        description: "Join Our Team",
      },
      {
        label: " Internship",
        href: "/company/careers",
        description: "Join Our Team",
      },
      {
        label: "Contact",
        href: "/company/contact",
        description: "Get in Touch",
      },
    ],
  },
];
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const currentLang = languages.find((l) => l.i18nCode === i18n.language);
    return currentLang?.code || "EN";
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const searchItems = getAllSearchItems();
  const filteredResults = searchQuery.trim()
    ? searchItems.filter(
      (item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    : [];
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);
  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setSelectedLanguage(lang.code);
    i18n.changeLanguage(lang.i18nCode);
    // Set document direction for RTL languages
    document.documentElement.dir = lang.i18nCode === "ar" ? "rtl" : "ltr";
  };
  const handleSearchItemClick = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    window.location.href = href;
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={enhanceTechLogo} 
              alt="Enhance Tech" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_hsl(var(--glow-cyan)/0.6)]"
              style={{
                filter: "brightness(0) saturate(100%) invert(68%) sepia(52%) saturate(456%) hue-rotate(152deg) brightness(96%) contrast(91%)",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-8">
            <div className="flex items-center border border-border/40 rounded-full px-2 py-1.5 bg-transparent">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center px-4 py-1.5 text-sm hover:bg-secondary/40 rounded-full transition-all duration-200 cursor-pointer text-white">
                    {item.label}
                  </span>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full ${item.label === "Products"
                        ? "left-1/2 -translate-x-1/2 w-[700px]"
                        : item.label === "Solutions" || item.label === "Services"
                          ? "left-1/2 -translate-x-1/2 w-[800px]"
                          : "left-0 min-w-[240px]"
                        } mt-2 bg-popover border border-border rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                    >
                      {item.label === "Solutions" || item.label === "Services" ? (
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="flex flex-col px-4 py-3 rounded-md hover:bg-secondary/50 transition-colors group"
                              >
                                <span className="font-medium text-primary group-hover:text-glow-cyan group-hover:drop-shadow-[0_0_8px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300 text-base">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="text-xs text-muted-foreground mt-1">{subItem.description}</span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className={`p-4 ${item.label === "Products" ? "grid grid-cols-2 gap-2" : ""}`}>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="flex flex-col px-4 py-3 rounded-md hover:bg-secondary/50 transition-colors group"
                            >
                              <span className="font-medium text-foreground group-hover:text-glow-cyan group-hover:drop-shadow-[0_0_8px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300">
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-muted-foreground mt-0.5">{subItem.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            {/* Language Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none">
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover border border-border min-w-[140px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`cursor-pointer ${selectedLanguage === lang.code ? "bg-secondary/50" : ""}`}
                  >
                    <span className="font-medium">{lang.code}</span>
                    <span className="ml-2 text-muted-foreground">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Dialog */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                  <DialogDescription>Search across products, solutions, and resources</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Type to search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Search Results */}
                  {searchQuery.trim() && (
                    <div className="mt-4 max-h-[300px] overflow-y-auto">
                      {filteredResults.length > 0 ? (
                        <div className="space-y-1">
                          {filteredResults.map((item) => (
                            <button
                              key={item.href}
                              onClick={() => handleSearchItemClick(item.href)}
                              className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary/50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-foreground">{item.label}</span>
                                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                  {item.category}
                                </span>
                              </div>
                              {item.description && (
                                <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                              )}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No results found for "{searchQuery}"</p>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Link to="/demo" className="btn-primary text-sm px-[13px]">
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden ml-auto p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-popover border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full py-2 text-foreground font-medium"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="pl-4 mt-2 space-y-2 animate-slide-in">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile Language Selector */}
            <div className="border-t border-border pt-4 mt-2">
              <p className="text-sm text-muted-foreground mb-2">{t("nav.language")}</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedLanguage === lang.code ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>
            <Link
              to="/demo"
              className="btn-primary w-full justify-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.bookMeeting")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
