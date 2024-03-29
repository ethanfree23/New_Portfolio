import Head from 'next/head'
import React, { useState, useEffect } from 'react';


import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
//   export default function ArticlesIndex({ article }) {
//     const [articles, setArticles] = useState([]);
  
//     const fecthArticles = () => {
//       fetch(
//         'https://api.medium.com/v1/users/ethanfree23/publications',
//         {
//           headers: {
//             Authorization: 'Bearer 25492b6fc334ed8e898a6190a23adcbaea5b287347b5490221341aa62bc029cd2'
//           },
//         }
//       ).then(res => res.json()).then((json) => { setArticles(json) })
  
//       useEffect(() => {
//         fecthArticles();
//       })
//     }


  return (
    <>
      <Head>
        <title>Articles - Ethan Freeman</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Writing on software design, my entrepreneurial journey, and random thoughts here and there."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in coolest-ness order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
