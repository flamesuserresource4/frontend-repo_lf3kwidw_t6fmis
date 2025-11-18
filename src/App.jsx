import React, { useEffect, useState } from 'react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [status, setStatus] = useState('Checking backend...')
  const [hello, setHello] = useState('')

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`).then(async (r) => {
      if (!r.ok) throw new Error('Backend not reachable')
      const data = await r.json()
      setHello(data.message)
      setStatus('Backend connected!')
    }).catch(() => {
      setStatus('Backend not reachable')
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-4 text-center">
        <h1 className="text-3xl font-semibold">Flames Vibe Starter</h1>
        <p className="text-slate-300">{status}</p>
        {hello && <p className="text-emerald-400">{hello}</p>}
      </div>
    </div>
  )
}
