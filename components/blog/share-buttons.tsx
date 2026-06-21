'use client'

import { useState } from 'react'
import { Check, Link2, Mail, Share2 } from 'lucide-react'

// 文章分享按钮：复制链接、LinkedIn、邮件。客户端组件，使用 window/navigator。
export function ShareButtons({
  title,
  label,
}: {
  title: string
  label: string
}) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 忽略剪贴板错误（如权限不足）
    }
  }

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`

  const btn =
    'inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-accent hover:text-accent'

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <button onClick={copyLink} className={btn} aria-label="Copy link">
          {copied ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Link2 className="size-4" aria-hidden="true" />
          )}
        </button>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on LinkedIn"
        >
          <Share2 className="size-4" aria-hidden="true" />
        </a>
        <a href={mailto} className={btn} aria-label="Share by email">
          <Mail className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
