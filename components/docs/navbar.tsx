'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Moon, Sun, Search, X, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { siteConfig } from '@/config/site'
import { navItems } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { SearchDialog } from '@/components/docs/search/search-dialog'
import { PlaceholderIcon } from '@/components/brand/placeholder-logo'
import { resolveSidebar, type ResolvedSidebarItem } from '@/lib/sidebar'
import { useDocContext } from '@/lib/doc-context'
import { VersionSwitcher } from '@/components/docs/version-switcher'
import { LocaleSwitcher } from '@/components/docs/locale-switcher'

const defaultSidebarItems = resolveSidebar()

function MobileSidebarItems({ items, onNavigate, depth = 0 }: { items: ResolvedSidebarItem[]; onNavigate: () => void; depth?: number }) {
  const pathname = usePathname()

  return (
    <ul className={cn(depth > 0 && 'ml-3 pl-3 border-l border-[var(--border)]')}>
      {items.map((item) => {
        if (item.type === 'category') {
          return (
            <li key={item.label}>
              <MobileSidebarCategory item={item} onNavigate={onNavigate} depth={depth} />
            </li>
          )
        }
        const isActive = item.href && pathname === item.href
        return (
          <li key={item.href || item.label}>
            <Link
              href={item.href || '#'}
              className={cn(
                'block px-3 py-1.5 text-sm rounded-md no-underline transition-colors',
                isActive
                  ? 'text-[var(--primary)] font-semibold'
                  : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
              )}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function MobileSidebarCategory({ item, onNavigate, depth }: { item: ResolvedSidebarItem; onNavigate: () => void; depth: number }) {
  const pathname = usePathname()
  const isSelfActive = item.href && pathname === item.href
  const isChildActive = item.items?.some((child) => child.href && pathname === child.href)
  const [open, setOpen] = useState(!item.collapsed || !!isChildActive || !!isSelfActive)

  return (
    <div className="mb-0.5">
      <div className="flex items-center">
        {item.href ? (
          <Link
            href={item.href}
            className={cn(
              'flex-1 px-3 py-1.5 text-sm font-semibold rounded-md no-underline',
              isSelfActive
                ? 'text-[var(--primary)]'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            )}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'flex-1 text-left px-3 py-1.5 text-sm font-semibold rounded-md',
              'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
            )}
          >
            {item.label}
          </button>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="p-1.5 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          aria-label={open ? 'Collapse' : 'Expand'}
        >
          <ChevronDown size={14} className={cn('transition-transform', open ? '' : '-rotate-90')} />
        </button>
      </div>
      {open && item.items && (
        <MobileSidebarItems items={item.items} onNavigate={onNavigate} depth={depth + 1} />
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { urlPrefix } = useDocContext()

  // Use context-aware sidebar when locale/version prefix is active
  const sidebarItems = urlPrefix
    ? resolveSidebar(undefined, urlPrefix)
    : defaultSidebarItems

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b bg-[var(--background)]"
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="flex h-full items-center px-4 lg:px-6">
          {/* Mobile hamburger */}
          <button
            className="mr-4 lg:hidden p-2 rounded-md hover:bg-[var(--muted)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo + title */}
          <Link href="/" className="flex items-center gap-2 mr-6 text-[var(--foreground)] no-underline">
            {siteConfig.logo.useBuiltIn ? (
              <PlaceholderIcon size={32} />
            ) : siteConfig.logo.navbar ? (
              <img
                src={siteConfig.logo.navbar}
                alt={siteConfig.logo.alt}
                className="h-8 w-auto"
              />
            ) : null}
            <span className="text-lg font-semibold">{siteConfig.title}</span>
          </Link>

          {/* Mobile/tablet utility buttons — visible below lg */}
          <div className="flex items-center gap-1 ml-auto lg:hidden">
            <button
              className="p-2 rounded-md hover:bg-[var(--muted)]"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              className="p-2 rounded-md hover:bg-[var(--muted)]"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map((item) =>
              'items' in item ? (
                <div key={item.label} className="relative">
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      'hover:bg-[var(--muted)] text-[var(--foreground)]'
                    )}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute right-0 top-full mt-1 w-48 rounded-md border bg-[var(--popover)] shadow-lg py-1 z-50">
                      {item.items?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-[var(--popover-foreground)] hover:bg-[var(--muted)] no-underline"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors no-underline',
                    pathname.startsWith(item.href)
                      ? 'text-[var(--primary)]'
                      : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Search */}
            <button
              className="p-2 rounded-md hover:bg-[var(--muted)] ml-2"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Theme toggle */}
            <button
              className="p-2 rounded-md hover:bg-[var(--muted)]"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>

            <VersionSwitcher />
            <LocaleSwitcher />
          </nav>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ top: 'var(--navbar-height)' }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <nav className="relative w-72 h-full bg-[var(--background)] border-r overflow-y-auto p-4">
            {/* Top-level nav */}
            {navItems.map((item) =>
              'items' in item ? (
                <div key={item.label} className="mb-2">
                  <div className="px-3 py-2 text-sm font-semibold text-[var(--muted-foreground)]">
                    {item.label}
                  </div>
                  {item.items?.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-3 py-2 pl-6 text-sm text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md no-underline"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Docs sidebar */}
            <div className="mt-4 pt-4 border-t">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                Documentation
              </div>
              <MobileSidebarItems items={sidebarItems} onNavigate={() => setMobileOpen(false)} />
            </div>

            <div className="flex items-center gap-2 mt-4 px-3">
              <button
                className="p-2 rounded-md hover:bg-[var(--muted)]"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={18} />
              </button>
              <button
                className="p-2 rounded-md hover:bg-[var(--muted)]"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun size={18} className="hidden dark:block" />
                <Moon size={18} className="block dark:hidden" />
              </button>
            </div>
          </nav>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
