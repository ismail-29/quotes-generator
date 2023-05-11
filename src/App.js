import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

  return (
    <div className="container">
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <div className="button-container">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="tweet-quote"
          ><i class="fab fa-twitter">tweet</i>

          </a>
          <button id="new-quote" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
