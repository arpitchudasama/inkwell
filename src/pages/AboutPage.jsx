import { useInView } from '../hooks/useInView'
import { AUTHORS } from '../data/authors'
import AuthorCard from '../components/shared/AuthorCard'
import { cn } from '../utils/helpers'

const AUTHOR_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981']

const STATS = [
  { n: '40K+', label: 'Monthly Readers',       icon: '👥' },
  { n: '120+', label: 'Writers & Contributors', icon: '✍️' },
  { n: '500+', label: 'Published Articles',     icon: '📖' },
]

const VALUES = [
  {
    icon: '🔬',
    title: 'Depth Over Speed',
    body: 'We did rather publish one great piece than ten mediocre ones. Every article goes through multiple rounds of editorial feedback.',
  },
  {
    icon: '🎯',
    title: 'Respect the Reader',
    body: 'Our readers are smart. We do not over-explain, hedge unnecessarily, or write condescendingly. We trust you to handle nuance.',
  },
  {
    icon: '🌍',
    title: 'Diverse Perspectives',
    body: 'We actively recruit writers from different geographies, industries, and backgrounds. Monocultures make for bad publications.',
  },
]

export default function AboutPage() {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-4xl mx-auto px-4 pt-28 pb-16 transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-display font-black text-5xl text-slate-900 mb-5">
          About Inkwell
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed font-sans">
          We believe that depth is rare and valuable. Inkwell is a platform for writers who go all the way in, and readers who appreciate it.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
        {STATS.map(({ n, label, icon }) => (
          <div
            key={label}
            className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <p className="text-4xl mb-3">{icon}</p>
            <p className="font-display font-black text-4xl text-slate-900">{n}</p>
            <p className="text-slate-500 text-sm mt-1.5 font-sans">{label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-10 mb-16 text-center">
        <h2 className="font-display font-black text-3xl text-slate-900 mb-5">Our Mission</h2>
        <p className="text-slate-600 leading-relaxed text-lg max-w-xl mx-auto font-sans">
          The internet is drowning in hot takes and thin content. We're building a home for writing that requires research, takes time, and respects the reader's intelligence.
        </p>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-display font-black text-3xl text-slate-900 mb-8 text-center">What We Believe</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {VALUES.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="text-3xl mb-3">{icon}</p>
              <p className="font-black text-slate-900 text-sm mb-2 font-sans">{title}</p>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="font-display font-black text-3xl text-slate-900 mb-8 text-center">Meet Our Writers</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {AUTHORS.map((author, i) => (
            <AuthorCard
              key={author.id}
              author={author}
              color={AUTHOR_COLORS[i % AUTHOR_COLORS.length]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
