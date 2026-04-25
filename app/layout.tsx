import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Press_Start_2P, EB_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { Navigation } from './navigation'
import { ThemeProvider } from '@/components/theme-provider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://suddhu.github.io/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Sudharshan Suresh',
    template: '%s | Sudharshan Suresh'
  },
  description: 'Sudharshan Suresh is a research scientist at Boston Dynamics, working on machine learning for the Atlas humanoid robot.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Sudharshan Suresh',
    description: 'Research scientist at Boston Dynamics, working on machine learning for the Atlas humanoid robot.',
    url: 'https://suddhu.github.io/',
    siteName: 'Sudharshan Suresh',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Sudharshan Suresh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudharshan Suresh',
    description: 'Research scientist at Boston Dynamics, working on machine learning for the Atlas humanoid robot.',
    creator: '@suddhus',
    images: ['/profile.png'],
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: '400',
})

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${pressStart2P.variable} ${ebGaramond.variable} tracking-tight antialiased bg-[#FBFBF8] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="flex min-h-screen w-full flex-col garamond-body">
            <Navigation />
            <div className="relative mx-auto w-full max-w-screen-md flex-1 px-4 pt-16">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
