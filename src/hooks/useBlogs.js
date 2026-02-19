import { useState, useMemo } from 'react'
import { BLOGS } from '../data/blogs'

/**
 * Custom hook for blog search, filter and pagination logic.
 */
export function useBlogs({ initialCategory = 'All', perPage = 6 } = {}) {
  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState(initialCategory)
  const [page, setPage]         = useState(1)

  const filtered = useMemo(() => {
    return BLOGS.filter((b) => {
      const matchCat    = category === 'All' || b.category === category
      const matchSearch = b.title.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, category])

  const totalPages = Math.ceil(filtered.length / perPage)

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage
    return filtered.slice(start, start + perPage)
  }, [filtered, page, perPage])

  const handleSearch = (value) => {
    setSearch(value)
    setPage(1)
  }

  const handleCategory = (cat) => {
    setCategory(cat)
    setPage(1)
  }

  const handlePage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    search,
    category,
    page,
    filtered,
    paginated,
    totalPages,
    handleSearch,
    handleCategory,
    handlePage,
  }
}
