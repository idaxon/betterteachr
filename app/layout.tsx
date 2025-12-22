import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BetterTechr',
  description: 'Your Academic BetterTechr',
  generator: 'v0.dev',
}

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RunningBanner } from '@/components/running-banner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <RunningBanner />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
