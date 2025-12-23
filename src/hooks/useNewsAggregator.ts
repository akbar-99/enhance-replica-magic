import { useQuery } from '@tanstack/react-query';

export interface NewsArticle {
    title: string;
    description: string;
    link: string;
    pubDate: string;
    source: 'TechCrunch' | 'Hacker News' | 'The Verge' | 'ZDNet' | 'InfoWorld';
    thumbnail?: string;
    author?: string;
}

interface RSS2JSONResponse {
    status: string;
    feed: {
        title: string;
        link: string;
        description: string;
    };
    items: Array<{
        title: string;
        description: string;
        link: string;
        pubDate: string;
        thumbnail?: string;
        author?: string;
    }>;
}

const RSS_FEEDS = [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' as const },
    { url: 'http://feeds.feedburner.com/TheHackersNews', source: 'Hacker News' as const },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' as const },
    { url: 'https://www.zdnet.com/news/rss.xml', source: 'ZDNet' as const },
    { url: 'https://www.infoworld.com/feed/', source: 'InfoWorld' as const },
];

const fetchRSSFeed = async (feedUrl: string, source: string): Promise<NewsArticle[]> => {
    // Add a unique timestamp to the feed URL to bypass rss2json's server-side cache
    const cacheBuster = new Date().getTime();
    const timestampedFeedUrl = `${feedUrl}${feedUrl.includes('?') ? '&' : '?'}cache_bust=${cacheBuster}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(timestampedFeedUrl)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${source} feed`);
        }

        const data: RSS2JSONResponse = await response.json();

        if (data.status !== 'ok') {
            throw new Error(`RSS2JSON error for ${source}`);
        }

        return data.items.map(item => ({
            title: item.title,
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + (item.description?.length > 200 ? '...' : '') || '',
            link: item.link,
            pubDate: item.pubDate,
            source: source as NewsArticle['source'],
            thumbnail: item.thumbnail,
            author: item.author,
        }));
    } catch (error) {
        console.error(`Error fetching ${source}:`, error);
        return [];
    }
};

export const useNewsAggregator = () => {
    const { data: articles = [], isLoading, error, refetch, dataUpdatedAt } = useQuery({
        queryKey: ['news-aggregator'],
        queryFn: async () => {
            // Fetch all feeds concurrently
            const feedPromises = RSS_FEEDS.map(feed =>
                fetchRSSFeed(feed.url, feed.source)
            );

            const results = await Promise.all(feedPromises);

            // Merge all articles
            const allArticles = results.flat();

            // Sort by publication date (newest first)
            return allArticles.sort((a, b) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
            );
        },
        staleTime: 60 * 1000, // Consider data fresh for 1 minute
        gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
        refetchInterval: 60 * 1000, // Refetch every minute
        refetchOnWindowFocus: true,
    });

    return {
        articles,
        loading: isLoading,
        error,
        refresh: refetch,
        lastUpdated: dataUpdatedAt,
    };
};
