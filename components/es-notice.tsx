'use client'

import { usePathname } from 'next/navigation'

// 西语版仅首页完整翻译。其余页面回退到英文内容，
// 并在顶部显示浅灰色提示条，告知西语内容即将推出。
export function EsNotice({ locale }: { locale: string }) {
  const pathname = usePathname()

  if (locale !== 'es') return null

  // 首页（/es 或 /es/）不显示提示条
  const isHome = pathname === '/es' || pathname === '/es/'
  if (isHome) return null

  return (
    <div
      role="status"
      className="border-b border-border bg-muted px-6 py-2.5 text-center text-sm text-muted-foreground"
    >
      Contenido en español próximamente. / Spanish content coming soon.
    </div>
  )
}
