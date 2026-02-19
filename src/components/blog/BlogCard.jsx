import { useNavigate } from 'react-router-dom'
import { useInView } from '../../hooks/useInView'
import { CATEGORY_STYLES } from '../../data/categories'
import { formatCount, cn } from '../../utils/helpers'
import CategoryBadge from '../ui/CategoryBadge'
import Avatar from '../ui/Avatar'

/**
 * BlogCard — renders a preview card for a single blog post.
 *
 * @param {object}  blog     - blog data object
 * @param {boolean} featured - uses larger card with gradient hero when true
 * @param {number}  delay    - animation stagger delay in ms
 */
export default function BlogCard({ blog, featured = false, delay = 0 }) {
  const navigate      = useNavigate()
  const [ref, inView] = useInView(0.1)
  const style         = CATEGORY_STYLES[blog.category] || CATEGORY_STYLES['All']

  const handleClick = () => navigate(`/blog/${blog.id}`)

  /* ── Featured (large) card ── */
  if (featured) {
    return (
      <article
        ref={ref}
        onClick={handleClick}
        className={cn(
          'group cursor-pointer bg-white rounded-3xl border border-slate-100 overflow-hidden',
          'shadow-card hover:shadow-card-hover hover:-translate-y-1',
          'transition-all duration-500',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {/* Gradient hero */}
        <div
          className={cn('relative h-52 bg-gradient-to-br flex items-end p-6 overflow-hidden', style.gradient)}
        >
          {/* Dot overlay */}
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

          {/* Featured badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-1 text-white text-[11px] font-bold font-sans">
            ⭐ Featured
          </div>

          <div>
            <CategoryBadge category={blog.category} />
            <h2 className="text-white font-black font-display text-xl mt-2 leading-snug line-clamp-2">
              {blog.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-sans">
            {blog.excerpt}
          </p>

          {/* Author row */}
          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
            <Avatar initials={blog.author.avatar} size="sm" color={style.accent} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-800 truncate font-sans">{blog.author.name}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-sans">{blog.date} · {blog.readTime} read</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
              <span>♥ {formatCount(blog.likes)}</span>
              <span>💬 {blog.comments}</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  /* ── Standard card ── */
  return (
    <article
      ref={ref}
      onClick={handleClick}
      className={cn(
        'group cursor-pointer bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col',
        'shadow-card hover:shadow-card-hover hover:-translate-y-0.5',
        'transition-all duration-350',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Accent stripe */}
      <div className={cn('h-[3px] bg-gradient-to-r', style.gradient)} />

      <div className="p-5 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={blog.category} />
          <span className="text-[11px] text-slate-400 font-sans">{blog.readTime} read</span>
        </div>

        {/* Title */}
        <h3 className="font-black font-display text-[15px] leading-snug text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 flex-1 font-sans">
          {blog.excerpt}
        </p>

        {/* Author row */}
        <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-slate-50">
          <Avatar initials={blog.author.avatar} size="xs" color={style.accent} />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-slate-800 truncate font-sans">{blog.author.name}</p>
            <p className="text-[10px] text-slate-400 font-sans">{blog.date}</p>
          </div>
          <span className="text-[11px] text-slate-400 font-sans">♥ {formatCount(blog.likes)}</span>
        </div>
      </div>
    </article>
  )
}
