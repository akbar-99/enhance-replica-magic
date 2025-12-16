import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Phone, Users, MapPin, MessageCircle } from "lucide-react";
const navItems = [{
  icon: Home,
  label: "Home",
  path: "/"
}, {
  icon: Phone,
  label: "Call Us",
  path: "tel:+97143296840",
  isExternal: true
}, {
  icon: Users,
  label: "About",
  path: "/company"
}, {
  icon: MapPin,
  label: "Location",
  path: "/contact"
}, {
  icon: MessageCircle,
  label: "Chat",
  path: "https://wa.me/97143296840",
  isExternal: true
}];
const FloatingNavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  return <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Glass container */}
      <div className="relative flex items-center gap-6 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl px-[60px] py-[6px] bg-primary-foreground">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50" />

        {/* Inner glass effect */}
        <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/5 to-transparent" />

        {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        const isHovered = hoveredIndex === index;
        const buttonContent = <div className="relative group" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {/* Tooltip */}
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-white/10 text-xs font-medium text-foreground whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                {item.label}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background/90" />
              </div>

              {/* Icon button */}
              <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 cursor-pointer ${isActive ? "bg-primary/20" : isHovered ? "bg-white/10" : "bg-transparent"}`}>
                {/* Glow effect - only for active state */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? "bg-primary/30 blur-lg opacity-100 scale-110" : "opacity-0 scale-100"}`} />

                {/* Icon */}
                <Icon className={`relative z-10 w-5 h-5 transition-all duration-300 ${isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" : isHovered ? "text-foreground" : "text-muted-foreground/70"}`} />
              </div>
            </div>;
        if (item.isExternal) {
          return <a key={index} href={item.path} target={item.path.startsWith("https") ? "_blank" : undefined} rel={item.path.startsWith("https") ? "noopener noreferrer" : undefined}>
                {buttonContent}
              </a>;
        }
        return <Link key={index} to={item.path}>
              {buttonContent}
            </Link>;
      })}
      </div>
    </div>;
};
export default FloatingNavBar;