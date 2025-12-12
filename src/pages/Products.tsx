import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Shield,
    title: 'Data Security Platform',
    description: 'Comprehensive data protection across all environments with AI-powered classification and policy enforcement.',
    features: ['AI Data Classification', 'Policy Management', 'Incident Response', 'Compliance Reporting'],
    link: '/products/data-security',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Protect cloud workloads and SaaS applications with advanced threat detection and automated remediation.',
    features: ['CASB', 'CSPM', 'CWPP', 'SaaS Security'],
    link: '/products/cloud-security',
  },
  {
    icon: Lock,
    title: 'Network Security',
    description: 'Secure your network perimeter with next-generation firewall and intrusion prevention capabilities.',
    features: ['NGFW', 'IPS/IDS', 'VPN', 'Traffic Analysis'],
    link: '/products/network-security',
  },
  {
    icon: Database,
    title: 'Data Discovery',
    description: 'Find and classify sensitive data automatically using AI-powered scanning across structured and unstructured data.',
    features: ['Auto-Discovery', 'Classification', 'Data Mapping', 'Risk Assessment'],
    link: '/products/data-discovery',
  },
  {
    icon: Zap,
    title: 'Threat Prevention',
    description: 'Stop threats before they impact your business with real-time protection and advanced malware analysis.',
    features: ['Malware Protection', 'Ransomware Defense', 'Zero-Day Protection', 'Threat Intelligence'],
    link: '/products/threat-prevention',
  },
  {
    icon: Eye,
    title: 'Visibility & Analytics',
    description: 'Get complete visibility into data flows and user behavior with advanced analytics and reporting.',
    features: ['UEBA', 'Data Flow Mapping', 'Risk Scoring', 'Dashboard & Reports'],
    link: '/products/analytics',
  },
  {
    icon: Server,
    title: 'Endpoint Security',
    description: 'Protect endpoints with advanced threat protection and data loss prevention capabilities.',
    features: ['EDR', 'DLP', 'Device Control', 'Encryption'],
    link: '/products/endpoint-security',
  },
  {
    icon: Globe,
    title: 'Web Security',
    description: 'Secure web access with advanced URL filtering, SSL inspection, and threat protection.',
    features: ['Web Filtering', 'SSL Inspection', 'Malware Scanning', 'Content Control'],
    link: '/products/web-security',
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-foreground mb-4">
            Our <span className="glow-text">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions designed to protect your enterprise from modern threats while enabling digital transformation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
