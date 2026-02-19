import { useState } from 'react'
import { COMMENTS } from '../../data/blogs'
import Avatar from '../ui/Avatar'
import Button from '../ui/Button'
import { cn } from '../../utils/helpers'

/**
 * CommentSection — displays comments and allows new ones to be added.
 */
export default function CommentSection() {
  const [comments, setComments] = useState(COMMENTS)
  const [text, setText]         = useState('')
  const [liked, setLiked]       = useState({})

  const handleSubmit = () => {
    if (!text.trim()) return
    setComments((prev) => [
      {
        id: Date.now(),
        author: 'You',
        avatar: 'YO',
        date: 'Just now',
        text: text.trim(),
        likes: 0,
      },
      ...prev,
    ])
    setText('')
  }

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="mt-12 pt-10 border-t border-slate-100">
      <h3 className="font-black text-xl text-slate-900 mb-6 font-sans">
        Discussion ({comments.length})
      </h3>

      {/* Comment input */}
      <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 mb-8">
        <textarea
          rows={3}
          placeholder="Share your thoughts…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full bg-transparent text-sm text-slate-700 placeholder-slate-400
            resize-none focus:outline-none font-sans leading-relaxed
          "
        />
        <div className="flex justify-end mt-3 pt-3 border-t border-slate-200">
          <Button size="sm" onClick={handleSubmit}>
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comment list */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3.5">
            <Avatar initials={c.avatar} size="md" color="#6366f1" />

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-bold text-sm text-slate-900 font-sans">{c.author}</span>
                <span className="text-xs text-slate-400 font-sans">{c.date}</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">{c.text}</p>

              {/* Like button */}
              <button
                onClick={() => toggleLike(c.id)}
                className={cn(
                  'mt-2 flex items-center gap-1 text-xs transition-colors font-sans',
                  liked[c.id] ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                )}
              >
                {liked[c.id] ? '♥' : '♡'} {c.likes + (liked[c.id] ? 1 : 0)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
