import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MediumArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.medium.com/v1/users/ethanfree23/publications',
        {
          headers: { 
            Authorization: 'Bearer 25492b6fc334ed8e898a6190a23adcbaea5b287347b5490221341aa62bc029cd2' 
          },
        }
      );
      setArticles(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Medium Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MediumArticles;