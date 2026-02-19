import { useState } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const CONTACTS = [
  { icon: '📧', label: 'Email',    value: 'hello@inkwell.io'  },
  { icon: '🐦', label: 'Twitter',  value: '@inkwellhq'        },
  { icon: '💼', label: 'LinkedIn', value: 'inkwellhq'         },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-28 pb-16">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-display font-black text-5xl text-slate-900 mb-3">Get in touch</h1>
        <p className="text-slate-500 text-lg font-sans">
          Questions, pitches, or just want to say hi. We read everything.
        </p>
      </div>

      {/* Form card */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-card p-8 md:p-10 mb-6">
        {sent ? (
          <div className="text-center py-10">
            <p className="text-5xl mb-4">✉️</p>
            <h2 className="font-black text-2xl text-slate-900 mb-2 font-sans">Message sent!</h2>
            <p className="text-slate-500 font-sans mb-6">
              We'll get back to you within 2 business days.
            </p>
            <Button onClick={() => setSent(false)}>Send another</Button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Name *" placeholder="Your full name"    value={form.name}    onChange={set('name')}    />
              <Input label="Email *" type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
            </div>

            <Input label="Subject" placeholder="What's this about?" value={form.subject} onChange={set('subject')} />

            {/* Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 font-sans">Message *</label>
              <textarea
                rows={5}
                placeholder="Your message…"
                value={form.message}
                onChange={set('message')}
                className="
                  w-full px-4 py-3 bg-white border border-slate-200 rounded-xl
                  text-sm text-slate-800 placeholder-slate-400 font-sans
                  focus:outline-none focus:border-indigo-400 focus:ring-[3px] focus:ring-indigo-100
                  hover:border-slate-300 resize-none transition-all duration-200
                "
              />
            </div>

            <Button size="lg" className="w-full" onClick={handleSubmit}>
              Send Message →
            </Button>
          </div>
        )}
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-3 gap-4">
        {CONTACTS.map(({ icon, label, value }) => (
          <div
            key={label}
            className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <p className="text-2xl mb-2">{icon}</p>
            <p className="font-bold text-slate-900 text-sm font-sans">{label}</p>
            <p className="text-slate-500 text-xs mt-0.5 font-sans">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
