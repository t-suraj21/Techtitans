import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a1c75cdae0a3468abfc0e660c762d026";
  const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const sortedNews = data.articles.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        setNews(sortedNews || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_URL]);

  if (loading) {
    return <div className="loading">Loading News...</div>;
  }

  if (!news.length) {
    return <div className="no-news">No news available at the moment.</div>;
  }

  return (
    <div className="news-feed">
      <header className="news-header">
        <h1>Latest Tech News</h1>
      </header>

      <div className="news-container">
        {/* Latest News Section */}
        <div className="latest-news">
          <h2 className="section-title">Breaking News</h2>
          <div className="news-block featured">
            <div className="news-content-wrapper">
              {news[0]?.urlToImage && (
                <div className="image-container">
                  <img src={news[0].urlToImage} alt={news[0].title} className="news-image" />
                </div>
              )}
              <div className="news-details">
                <h3 className="news-title">{news[0]?.title}</h3>
                <p className="news-description">{news[0]?.description}</p>
                <a href={news[0]?.url} target="_blank" rel="noopener noreferrer" className="news-link">
                  Read full article →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Older News Section */}
        <div className="older-news">
          <h2 className="section-title">Latest Updates</h2>
          {news.slice(1).map((article, index) => (
            <div key={index} className="news-block">
              <div className="news-content-wrapper">
                {article.urlToImage && (
                  <div className="image-container">
                    <img src={article.urlToImage} alt={article.title} className="news-image" />
                  </div>
                )}
                <div className="news-details">
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-description">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                    Read full article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;