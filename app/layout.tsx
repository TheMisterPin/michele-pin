/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/fonts.css'

export const metadata: Metadata = {
  title: 'Michele Pin',
  description: 'My Personal Developer Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
