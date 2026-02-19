import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useBlogs } from '../hooks/useBlogs'
import { CATEGORIES } from '../data/categories'
import BlogCard from '../components/blog/BlogCard'
import BlogCardSkeleton from '../components/blog/BlogCardSkeleton'
import SearchBar from '../components/shared/SearchBar'
import Pagination from '../components/shared/Pagination'
import CategoryBadge from '../components/ui/CategoryBadge'
import Button from '../components/ui/Button'
import Newsletter from '../components/shared/Newsletter'

export default function ListingPage() {
  const location = useLocation()
  const initCat  = location.state?.category || 'All'

  const [loading, setLoading] = useState(true)

  const {
    search, category, page,
    filtered, paginated, totalPages,
    handleSearch, handleCategory, handlePage,
  } = useBlogs({ initialCategory: initCat, perPage: 6 })

  // Simulate load
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [category, page])

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display font-black text-4xl text-slate-900 mb-2">All Articles</h1>
        <p className="text-slate-500 text-sm font-sans">
          Explore {filtered.length} articles across {CATEGORIES.length - 1} topics
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by title…"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <CategoryBadge
              key={cat}
              category={cat}
              active={category === cat}
              size="md"
              onClick={() => handleCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-slate-500 mb-6 font-sans">
        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        {category !== 'All' && ` in ${category}`}
        {search && ` for "${search}"`}
      </p>

      {/* Grid */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => <BlogCardSkeleton key={i} />)}
        </div>
      ) : paginated.length === 0 ? (
        /* Empty state */
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-black text-slate-900 text-xl mb-2 font-sans">No articles found</p>
          <p className="text-slate-500 text-sm mb-6 font-sans">Try a different search term or category.</p>
          <Button
            variant="outline"
            onClick={() => { handleSearch(''); handleCategory('All') }}
          >
            Clear all filters
          </Button>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {paginated.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} delay={i * 60} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <Pagination
              page={page}
              total={filtered.length}
              perPage={6}
              onChange={handlePage}
            />
          </div>
        </>
      )}

      <Newsletter />
    </div>
  )
}
