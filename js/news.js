document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "d967cc5f1ec58d7ec8107a22e7811a0c";
  const newsList = document.getElementById("news-list");

    /**
   * Fetches news articles from the News API.
   */
  function fetchNews() {
    const API_URL = `https://gnews.io/api/v4/top-headlines?country=ie&lang=en&max=5&apikey=${API_KEY}`;
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        return response.json();
      })
      .then((data) => {
        displayNews(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        newsList.innerHTML = `<p>Error loading news: ${error.message}</p>`;
      });
  }

  function displayNews(articles) {
    newsList.innerHTML = "";
    articles.forEach((article) => {
      const card = document.createElement("div");
      card.classList.add("news-card");
      card.innerHTML = `
        <a href="${article.url}" target="_blank">
          <img src="${article.image}" alt="${article.title}" />
          <h3>${article.title}</h3>
          <p>${article.description}</p>
        </a>
      `;
      newsList.appendChild(card);
    });
  }

  fetchNews();
});
