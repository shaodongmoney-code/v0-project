import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getDictionary } from '@/lib/dictionaries'
import { locales } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!(locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter dict={dict} locale={locale} />
    </div>
  )
}
