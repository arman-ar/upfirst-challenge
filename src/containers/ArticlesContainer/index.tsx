import React, { useEffect } from 'react'
import { getArticlesByPage } from '../../api'
import { Article } from '../../types'
import { Button, Card } from '../../components'
import { randomDateTimeStamp } from '../../utils'

export function ArticlesContainer() {
  const [loading, setLoading] = React.useState(false)
  const [articles, setArticles] = React.useState<Article[]>([])
  const [page, setPage] = React.useState(1)

  const getArticles = async (page: number) => {
    setLoading(true)
    const data = await getArticlesByPage(page)
    setArticles(data)
    setLoading(false)
  }

  const removeCard = (id: number) => {
    const updatedArticles = articles.filter((article) => article.id !== id)
    setArticles(updatedArticles)
  }

  const handlePrevPage = () => {
    setPage((prev) => prev - 1)
  }

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    getArticles(page)
  }, [page])

  if (loading) {
    return <div className="flex flex-col gap-5 p-4">Loading...</div>
  }

  if (!articles.length) {
    return <div className="flex flex-col gap-5 p-4">No articles...</div>
  }

  return (
    <div className="flex flex-col gap-5 p-4">
      {articles.map((article, index) => {
        return (
          <Card
            key={article.id}
            name={article.title}
            subject={article.body}
            status={(index + page) % 2 == 0 ? 'Active' : 'Passive'}
            time={randomDateTimeStamp()}
            onRemove={() => removeCard(article.id)}
          />
        )
      })}

      <div className="flex w-full items-center justify-center gap-8">
        <Button
          label="< Previous page"
          onClick={handlePrevPage}
          disabled={page === 1}
        />
        <Button
          label="Next page >"
          onClick={handleNextPage}
          disabled={page === 5}
        />
      </div>
    </div>
  )
}
