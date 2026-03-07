'use client'

import { useEffect, useRef, useState } from 'react'

export function MermaidRenderer({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function render() {
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
      })

      if (cancelled || !containerRef.current) return

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg } = await mermaid.render(id, chart)
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
          setRendered(true)
        }
      } catch (err) {
        console.error('Mermaid render error:', err)
        if (!cancelled && containerRef.current) {
          containerRef.current.textContent = chart
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  useEffect(() => {
    if (!rendered || !containerRef.current) return

    let pz: any
    import('panzoom').then((mod) => {
      const panzoom = mod.default
      const svgEl = containerRef.current?.querySelector('svg')
      if (svgEl) {
        pz = panzoom(svgEl, {
          maxZoom: 5,
          minZoom: 0.5,
          smoothScroll: false,
        })
      }
    })

    return () => { pz?.dispose() }
  }, [rendered])

  return (
    <div className="my-6 overflow-hidden rounded-lg border p-4 bg-[var(--card)]">
      <div ref={containerRef} className="flex justify-center" />
    </div>
  )
}
