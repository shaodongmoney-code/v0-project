'use server'

import { Resend } from 'resend'

export type ContactState = {
  ok: boolean
  error?: string
}

// 留言表单提交处理：通过 Resend 把内容发到企业 Gmail 邮箱。
export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const subject = String(formData.get('subject') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // 基本校验
  if (!name || !email || !message) {
    return { ok: false, error: 'missing' }
  }
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { ok: false, error: 'invalid_email' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.log('[v0] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env var')
    return { ok: false, error: 'config' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      // 在 Resend 验证你的域名后，可改成 no-reply@wholevantage.com
      from: 'WholeVantage Website <onboarding@resend.dev>',
      to: [to],
      replyTo: email,
      subject: `[Website Inquiry] ${subject || 'New message'} — from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || '(none)'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.log('[v0] Resend send error:', error)
      return { ok: false, error: 'send' }
    }
    return { ok: true }
  } catch (err) {
    console.log('[v0] Contact action exception:', err)
    return { ok: false, error: 'send' }
  }
}
