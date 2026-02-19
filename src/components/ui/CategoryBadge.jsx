import { cn } from '../../utils/helpers'
import { CATEGORY_STYLES } from '../../data/categories'

/**
 * CategoryBadge — coloured pill for blog categories.
 *
 * @param {string}   category - category name
 * @param {boolean}  active   - shows filled indigo style when active
 * @param {function} onClick  - makes it interactive; pass undefined for display-only
 * @param {string}   size     - 'sm' | 'md'
 */
export default function CategoryBadge({
  category,
  active = false,
  onClick,
  size = 'sm',
}) {
  const style = CATEGORY_STYLES[category] || CATEGORY_STYLES['All']
  const isClickable = typeof onClick === 'function'

  return (
    <span
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? (e) => e.key === 'Enter' && onClick() : undefined}
      className={cn(
        'inline-flex items-center rounded-full border font-semibold font-sans transition-all duration-200',
        size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1 text-xs',
        active
          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
          : `${style.bg} ${style.text} ${style.border} ${style.hover}`,
        isClickable && 'cursor-pointer hover:-translate-y-px select-none'
      )}
    >
      {category}
    </span>
  )
}
