// 站点级常量：用于 hreflang、sitemap 等绝对 URL 生成。
// 部署后可通过 NEXT_PUBLIC_SITE_URL 覆盖为真实域名。
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wholevantage.com'
).replace(/\/$/, '')

// 应用语言 → BCP-47 标签（用于日期本地化与 hreflang）。
export const bcp47: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  de: 'de-DE',
}

export function formatDate(date: string, locale: string): string {
  // 固定 timeZone 为 UTC：日期字符串（如 "2026-06-10"）按 UTC 午夜解析，
  // 统一时区可保证服务端与客户端格式化结果一致，避免 hydration 不匹配。
  return new Intl.DateTimeFormat(bcp47[locale] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}
