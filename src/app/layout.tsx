import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Botiksha.in - Mobile & Web Development Services with AI Integration',
  description:
    'Professional freelance services specializing in mobile app development, web development, and AI integration. Transform your ideas into powerful digital solutions.',
  keywords:
    'mobile development, web development, AI integration, freelance developer, React Native, Next.js, artificial intelligence',
  authors: [{ name: 'Botiksha' }],
  creator: 'Botiksha',
  publisher: 'Botiksha',
  robots: 'index, follow',
  openGraph: {
    title: 'Botiksha.in - Mobile & Web Development Services',
    description:
      'Professional freelance services specializing in mobile app development, web development, and AI integration.',
    url: 'https://botiksha.in',
    siteName: 'Botiksha.in',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botiksha.in - Mobile & Web Development Services',
    description:
      'Professional freelance services specializing in mobile app development, web development, and AI integration.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  )
}
