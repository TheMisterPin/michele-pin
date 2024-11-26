/* eslint-disable camelcase */
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

import { cn } from '@/lib/utils'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={cn('min-h-screen relative antialiased tracking-wider')}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
