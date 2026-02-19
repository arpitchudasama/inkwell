import Avatar from '../ui/Avatar'
import Button from '../ui/Button'
import { CATEGORY_STYLES } from '../../data/categories'

/**
 * AuthorCard — author bio display.
 *
 * @param {object}  author  - author data object
 * @param {string}  color   - hex accent color
 * @param {boolean} compact - renders a horizontal mini version when true
 */
export default function AuthorCard({ author, color = '#6366f1', compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <Avatar initials={author.avatar} size="lg" color={color} />
        <div className="min-w-0">
          <p className="font-bold text-slate-900 text-sm font-sans truncate">{author.name}</p>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2 font-sans">{author.bio}</p>
          <div className="flex items-center gap-2.5 mt-2 text-[11px] text-slate-400 font-sans">
            <span>{author.followers} followers</span>
            <span>·</span>
            <span>{author.articles} articles</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 text-center">
      <div className="flex justify-center">
        <Avatar initials={author.avatar} size="xl" color={color} />
      </div>

      <p className="font-black text-slate-900 text-lg mt-4 font-sans">{author.name}</p>
      <p className="text-slate-500 text-sm mt-1.5 leading-relaxed font-sans">{author.bio}</p>

      <div className="flex items-center justify-center gap-6 mt-5">
        <div className="text-center">
          <p className="font-black text-slate-900 font-sans">{author.followers}</p>
          <p className="text-xs text-slate-500 font-sans">Followers</p>
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="text-center">
          <p className="font-black text-slate-900 font-sans">{author.articles}</p>
          <p className="text-xs text-slate-500 font-sans">Articles</p>
        </div>
      </div>

      <Button variant="outline" size="sm" className="mt-5 w-full">
        Follow Author
      </Button>
    </div>
  )
}
