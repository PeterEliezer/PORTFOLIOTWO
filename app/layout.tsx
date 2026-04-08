import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elitech Digital Services | Muvuzankwaya Peter Eliezer',
  description: 'Your Vision. Our Technology. Professional Website Development, Telegram Bot Development, and Graphic Design services in Rwanda. Affordable, Professional, Reliable.',
  keywords: ['web development', 'telegram bot', 'graphic design', 'rwanda', 'elitech', 'peter eliezer', 'website', 'branding'],
  authors: [{ name: 'Muvuzankwaya Peter Eliezer' }],
  openGraph: {
    title: 'Elitech Digital Services | Muvuzankwaya Peter Eliezer',
    description: 'Your Vision. Our Technology. Professional Website Development, Telegram Bot Development, and Graphic Design services.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
