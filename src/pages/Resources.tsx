import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import { ArrowRight, BookOpen, FileText, Video, Download, Calendar, Newspaper, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Latest insights, trends, and best practices in cybersecurity.',
    count: '200+ Articles',
    link: '/resources/blog',
    color: 'bg-blue-500',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world success stories from our enterprise customers.',
    count: '50+ Studies',
    link: '/resources/case-studies',
    color: 'bg-emerald-500',
  },
  {
    icon: Download,
    title: 'Whitepapers',
    description: 'In-depth research and technical documentation.',
    count: '30+ Papers',
    link: '/resources/whitepapers',
    color: 'bg-purple-500',
  },
  {
    icon: Video,
    title: 'Webinars',
    description: 'Expert-led sessions on security topics and product demos.',
    count: '100+ Videos',
    link: '/resources/webinars',
    color: 'bg-rose-500',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Upcoming conferences, workshops, and virtual events.',
    count: 'Live Events',
    link: '/resources/events',
    color: 'bg-orange-500',
  },
  {
    icon: Newspaper,
    title: 'News',
    description: 'Latest announcements and press releases.',
    count: 'Latest Updates',
    link: '/resources/news',
    color: 'bg-cyan-500',
  },
];

const featuredResources = [
  {
    type: 'Whitepaper',
    title: '2024 Data Security Trends Report',
    description: 'Comprehensive analysis of emerging threats and security strategies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
    color: 'bg-purple-500',
  },
  {
    type: 'Webinar',
    title: 'Zero Trust Architecture Implementation',
    description: 'Learn how to implement zero trust in your organization.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    color: 'bg-rose-500',
  },
  {
    type: 'Case Study',
    title: 'Fortune 500 Security Transformation',
    description: 'How a global enterprise modernized their security posture.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    color: 'bg-emerald-500',
  },
];

export default function Resources() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://itenhance.tech' },
    { name: 'Resources', url: 'https://itenhance.tech/resources' },
  ]);

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title="Security Resources | ENHANCE TECH Knowledge Center"
        description="Explore ENHANCE TECH's library of security resources including blog articles, case studies, whitepapers, webinars, and industry events."
        keywords="IT security resources, cybersecurity blog, security whitepapers, webinars, case studies, IT knowledge base"
        canonicalUrl="https://itenhance.tech/resources"
        structuredData={breadcrumbSchema}
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Knowledge Center</span>
          </div>
          <h1 className="section-title text-slate-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Security <span className="glow-text">Resources</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Explore our library of resources to help you stay ahead of threats and maximize your security investment.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Featured Resources</h2>
            <Link to="/resources/all" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={resource.title}
                className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {resource.type === 'Webinar' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${resource.color}`}>
                    {resource.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3 group-hover:text-primary transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{resource.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold">
                    Read More <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find the resources that matter most to your security journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.link}
                className="group bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 flex items-start gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {category.count}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest security insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
