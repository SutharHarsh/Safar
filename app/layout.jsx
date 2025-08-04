import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Safar - Your Travel Companion',
  description: 'Discover top travel destinations and camping adventures. Start your journey with Safar’s stunning UI/UX experience.',
  keywords: [
    'travel website',
    'camping spots',
    'travel UI design',
    'adventure travel',
    'nature trips',
    'Safar travel platform'
  ],
  authors: [{ name: 'Safar Team', url: 'https://safar.example.com' }],
  creator: 'Safar Team',
  publisher: 'Safar',
  openGraph: {
    title: 'Safar - Explore the World With Style',
    description: 'Plan your dream trip with Safar. Explore curated camping sites and travel experiences.',
    url: 'https://safar.example.com',
    siteName: 'Safar',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://safar.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore camping adventures with Safar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safar - Discover Camping and Travel Destinations',
    description: 'Explore beautiful locations with Safar’s immersive UI/UX travel experience.',
    creator: '@safar_travel',
    images: ['https://safar.example.com/twitter-image.jpg'],
  },
  metadataBase: new URL('https://safar.example.com'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  category: 'Travel',
  applicationName: 'Safar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Canonical */}
        <link rel="canonical" href="https://safar.example.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0a0a0a" />

        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Safar" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Schema.org (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Safar",
          "url": "https://safar.example.com",
          "logo": "https://safar.example.com/logo.png",
          "sameAs": [
            "https://twitter.com/safar_travel",
            "https://instagram.com/safar.travel",
            "https://facebook.com/safartravel"
          ]
        })}} />
      </head>

      <body className="bg-white text-black antialiased">
        <header>
          <Navbar />
        </header>

        <main className="relative overflow-hidden min-h-screen">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
