import { cn } from '../../utils/helpers'

/**
 * Reusable Input component with optional label and leading icon.
 *
 * @param {string}   label       - visible label above the input
 * @param {string}   type        - HTML input type
 * @param {string}   placeholder
 * @param {string}   value
 * @param {function} onChange
 * @param {node}     icon        - React node rendered on the left inside the input
 * @param {string}   className   - extra classes for the wrapper div
 */
export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  className = '',
  ...props
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label className="text-sm font-semibold text-slate-700 font-sans">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 flex items-center pointer-events-none">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            'w-full bg-white border border-slate-200 rounded-xl text-sm text-slate-800',
            'placeholder-slate-400 font-sans transition-all duration-200',
            'focus:outline-none focus:border-indigo-400 focus:ring-[3px] focus:ring-indigo-100',
            'hover:border-slate-300',
            icon ? 'pl-10 pr-4 py-3' : 'px-4 py-3'
          )}
          {...props}
        />
      </div>
    </div>
  )
}
