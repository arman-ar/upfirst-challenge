import React, { useEffect } from 'react'
import { getArticlesByPage } from '../../api'
import { Article } from '../../types'

export function ArticlesContainer() {
  const [articles, setArticles] = React.useState<Article[]>([])
  const [page, setPage] = React.useState(1)

  const getArticles = async (page: number) => {
    const data = await getArticlesByPage(page)
    setArticles(data)
  }

  useEffect(() => {
    getArticles(page)
  }, [page])

  return (
    <div>
      {articles.map((article) => {
        return <div key={article.id}>{article.title}</div>
      })}
    </div>
  )
}
