import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'
import { LanguageProvider } from './i18n-context'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Galeria & Enmarcados del Bajio',
  description: 'Custom framing, large-scale frames, and artistic mounting.',
  icons: {
    icon: '/assets/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

