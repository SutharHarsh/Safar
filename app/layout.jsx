import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Travel App',
  description: 'Traveling UI/UX site for camping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
       <main className='relative overflow-hidden'>
       {children}
       </main>
        <Footer/>
        </body>
    </html>
  )
}
