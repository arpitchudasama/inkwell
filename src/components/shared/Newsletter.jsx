import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import Button from '../ui/Button'
import { cn } from '../../utils/helpers'

/**
 * Newsletter — email capture section with animated entrance.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent]   = useState(false)
  const [ref, inView]     = useInView(0.15)

  const handleSubmit = () => {
    if (email.trim()) setSent(true)
  }

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-[28px] p-8 md:p-14 my-16',
        'bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700',
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold mb-5">
          ✉️ Newsletter
        </div>

        <h2 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-3">
          Ideas worth reading,<br />delivered weekly.
        </h2>

        <p className="text-indigo-200 text-sm mb-7 font-sans">
          Join 40,000+ curious minds. No spam. Unsubscribe anytime.
        </p>

        {sent ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white font-semibold font-sans">
            🎉 You're in! Check your inbox to confirm.
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              className="
                flex-1 min-w-0 bg-white/15 backdrop-blur-sm
                border border-white/25 rounded-xl px-4 py-3
                text-white placeholder-white/60 text-sm font-sans
                focus:outline-none focus:border-white/60 focus:bg-white/20
                transition-all duration-200
              "
            />
            <Button variant="secondary" onClick={handleSubmit} className="whitespace-nowrap">
              Subscribe →
            </Button>
          </div>
        )}

        <p className="text-indigo-300/70 text-xs mt-4 font-sans">
          Trusted by engineers, designers & founders at 500+ companies.
        </p>
      </div>
    </section>
  )
}
