/**
 * SearchBar — text input with search icon, used in listing page.
 */
export default function SearchBar({ value, onChange, placeholder = 'Search articles…' }) {
  return (
    <div className="relative">
      {/* Search icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full pl-11 pr-4 py-3
          bg-white border border-slate-200 rounded-2xl
          text-sm text-slate-800 placeholder-slate-400 font-sans
          shadow-card transition-all duration-200
          focus:outline-none focus:border-indigo-400 focus:ring-[3px] focus:ring-indigo-100
          hover:border-slate-300
        "
      />
    </div>
  )
}
