import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// 博客内容目录（项目根下的 content/blog）。文章以 .mdx 编写，含 frontmatter。
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type BlogCategory = 'compliance' | 'hiring' | 'expansion'

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt: string
  category: BlogCategory
  author: string
  lang: string
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  content: string
  readingMinutes: number
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

function parseFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    content,
    readingMinutes: estimateReadingMinutes(content),
    ...(data as BlogFrontmatter),
  }
}

// 读取全部文章，按日期倒序排列（最新在前）。
// 可选 locale：传入 'zh' 仅保留中文文章；传入 'en' 保留英文文章或未标注 lang 的旧文章；
// 其他/不传则返回全部，保持向后兼容。
export function getAllPosts(locale?: string): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parseFile)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))

  if (locale === 'zh') {
    return posts.filter((p) => p.lang === 'zh')
  }
  if (locale === 'en') {
    return posts.filter((p) => p.lang === 'en' || !p.lang)
  }
  return posts
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null
}

// 相关文章：优先同分类，其次按最新补足，最多返回 limit 篇。
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const all = getAllPosts()
  const current = all.find((p) => p.slug === slug)
  if (!current) return all.slice(0, limit)
  const sameCategory = all.filter(
    (p) => p.slug !== slug && p.category === current.category,
  )
  const others = all.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
