import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema, organizationSchema } from '@/components/SEO';
import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye, Server, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Shield,
    title: 'Data Security Platform',
    description: 'Comprehensive data protection across all environments with AI-powered classification and policy enforcement.',
    features: ['AI Data Classification', 'Policy Management', 'Incident Response', 'Compliance Reporting'],
    link: '/products/data-security',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Protect cloud workloads and SaaS applications with advanced threat detection and automated remediation.',
    features: ['CASB', 'CSPM', 'CWPP', 'SaaS Security'],
    link: '/products/cloud-security',
    gradient: 'from-cyan-500/10 to-teal-500/10',
  },
  {
    icon: Lock,
    title: 'Network Security',
    description: 'Secure your network perimeter with next-generation firewall and intrusion prevention capabilities.',
    features: ['NGFW', 'IPS/IDS', 'VPN', 'Traffic Analysis'],
    link: '/products/network-security',
    gradient: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    icon: Database,
    title: 'Data Discovery',
    description: 'Find and classify sensitive data automatically using AI-powered scanning across structured and unstructured data.',
    features: ['Auto-Discovery', 'Classification', 'Data Mapping', 'Risk Assessment'],
    link: '/products/data-discovery',
    gradient: 'from-purple-500/10 to-indigo-500/10',
  },
  {
    icon: Zap,
    title: 'Threat Prevention',
    description: 'Stop threats before they impact your business with real-time protection and advanced malware analysis.',
    features: ['Malware Protection', 'Ransomware Defense', 'Zero-Day Protection', 'Threat Intelligence'],
    link: '/products/threat-prevention',
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    icon: Eye,
    title: 'Visibility & Analytics',
    description: 'Get complete visibility into data flows and user behavior with advanced analytics and reporting.',
    features: ['UEBA', 'Data Flow Mapping', 'Risk Scoring', 'Dashboard & Reports'],
    link: '/products/analytics',
    gradient: 'from-emerald-500/10 to-cyan-500/10',
  },
  {
    icon: Server,
    title: 'Endpoint Security',
    description: 'Protect endpoints with advanced threat protection and data loss prevention capabilities.',
    features: ['EDR', 'DLP', 'Device Control', 'Encryption'],
    link: '/products/endpoint-security',
    gradient: 'from-slate-500/10 to-blue-500/10',
  },
  {
    icon: Globe,
    title: 'Web Security',
    description: 'Secure web access with advanced URL filtering, SSL inspection, and threat protection.',
    features: ['Web Filtering', 'SSL Inspection', 'Malware Scanning', 'Content Control'],
    link: '/products/web-security',
    gradient: 'from-sky-500/10 to-blue-500/10',
  },
];

export default function Products() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://itenhance.tech' },
    { name: 'Products', url: 'https://itenhance.tech/products' },
  ]);

  const productsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      {
        "@type": "ItemList",
        "name": "ENHANCE TECH Security Products",
        "description": "Enterprise security products and solutions",
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.title,
            "description": product.description,
            "brand": organizationSchema,
            "category": "IT Security Software"
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title="Security Products | ENHANCE TECH - Enterprise IT Solutions"
        description="Explore our comprehensive security products including data security platforms, cloud security, network protection, threat prevention, and endpoint security solutions."
        keywords="security products, data security platform, cloud security, network security, endpoint protection, threat prevention Dubai"
        canonicalUrl="https://itenhance.tech/products"
        structuredData={productsSchema}
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Security Solutions</span>
          </div>
          <h1 className="section-title text-slate-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Our <span className="glow-text">Products</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive security solutions designed to protect your enterprise from modern threats while enabling digital transformation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className={`bg-gradient-to-br ${product.gradient} border border-slate-200/80 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-slate-700 text-xs rounded-full font-medium border border-slate-200/50 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold group/link hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-white to-[hsl(var(--glow-cyan))]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our products can protect your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary">
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary border-slate-300 text-slate-900 hover:bg-slate-100">
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
