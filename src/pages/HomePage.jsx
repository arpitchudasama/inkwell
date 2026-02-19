import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BLOGS } from '../data/blogs'
import { CATEGORIES, CATEGORY_STYLES } from '../data/categories'
import BlogCard from '../components/blog/BlogCard'
import BlogCardSkeleton from '../components/blog/BlogCardSkeleton'
import Newsletter from '../components/shared/Newsletter'
import Button from '../components/ui/Button'

export default function HomePage() {
  const navigate  = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  const featured = BLOGS.filter((b) => b.featured)
  const latest   = BLOGS.filter((b) => !b.featured).slice(0, 6)

  return (
    <div>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #e0e7ff 0%, transparent 70%)' }}
        />
        <div className="absolute top-20 right-10 w-80 h-80 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-10 w-56 h-56 bg-indigo-200/35 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-indigo-700 text-xs font-bold mb-6 font-sans">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500" />
            </span>
            New articles every week
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-slate-900 leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(44px, 7vw, 76px)' }}>
            Ideas that{' '}
            <span className="relative inline-block">
              <span className="gradient-text">matter.</span>
              <svg className="absolute -bottom-2 left-0 w-full opacity-40" viewBox="0 0 300 10" fill="none">
                <path d="M2 8 Q75 2 150 6 Q225 10 298 4" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            In-depth writing on technology, design, science, and culture—from writers who know what they're talking about.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" onClick={() => navigate('/blog')}>
              Explore Articles →
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/signup')}>
              Start Writing
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mt-14">
            {[['40K+', 'Readers'], ['120+', 'Authors'], ['500+', 'Articles']].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-display font-black text-3xl text-slate-900">{n}</p>
                <p className="text-xs text-slate-500 mt-1 font-sans">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CONTENT ══════════════════════ */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Featured Stories */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display font-black text-2xl text-slate-900">Featured Stories</h2>
              <p className="text-slate-500 text-sm mt-0.5 font-sans">Editor's picks this week</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/blog')}>
              View all →
            </Button>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => <BlogCardSkeleton key={i} />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} featured delay={i * 100} />
              ))}
            </div>
          )}
        </section>

        {/* Browse Topics */}
        <section className="mb-16">
          <h2 className="font-display font-black text-2xl text-slate-900 mb-6">Browse Topics</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORIES.filter((c) => c !== 'All').map((cat) => {
              const count = BLOGS.filter((b) => b.category === cat).length
              const s     = CATEGORY_STYLES[cat]
              return (
                <button
                  key={cat}
                  onClick={() => navigate('/blog', { state: { category: cat } })}
                  className="
                    group relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-5
                    text-left hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300
                  "
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.gradient}`} />
                  <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors text-[14px] font-sans">
                    {cat}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {count} article{count !== 1 ? 's' : ''}
                  </p>
                </button>
              )
            })}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display font-black text-2xl text-slate-900">Latest Articles</h2>
              <p className="text-slate-500 text-sm mt-0.5 font-sans">Fresh from our writers</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/blog')}>
              See all →
            </Button>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => <BlogCardSkeleton key={i} />)}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latest.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} delay={i * 80} />
              ))}
            </div>
          )}
        </section>

        <Newsletter />
      </div>
    </div>
  )
}
