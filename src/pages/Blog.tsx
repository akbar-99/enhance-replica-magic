import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronRight,
    Calendar,
    Globe,
    ArrowRight,
    Clock,
    Tag,
    Filter,
    Newspaper,
    BookOpen,
    ArrowUpRight,
    Linkedin
} from 'lucide-react';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FloatingNavBar from '@/components/FloatingNavBar';
import { Link } from 'react-router-dom';

// Import blog assets
import blogChar1 from "@/assets/blog/blog-character-handoff.jpg";
import blogChar2 from "@/assets/blog/blog-character-2-new.jpg";
import blogChar3 from "@/assets/blog/blog-character-3-new.jpg";
import blogChar4 from "@/assets/blog/blog-character-4-new.jpg";
import blogChar5 from "@/assets/blog/blog-character-5-new.jpg";

const CATEGORIES = ['All', 'Security', 'Cloud', 'IT Infrastructure', 'AI & Innovation', 'Workplace'];

const BLOG_POSTS = [
    {
        id: 1,
        title: "Key Benefits Of Using Microsofts Hand Off Feature In Windows 11",
        description: "Discover how Microsoft's upcoming Hand Off feature in Windows 11 allows seamless work transitions between phone and PC.",
        image: blogChar1,
        author: "EnhanceTech",
        date: "October 10, 2025",
        category: "Workplace",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "5 Powerful Benefits Of IT Managed Services Plans For Growth",
        description: "Discover the top 5 benefits of IT Managed Services Plans and how they can boost productivity, enhance security, and reduce costs.",
        image: blogChar2,
        author: "EnhanceTech",
        date: "April 3, 2025",
        category: "IT Infrastructure",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Revolutionary Cloud Computing Trends To Watch In 2025",
        description: "Discover the top cloud computing trends to Watch in 2025, including edge computing, hybrid cloud, serverless technology, and enhanced security.",
        image: blogChar3,
        author: "EnhanceTech",
        date: "March 26, 2025",
        category: "Cloud",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Cybersecurity Best Practices For Small Businesses",
        description: "Learn essential cybersecurity strategies to protect your small business from threats and ensure data safety in an evolving digital landscape.",
        image: blogChar4,
        author: "EnhanceTech",
        date: "February 15, 2025",
        category: "Security",
        readTime: "8 min read"
    },
    {
        id: 5,
        title: "How AI Is Revolutionizing Modern IT Support Services",
        description: "Explore how artificial intelligence is transforming IT support with automated solutions, predictive maintenance, and enhanced user experiences.",
        image: blogChar5,
        author: "EnhanceTech",
        date: "January 20, 2025",
        category: "AI & Innovation",
        readTime: "6 min read"
    }
];

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        // Load Elfsight Platform script
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const featuredPost = useMemo(() => BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0], []);
    const regularPosts = useMemo(() => filteredPosts.filter(p => p.id !== featuredPost.id), [filteredPosts, featuredPost]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <SEO
                title="Insights & Innovation Blog | Enhance Tech"
                description="Stay ahead with the latest in IT infrastructure, cybersecurity, cloud computing, and workplace modernization."
                keywords="IT blog, tech insights, cybersecurity updates, cloud computing trends, business technology"
                canonicalUrl="https://itenhance.tech/resources/blog"
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#3b82f61a_0%,transparent_50%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            <span>Insights & Innovation Hub</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Stay Ahead of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Tech Curve</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                            Expert perspectives on the technologies shaping the future of business operations and digital transformation.
                        </p>

                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or trends..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories & Filter Bar */}
            <div className="sticky top-16 z-40 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center overflow-x-auto no-scrollbar gap-2 lg:justify-center">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-16 container mx-auto px-6">
                {/* LinkedIn Feed Integration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] shadow-lg">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Live From LinkedIn</h2>
                            <p className="text-slate-500 text-sm">Stay updated with our latest professional insights</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-4 md:p-8 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
                        {/* Widget Container */}
                        <div className="w-full h-full relative z-10">
                            {/* Elfsight LinkedIn Feed Widget */}
                            <div className="elfsight-app-3f736b65-666c-446e-bc57-6ee406ac8ea1" data-elfsight-app-lazy></div>
                        </div>

                        {/* Subtle background decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50" />
                    </div>
                </motion.div>

                {/* Featured Post */}
                {selectedCategory === 'All' && !searchQuery && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row min-h-[500px]">
                            <div className="lg:w-1/2 relative overflow-hidden">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                        Featured Post
                                    </span>
                                    <span className="text-slate-400 text-sm flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {featuredPost.description}
                                </p>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-900">{featuredPost.author}</p>
                                        <p className="text-sm text-slate-500">{featuredPost.date}</p>
                                    </div>
                                    <Button className="rounded-full h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white gap-2 text-lg shadow-lg shadow-blue-600/30">
                                        Read Article <ArrowUpRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Regular Posts Grid */}
                <AnimatePresence mode="wait">
                    {filteredPosts.length > 0 ? (
                        <motion.div
                            key={`${selectedCategory}-${searchQuery}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {(selectedCategory === 'All' && !searchQuery ? regularPosts : filteredPosts).map((post) => (
                                <motion.article
                                    key={post.id}
                                    variants={itemVariants}
                                    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm text-xs font-bold text-blue-600 uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-7 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4" /> {post.date}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-4 h-4" /> {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                    ET
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{post.author}</span>
                                            </div>
                                            <Link
                                                to={`/resources/blog/${post.id}`}
                                                className="text-blue-600 font-bold text-sm flex items-center gap-1.5 group/link"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                                <Search className="w-10 h-10 text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
                            <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                            <Button
                                variant="outline"
                                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                                className="mt-6 rounded-full px-8"
                            >
                                Clear all filters
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#3b82f61a_0%,transparent_40%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Stay in the Loop</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto opacity-90">
                            Join 5,000+ professionals receiving our monthly digest of tech trends, security alerts, and operational wisdom.
                        </p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="flex-1 h-14 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                                required
                            />
                            <Button className="h-14 px-8 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-bold transition-all shadow-lg hover:shadow-white/20">
                                Subscribe Now
                            </Button>
                        </form>
                        <p className="mt-6 text-blue-200/60 text-xs">
                            Zero spam. Unsubscribe anytime. View our <Link to="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <FloatingNavBar />
        </main>
    );
};

export default Blog;
