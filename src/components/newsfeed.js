import React, { useEffect, useState } from 'react';
import './NewsFeed.css'; // Custom CSS file for styling

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Replace 'YOUR_API_KEY' with your actual News API key
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setNews(data.articles || []); // Handle cases where articles might be undefined
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
    }, [API_URL]);

    if (loading) {
        return <div className="loading">Loading news...</div>;
    }

    if (!news.length) {
        return <div className="no-news">No news available at the moment.</div>;
    }

    return (
        <div className="news-feed">
            <header className="news-feed-header">
                <h1>Tech News Feed</h1>
            </header>

            <div className="news-container">
                {news.map((article, index) => (
                    <div key={index} className={`news-card ${index === 0 ? 'latest-news' : ''}`}>
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="news-image" />
                        )}
                        <div className="news-content">
                            <h2 className="news-title">{article.title}</h2>
                            <p className="news-description">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
