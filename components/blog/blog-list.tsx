'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Dictionary } from '@/lib/dictionaries'
import { formatDate } from '@/lib/site'

export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  category: 'compliance' | 'hiring' | 'expansion'
  date: string
  author: string
  readingMinutes: number
}

const POSTS_PER_PAGE = 6
const CATEGORY_KEYS = ['all', 'compliance', 'hiring', 'expansion'] as const

export function BlogList({
  posts,
  locale,
  t,
}: {
  posts: PostMeta[]
  locale: string
  t: Dictionary['blog']
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof CATEGORY_KEYS)[number]>('all')
  const [page, setPage] = useState(1)

  const base = `/${locale}`
  const localizedTitle = (p: PostMeta) => t.articleTitles[p.slug] ?? p.title

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category
      const matchesQuery =
        q === '' ||
        localizedTitle(p).toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, query, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  // 筛选或搜索变化时回到第一页
  function onFilterChange(next: () => void) {
    next()
    setPage(1)
  }

  return (
    <div className="flex flex-col gap-8">
      {/* 搜索 + 分类筛选 */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onFilterChange(() => setQuery(e.target.value))}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={t.categoriesLabel}
        >
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => onFilterChange(() => setCategory(key))}
              aria-pressed={category === key}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                category === key
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground/80 hover:border-accent hover:text-accent',
              )}
            >
              {t.categories[key]}
            </button>
          ))}
        </div>
      </div>

      {/* 文章网格 */}
      {visible.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card px-6 py-16 text-center text-muted-foreground">
          {t.noResults}
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
                  {t.categories[p.category]}
                </span>
                <span>
                  {p.readingMinutes} {t.minRead}
                </span>
              </div>
              <h2 className="mt-4 text-balance text-lg font-bold leading-snug text-primary">
                <Link
                  href={`${base}/blog/${p.slug}`}
                  className="outline-none after:absolute hover:underline"
                >
                  {localizedTitle(p)}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{formatDate(p.date, locale)}</span>
                <Link
                  href={`${base}/blog/${p.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-accent hover:gap-2 transition-all"
                >
                  {t.readMore}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 分页 */}
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            {t.prev}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              aria-current={currentPage === n ? 'page' : undefined}
              className={cn(
                'size-9 rounded-full border text-sm font-medium transition-colors',
                currentPage === n
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground/80 hover:border-accent',
              )}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.next}
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  )
}
