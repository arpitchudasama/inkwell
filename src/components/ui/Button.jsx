import { cn } from '../../utils/helpers'

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-glow hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)]',
  secondary:
    'bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25',
  outline:
    'bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/60',
  ghost:
    'bg-transparent text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70',
  dark:
    'bg-slate-900 text-white hover:bg-slate-800',
}

const SIZES = {
  sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-[15px] rounded-xl gap-2.5',
}

/**
 * Reusable Button component.
 *
 * @param {string}   variant  - 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
 * @param {string}   size     - 'sm' | 'md' | 'lg'
 * @param {string}   type     - HTML button type attribute
 * @param {string}   className - extra Tailwind classes
 * @param {function} onClick
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center font-semibold font-sans',
        'transition-all duration-200 select-none cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
        'hover:-translate-y-0.5 active:translate-y-0',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
