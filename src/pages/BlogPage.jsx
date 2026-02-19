import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { BLOGS } from '../data/blogs'
import { CATEGORY_STYLES } from '../data/categories'
import { formatCount, cn } from '../utils/helpers'
import CategoryBadge from '../components/ui/CategoryBadge'
import Avatar from '../components/ui/Avatar'
import Button from '../components/ui/Button'
import AuthorCard from '../components/shared/AuthorCard'
import CommentSection from '../components/blog/CommentSection'
import BlogCard from '../components/blog/BlogCard'
import NotFoundPage from './NotFoundPage'

/**
 * Renders blog content — handles ## headings, **bold**, and paragraphs.
 */
function ArticleBody({ content }) {
  const paragraphs = content.split('\n\n')
  return (
    <div className="space-y-4">
      {paragraphs.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="font-sans font-black text-xl text-slate-900 mt-8 mb-2 first:mt-0">
              {block.slice(3)}
            </h2>
          )
        }
        if (block.startsWith('**') && block.endsWith('**')) {
          return (
            <h3 key={i} className="font-sans font-bold text-base text-slate-900 mt-5 mb-1">
              {block.slice(2, -2)}
            </h3>
          )
        }
        return (
          <p key={i} className="font-display text-[16px] text-slate-600 leading-[1.85]">
            {block}
          </p>
        )
      })}
    </div>
  )
}

export default function BlogPage() {
  const { id }    = useParams()
  const navigate  = useNavigate()
  const blog      = BLOGS.find((b) => b.id === Number(id))

  const [bookmarked, setBookmarked] = useState(false)
  const [liked, setLiked]           = useState(false)

  if (!blog) return <NotFoundPage />

  const style   = CATEGORY_STYLES[blog.category] || CATEGORY_STYLES['All']
  const related = BLOGS.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 3)

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 font-sans transition-colors"
        >
          ← Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Article ── */}
          <article className="flex-1 min-w-0">

            {/* Hero meta */}
            <CategoryBadge category={blog.category} />
            <h1 className="font-display font-black text-slate-900 leading-tight mt-4 mb-4"
                style={{ fontSize: 'clamp(24px, 4vw, 38px)' }}>
              {blog.title}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-6 font-sans">{blog.excerpt}</p>

            {/* Author + actions bar */}
            <div className="flex items-center gap-4 py-5 border-y border-slate-100 mb-8">
              <Avatar initials={blog.author.avatar} size="lg" color={style.accent} />
              <div className="flex-1">
                <p className="font-bold text-slate-900 font-sans">{blog.author.name}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">
                  {blog.date} · {blog.readTime} read
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* Like */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all',
                    liked
                      ? 'text-rose-500 bg-rose-50'
                      : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50'
                  )}
                  aria-label="Like article"
                >
                  {liked ? '♥' : '♡'}
                </button>
                {/* Bookmark */}
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all',
                    bookmarked
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
                  )}
                  aria-label="Bookmark article"
                >
                  🔖
                </button>
              </div>
            </div>

            {/* Accent rule */}
            <div
              className={cn('h-[3px] rounded-full bg-gradient-to-r mb-8', style.gradient)}
            />

            {/* Body */}
            <ArticleBody content={blog.content} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold font-sans hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  # {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-sm text-slate-400 font-sans">
              <span>♥ {formatCount(blog.likes + (liked ? 1 : 0))} likes</span>
              <span>💬 {blog.comments} comments</span>
            </div>

            {/* Comments */}
            <CommentSection />
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:w-[280px] flex-shrink-0">
            <div className="sticky top-24 flex flex-col gap-5">

              {/* Author */}
              <AuthorCard author={blog.author} color={style.accent} compact />

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-2xl p-5">
                  <p className="font-black text-slate-900 text-sm mb-4 font-sans">
                    More in {blog.category}
                  </p>
                  <div className="space-y-4">
                    {related.map((b) => {
                      const rs = CATEGORY_STYLES[b.category]
                      return (
                        <Link
                          key={b.id}
                          to={`/blog/${b.id}`}
                          className="block group"
                        >
                          <div className={cn('h-0.5 rounded-full bg-gradient-to-r mb-2', rs.gradient)} />
                          <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 font-sans">
                            {b.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 font-sans">
                            {b.readTime} · {b.date}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-5 text-center">
                <p className="font-black text-slate-900 text-sm mb-2 font-sans">Enjoying this?</p>
                <p className="text-xs text-slate-500 mb-4 font-sans leading-relaxed">
                  Get the best articles delivered to your inbox weekly.
                </p>
                <Button size="sm" className="w-full">Subscribe Free</Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
