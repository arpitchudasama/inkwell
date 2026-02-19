import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

function GoogleButton() {
  return (
    <button className="
      w-full flex items-center justify-center gap-3 px-4 py-3
      bg-white border border-slate-200 rounded-xl
      text-sm font-semibold text-slate-700 font-sans
      hover:bg-slate-50 hover:border-slate-300 transition-all duration-200
    ">
      <span className="text-lg font-bold">G</span>
      Continue with Google
    </button>
  )
}

function Divider() {
  return (
    <div className="relative flex items-center gap-3">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs text-slate-400 font-sans">or</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  )
}

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-slate-50 to-violet-50/40">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="font-black text-[26px] tracking-tight">
            <span className="gradient-text">Inkwell</span>
            <span className="text-slate-900">.</span>
          </Link>
          <h1 className="font-black text-2xl text-slate-900 mt-6 mb-1 font-sans">Create your account</h1>
          <p className="text-slate-500 text-sm font-sans">Join 40,000+ curious readers</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-card p-8">
          <div className="space-y-4">
            <GoogleButton />
            <Divider />

            <Input
              label="Full Name"
              placeholder="Ada Lovelace"
              value={form.name}
              onChange={set('name')}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={set('email')}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={set('password')}
            />

            <Button size="lg" className="w-full mt-2">
              Create Account →
            </Button>

            <p className="text-center text-[11px] text-slate-400 font-sans">
              By signing up you agree to our{' '}
              <span className="text-indigo-500 cursor-pointer">Terms</span>
              {' '}and{' '}
              <span className="text-indigo-500 cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6 font-sans">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
