import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function fetchArticles() {
  const response = await fetch('https://api.medium.com/v1/users/ethanfree23/publications', {
    headers: {
      Authorization: 'Bearer 25492b6fc334ed8e898a6190a23adcbaea5b287347b5490221341aa62bc029cd2',
    },
  });
  const data = await response.json();
  const articleUrls = data.data.map(pub => pub.url);
  const articlePromises = articleUrls.map(url => fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`));
  const articleResponses = await Promise.all(articlePromises);
  const articleData = await Promise.all(articleResponses.map(res => res.json()));
  const articles = articleData.map(article => ({
    title: article.title,
    excerpt: article.description,
    date: new Date(article.pubDate),
    link: article.link,
  }));
  return articles;
}
