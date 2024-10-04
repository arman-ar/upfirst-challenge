export const getArticlesByPage = async (page: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
    )
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    const result = await response.json()
    return result
  } catch (err) {
    console.error(err)
  }
}
