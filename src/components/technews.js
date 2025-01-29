import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null); // Store next page token
  const [prevPages, setPrevPages] = useState([]); // Store previous pages for navigation

  const API_KEY = "pub_66873f7ab8d98be881cdbea55344501b995eb";
  const BASE_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=tech%20industry`;

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "error") {
        console.error("API Error:", data.message);
        return;
      }

      setNews(data.results || []);
      setNextPage(data.nextPage || null);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(BASE_URL);
  }, []);

  const nextPageHandler = () => {
    if (nextPage) {
      setPrevPages([...prevPages, nextPage]); // Store current page for back navigation
      fetchNews(`${BASE_URL}&page=${nextPage}`);
    }
  };

  const prevPageHandler = () => {
    if (prevPages.length > 0) {
      const lastPage = prevPages[prevPages.length - 1];
      setPrevPages(prevPages.slice(0, -1)); // Remove last page from history
      fetchNews(`${BASE_URL}&page=${lastPage}`);
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

      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.image_url && (
              <img src={article.image_url} alt={article.title} className="news-image" />
            )}
            <div className="news-content">
              <h3 className="news-title">{article.title.slice(0, 100)}...</h3>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPageHandler} disabled={prevPages.length === 0} className="page-button">
          ← Previous
        </button>
        <button onClick={nextPageHandler} disabled={!nextPage} className="page-button">
          Next →
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
