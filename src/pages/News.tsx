import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Search, RefreshCw, Filter, Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import { useNewsAggregator, NewsArticle } from '../hooks/useNewsAggregator';
import { format, formatDistanceToNow } from 'date-fns';
import SEO from '../components/SEO';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingNavBar from '../components/FloatingNavBar';

const News = () => {
    const { articles, loading, refresh } = useNewsAggregator();
    const [selectedSource, setSelectedSource] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const sources = ['All', 'TechCrunch', 'Hacker News', 'The Verge', 'ZDNet'];

    const sourceColors = {
        'TechCrunch': 'bg-green-500',
        'Hacker News': 'bg-orange-500',
        'The Verge': 'bg-pink-500',
        'ZDNet': 'bg-blue-500',
    };

    const filteredAndSortedArticles = useMemo(() => {
        let filtered = articles;

        // Filter by source
        if (selectedSource !== 'All') {
            filtered = filtered.filter(article => article.source === selectedSource);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query)
            );
        }

        // Sort
        const sorted = [...filtered].sort((a, b) => {
            const dateA = new Date(a.pubDate).getTime();
            const dateB = new Date(b.pubDate).getTime();
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return sorted;
    }, [articles, selectedSource, searchQuery, sortOrder]);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await refresh();
        setTimeout(() => setIsRefreshing(false), 1000);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Tech News Hub | Enhance Tech"
                description="Stay updated with the latest technology news from TechCrunch, The Hacker News, The Verge, and ZDNet. Real-time news aggregation."
                keywords="tech news, technology news, cybersecurity news, latest tech updates, TechCrunch, The Verge, Hacker News, ZDNet"
                canonicalUrl="https://enhancetech.ae/news"
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20"
                        >
                            <Newspaper className="h-10 w-10" />
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Tech News Hub
                        </h1>
                        <p className="text-xl md:text-2xl mb-3 text-white/90">
                            Stay ahead with the latest technology news
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-white/70">
                            <TrendingUp className="h-5 w-5 animate-pulse" />
                            <span>Live updates from 4 top tech sources</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Breaking News Ticker */}
            <section className="bg-red-600 border-y border-red-700 overflow-hidden">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center gap-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2 bg-red-700 px-4 py-1.5 rounded-full flex-shrink-0"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-white font-bold text-sm uppercase tracking-wider">Breaking News</span>
                        </motion.div>

                        <div className="flex-1 overflow-hidden">
                            <motion.div
                                animate={{
                                    x: [0, -2000],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 30,
                                        ease: "linear",
                                    },
                                }}
                                className="flex gap-8 whitespace-nowrap"
                            >
                                {articles.slice(0, 10).map((article, index) => (
                                    <a
                                        key={index}
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                                        <span className="font-medium">{article.title}</span>
                                    </a>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {articles.slice(0, 10).map((article, index) => (
                                    <a
                                        key={`dup-${index}`}
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                                        <span className="font-medium">{article.title}</span>
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-muted/30 border-b sticky top-0 z-40 backdrop-blur-lg bg-background/95">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Source Filters */}
                        <div className="flex flex-wrap gap-2 items-center">
                            <Filter className="h-5 w-5 text-muted-foreground" />
                            {sources.map((source) => (
                                <Button
                                    key={source}
                                    onClick={() => setSelectedSource(source)}
                                    variant={selectedSource === source ? "default" : "outline"}
                                    size="sm"
                                    className="transition-all"
                                >
                                    {source}
                                    {source !== 'All' && (
                                        <span className={`ml-2 w-2 h-2 rounded-full ${sourceColors[source as keyof typeof sourceColors]}`}></span>
                                    )}
                                </Button>
                            ))}
                        </div>

                        {/* Search and Controls */}
                        <div className="flex gap-2 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-64">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search news..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
                            >
                                <Calendar className="h-4 w-4 mr-2" />
                                {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
                            </Button>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleRefresh}
                                disabled={isRefreshing}
                            >
                                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                            </Button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-sm text-muted-foreground text-center lg:text-left">
                        Showing {filteredAndSortedArticles.length} article{filteredAndSortedArticles.length !== 1 ? 's' : ''}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-12 bg-background min-h-screen">
                <div className="container mx-auto px-6">
                    {loading ? (
                        // Loading Skeleton
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="bg-card p-6 rounded-xl border border-border animate-pulse">
                                    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                                    <div className="h-3 bg-muted rounded w-full mb-2"></div>
                                    <div className="h-3 bg-muted rounded w-5/6 mb-4"></div>
                                    <div className="h-3 bg-muted rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    ) : filteredAndSortedArticles.length === 0 ? (
                        // No Results
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <Newspaper className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                            <p className="text-muted-foreground">
                                {searchQuery ? 'Try a different search term' : 'Check back later for updates'}
                            </p>
                        </motion.div>
                    ) : (
                        // News Articles
                        <AnimatePresence mode="popLayout">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredAndSortedArticles.map((article, index) => (
                                    <motion.article
                                        key={article.link}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                        className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
                                    >
                                        {article.thumbnail && (
                                            <div className="relative h-48 overflow-hidden bg-muted">
                                                <img
                                                    src={article.thumbnail}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            </div>
                                        )}

                                        <div className="p-6">
                                            {/* Source Badge */}
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${sourceColors[article.source as keyof typeof sourceColors]}`}>
                                                    {article.source}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDistanceToNow(new Date(article.pubDate), { addSuffix: true })}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                                {article.description}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between">
                                                {article.author && (
                                                    <span className="text-xs text-muted-foreground truncate mr-2">
                                                        By {article.author}
                                                    </span>
                                                )}
                                                <a
                                                    href={article.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline ml-auto"
                                                >
                                                    Read more
                                                    <ExternalLink className="h-3 w-3 ml-1" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </AnimatePresence>
                    )}
                </div>
            </section>
            <Footer />
            <FloatingNavBar />
        </main>
    );
};

export default News;
