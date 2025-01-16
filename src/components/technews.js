import React, { useEffect, useState } from "react";
import "./TechNewsFeed.css";

const TechNewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_URL]);

  if (loading) {
    return <div className="loading">Loading Tech News...</div>;
  }

  if (!news.length) {
    return <div className="no-news">No tech news available at the moment.</div>;
  }

  return (
    <div className="tech-news-feed">
      <header className="tech-news-header">
        <h1>Tech News for Engineering Students</h1>
      </header>

      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-block">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <div className="news-details">
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

export default TechNewsFeed;
