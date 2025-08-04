// app/layout.js (or RootLayout.jsx depending on your file structure)
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata = {
  title: 'Safar - Explore the World with Us',
  description: 'Discover beautiful destinations, camping spots, and travel experiences. Start your adventure with Safar.',
  keywords: 'travel, camping, adventure, UI/UX travel, explore, Safar',
  authors: [{ name: 'Safar Team', url: 'https://safar.example.com' }],
  openGraph: {
    title: 'Safar - Your Travel Companion',
    description: 'Join Safar to explore stunning travel destinations and camping adventures around the world.',
    url: 'https://safar.example.com',
    siteName: 'Safar',
    images: [
      {
        url: 'https://safar.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Safar Camping Adventure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://safar.example.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical */}
        <link rel="canonical" href="https://safar.example.com" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-white text-black antialiased">
        <header>
          <Navbar />
        </header>
        <main className="relative overflow-hidden">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
