import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { getDictionary } from '@/lib/dictionaries'

export const metadata: Metadata = {
  title: 'Blog — WholeVantage Advisory',
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const b = dict.blog

  return (
    <>
      <PageHeader title={b.title} subtitle={b.subtitle} />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
            <FileText className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-primary">
            {b.comingSoon}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            {b.comingSoonText}
          </p>
        </div>
      </section>
    </>
  )
}
