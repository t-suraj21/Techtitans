import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);

  const API_KEY = "pub_66873f7ab8d98be881cdbea55344501b995eb";
  const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=tech%20industry`;

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setNews(data.results || []);
      setNextPage(data.nextPage || null); // Get next page token
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(API_URL);
  }, []);

  const loadNextPage = () => {
    if (nextPage) {
      fetchNews(`${API_URL}&page=${nextPage}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading News...</div>;
  }

  if (!news.length) {
    return <div className="no-news">No news available at the moment.</div>;
  }

  return (
    <div className="news-feed">
      <header className="news-header">
        <h1>Tech Industry News</h1>
      </header>

      <div className="news-list">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="news-image" />
            )}
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                Read full article →
              </a>
            </div>
          </div>
        ))}
      </div>

      {nextPage && (
        <div className="pagination">
          <button onClick={loadNextPage} className="page-button">
            Load More News →
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
