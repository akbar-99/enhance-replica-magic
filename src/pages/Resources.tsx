import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, FileText, Video, Download, Calendar, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Latest insights, trends, and best practices in cybersecurity.',
    count: '200+ Articles',
    link: '/resources/blog',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world success stories from our enterprise customers.',
    count: '50+ Studies',
    link: '/resources/case-studies',
  },
  {
    icon: Download,
    title: 'Whitepapers',
    description: 'In-depth research and technical documentation.',
    count: '30+ Papers',
    link: '/resources/whitepapers',
  },
  {
    icon: Video,
    title: 'Webinars',
    description: 'Expert-led sessions on security topics and product demos.',
    count: '100+ Videos',
    link: '/resources/webinars',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Upcoming conferences, workshops, and virtual events.',
    count: 'Live Events',
    link: '/resources/events',
  },
  {
    icon: Newspaper,
    title: 'News',
    description: 'Latest announcements and press releases.',
    count: 'Latest Updates',
    link: '/resources/news',
  },
];

const featuredResources = [
  {
    type: 'Whitepaper',
    title: '2024 Data Security Trends Report',
    description: 'Comprehensive analysis of emerging threats and security strategies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    type: 'Webinar',
    title: 'Zero Trust Architecture Implementation',
    description: 'Learn how to implement zero trust in your organization.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    type: 'Case Study',
    title: 'Fortune 500 Security Transformation',
    description: 'How a global enterprise modernized their security posture.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
  },
];

export default function Resources() {
  return (
    <main className="min-h-screen page-bg-light">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-slate-900 mb-4">
            Security <span className="glow-text">Resources</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our library of resources to help you stay ahead of threats and maximize your security investment.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 page-section-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 page-section-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 mb-2">{category.description}</p>
                  <span className="text-xs text-primary font-medium">{category.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
