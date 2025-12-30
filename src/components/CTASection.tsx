import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />

      {/* Background Pattern/Glow */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 md:whitespace-nowrap"
        >
          {t('cta.title')} {t('cta.titleHighlight')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          {t('cta.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/30 rounded-full px-8 h-14 text-base font-semibold transition-all hover:scale-105 active:scale-95 group"
            >
              {t('cta.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
