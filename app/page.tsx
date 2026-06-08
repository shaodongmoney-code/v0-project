import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n'

// 根路径直接跳转到默认语言（英文）。未来开启多语言后可在此做浏览器语言检测。
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
