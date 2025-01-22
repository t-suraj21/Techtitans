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
        <h1>Tech News</h1>
      </header>

      <div className="news-container">
        {/* Breaking News Section */}
        <div className="latest-news">
          <h2 className="section-title">Breaking News</h2>
          <div className="breaking-news-grid">
            {news.slice(0, 4).map((article, index) => (
              <div key={index} className="news-block">
                <div className="news-content-wrapper">
                  {article.urlToImage && (
                    <div className="image-container">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="news-image"
                      />
                    </div>
                  )}
                  <div className="news-details">
                    <h3 className="news-title">{article.title}</h3>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-link"
                    >
                      Read full article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Updates Section */}
        <div className="older-news">
          <h2 className="section-title">Latest Updates</h2>
          {news.slice(4).map((article, index) => (
            <div
              key={index}
              className="news-block"
              style={{
                display: "flex",
                marginBottom: "20px",
                padding: "15px",
                background: "rgba(25, 35, 70, 0.95)",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Image on the left */}
              {article.urlToImage && (
                <div
                  className="image-container"
                  style={{
                    flexShrink: "0",
                    width: "200px",
                    height: "150px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="news-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              {/* Text on the right */}
              <div
                className="news-details"
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <h3
                  className="news-title"
                  style={{
                    fontSize: "1.2em",
                    margin: "0 0 10px 0",
                    color: "#fff",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="news-description"
                  style={{
                    margin: "0 0 10px 0",
                    color: "#ccc",
                    lineHeight: "1.5",
                  }}
                >
                  {article.description}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                  style={{
                    fontSize: "1em",
                    color: "#1e90ff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Read full article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
