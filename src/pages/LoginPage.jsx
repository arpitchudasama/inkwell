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

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-slate-50 to-indigo-50/40">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="font-black text-[26px] tracking-tight">
            <span className="gradient-text">Inkwell</span>
            <span className="text-slate-900">.</span>
          </Link>
          <h1 className="font-black text-2xl text-slate-900 mt-6 mb-1 font-sans">Welcome back</h1>
          <p className="text-slate-500 text-sm font-sans">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-card p-8">
          <div className="space-y-4">
            <GoogleButton />
            <Divider />

            <Input
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700 transition-colors font-sans text-left">
              Forgot password?
            </button>

            <Button size="lg" className="w-full mt-2">
              Sign In →
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6 font-sans">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  )
}
