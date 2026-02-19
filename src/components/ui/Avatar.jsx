import { cn } from '../../utils/helpers'

const SIZES = {
  xs:  'w-6 h-6 text-[10px]',
  sm:  'w-8 h-8 text-xs',
  md:  'w-10 h-10 text-sm',
  lg:  'w-12 h-12 text-base',
  xl:  'w-16 h-16 text-xl',
  '2xl': 'w-20 h-20 text-2xl',
}

/**
 * Avatar component — gradient circle with initials.
 *
 * @param {string} initials  - 2-letter initials shown inside
 * @param {string} size      - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @param {string} color     - CSS hex color for the gradient base
 * @param {string} className
 */
export default function Avatar({ initials, size = 'md', color = '#6366f1', className = '' }) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 font-sans',
        SIZES[size],
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)`,
      }}
    >
      {initials}
    </div>
  )
}
