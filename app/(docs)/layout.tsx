'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/docs/navbar'
import { Sidebar } from '@/components/docs/sidebar'
import { Footer } from '@/components/docs/footer'
import { FloatingActions } from '@/app/components/FloatingActions'

const NO_SIDEBAR_ROUTES = ['/', '/about', '/contact']

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const showSidebar = !NO_SIDEBAR_ROUTES.includes(normalizedPath)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        {showSidebar && (
          <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        )}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
      <FloatingActions />
    </div>
  )
}
