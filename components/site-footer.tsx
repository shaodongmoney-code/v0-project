import Link from 'next/link'
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import type { Dictionary } from '@/lib/dictionaries'

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: string
}) {
  const base = `/${locale}`

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* 品牌简介 */}
          <div>
            <h3 className="text-lg font-bold text-primary">{dict.brand}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {dict.footer.about}
            </p>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.contactTitle}
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-accent" />
                {dict.contact.office}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${dict.contact.phone}`} className="hover:text-primary">
                  {dict.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${dict.contact.email}`}
                  className="hover:text-primary"
                >
                  {dict.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.followTitle}
            </h4>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-4 inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          {/* 订阅 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.subscribeTitle}
            </h4>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder={dict.footer.emailPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {dict.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>{dict.footer.rights}</p>
          <div className="flex gap-6">
            <Link href={`${base}/privacy`} className="hover:text-primary">
              {dict.footer.privacy}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-primary">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
