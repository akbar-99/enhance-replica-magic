import statsBackground from "@/assets/stats-background.webp";
import { Activity, Users, Globe, Headset } from "lucide-react";

const stats = [
  {
    icon: Activity,
    value: '99.9% Performance',
    label: 'UPTIME SLA',
    color: 'text-blue-400'
  },
  {
    icon: Users,
    value: '4K+ Managed',
    label: 'END POINTS',
    color: 'text-indigo-400'
  },
  {
    icon: Globe,
    value: '150+ Delivered',
    label: 'PROJECTS',
    color: 'text-cyan-400'
  },
  {
    icon: Headset,
    value: '24/7 Response',
    label: 'GLOBAL SUPPORT',
    color: 'text-primary'
  }
];

export default function StatsSection() {
  return (
    <section
      style={{ backgroundImage: "url(\"/lovable-uploads/3b8ba20a-8b8c-4a2c-bdad-bc96de88f2f2.webp\")" }}
      className="my-[2px] bg-cover bg-center bg-no-repeat py-[72px] relative"
    >
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                {stat.label}
              </div>
              <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}