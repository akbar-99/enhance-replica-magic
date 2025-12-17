import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from "lucide-react";
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
    label: "English",
  },
  {
    code: "ES",
    label: "Español",
  },
  {
    code: "FR",
    label: "Français",
  },
  {
    code: "DE",
    label: "Deutsch",
  },
  {
    code: "AR",
    label: "العربية",
  },
];
const navItems: NavItem[] = [
  {
    label: "Products",
    dropdown: [
      {
        label: "Data Security Platform",
        href: "/products/data-security",
        description: "Comprehensive data protection",
      },
      {
        label: "Cloud Security",
        href: "/products/cloud-security",
        description: "Secure cloud environments",
      },
      {
        label: "Network Security",
        href: "/products/network-security",
        description: "Advanced network protection",
      },
      {
        label: "Endpoint Security",
        href: "/products/endpoint-security",
        description: "Device-level protection",
      },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      {
        label: "Enterprise Security",
        href: "/solutions/enterprise",
        description: "For large organizations",
      },
      {
        label: "AI & ML Security",
        href: "/solutions/ai-security",
        description: "Protect AI workflows",
      },
      {
        label: "Compliance",
        href: "/solutions/compliance",
        description: "Meet regulatory requirements",
      },
      {
        label: "Zero Trust",
        href: "/solutions/zero-trust",
        description: "Modern security framework",
      },
      {
        label: "Zero Trust",
        href: "/solutions/zero-trust",
        description: "Modern security framework",
      },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Blog",
        href: "/resources/blog",
        description: "Latest insights",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
        description: "Success stories",
      },
      {
        label: "Whitepapers",
        href: "/resources/whitepapers",
        description: "In-depth research",
      },
      {
        label: "Webinars",
        href: "/resources/webinars",
        description: "Expert sessions",
      },
    ],
  },
  {
    label: "Partners",
    dropdown: [
      {
        label: "Partner Program",
        href: "/partners/program",
        description: "Join our ecosystem",
      },
      {
        label: "Find a Partner",
        href: "/partners/find",
        description: "Local expertise",
      },
      {
        label: "Technology Partners",
        href: "/partners/technology",
        description: "Integration partners",
      },
    ],
  },
  {
    label: "Company",
    dropdown: [
      {
        label: "About Us",
        href: "/company/about",
        description: "Our mission & values",
      },
      {
        label: "Careers",
        href: "/company/careers",
        description: "Join our team",
      },
      {
        label: "Contact",
        href: "/company/contact",
        description: "Get in touch",
      },
      {
        label: "News",
        href: "/company/news",
        description: "Latest announcements",
      },
    ],
  },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
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
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 rounded-full transition-all duration-200 cursor-pointer">
                    {item.label}
                  </span>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 min-w-[240px] bg-popover border border-border rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === item.label ? "opacity-85 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                    >
                      <div className="p-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex flex-col px-4 py-3 rounded-md hover:bg-secondary/50 transition-colors"
                          >
                            <span className="font-medium text-foreground">{subItem.label}</span>
                            {subItem.description && (
                              <span className="text-xs text-muted-foreground mt-0.5">{subItem.description}</span>
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
                    onClick={() => setSelectedLanguage(lang.code)}
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
              ​Talk to an Expert
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
