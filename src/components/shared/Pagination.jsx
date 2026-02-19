import { cn } from '../../utils/helpers'

/**
 * Pagination — numbered page controls.
 *
 * @param {number}   page     - current page (1-based)
 * @param {number}   total    - total item count
 * @param {number}   perPage  - items per page
 * @param {function} onChange - called with new page number
 */
export default function Pagination({ page, total, perPage, onChange }) {
  const pages = Math.ceil(total / perPage)
  if (pages <= 1) return null

  const btnBase =
    'w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold font-sans transition-all duration-200'

  return (
    <div className="flex items-center gap-1.5" role="navigation" aria-label="Pagination">
      {/* Prev */}
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={cn(
          btnBase,
          'border border-slate-200 text-slate-600',
          'hover:border-indigo-300 hover:text-indigo-600',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-600'
        )}
      >
        ←
      </button>

      {/* Page numbers */}
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-label={`Page ${p}`}
          aria-current={p === page ? 'page' : undefined}
          className={cn(
            btnBase,
            p === page
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
          )}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === pages}
        aria-label="Next page"
        className={cn(
          btnBase,
          'border border-slate-200 text-slate-600',
          'hover:border-indigo-300 hover:text-indigo-600',
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-600'
        )}
      >
        →
      </button>
    </div>
  )
}
