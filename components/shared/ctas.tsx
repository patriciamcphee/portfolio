'use client'

import { siteConfig } from '@/config/site'
import { Bell } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export function SubscribeCTA() {
  const subscribe = (siteConfig as any).subscribe
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  if (!subscribe?.enabled || !subscribe?.url) return null

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    try {
      const res = await fetch(subscribe.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Bell className="text-blue-400" size={20} />
        <h3 className="text-xl font-bold text-white m-0">Never Miss an Update</h3>
      </div>
      <p className="text-slate-300 mb-6 max-w-md mx-auto">
        Get notified when we ship new features and improvements. Subscribe to our release notes.
      </p>
      {status === 'success' ? (
        <p className="text-green-400 font-semibold">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
