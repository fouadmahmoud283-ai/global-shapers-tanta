import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-arabic'
})

export const metadata: Metadata = {
  title: 'Egyptian Food QR Generator | Global Shapers Tanta Hub',
  description: 'Promoting Egyptian traditional cuisine through QR codes - A Global Shapers Tanta Hub initiative',
  keywords: 'Egyptian food, QR codes, Global Shapers, Tanta, traditional cuisine, Instagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoArabic.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}