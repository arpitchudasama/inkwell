import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        {/* 404 with emoji overlay */}
        <div className="relative inline-block mb-8 select-none">
          <p
            className="font-display font-black text-slate-100 leading-none"
            style={{ fontSize: 'clamp(100px, 20vw, 180px)' }}
          >
            404
          </p>
          <p className="absolute inset-0 flex items-center justify-center"
             style={{ fontSize: 'clamp(48px, 10vw, 80px)' }}>
            🌊
          </p>
        </div>

        <h1 className="font-black text-3xl text-slate-900 mb-3 font-sans">Lost at sea</h1>
        <p className="text-slate-500 text-lg mb-8 max-w-xs mx-auto leading-relaxed font-sans">
          The page you're looking for has drifted away. Let's get you back to shore.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
          <Link to="/blog">
            <Button variant="outline">Browse Articles</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
