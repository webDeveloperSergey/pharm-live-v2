import type { Metadata } from 'next'

import Header from '$components/Header'
import NavBar from '$components/NavBar'
import './globals.css'

export const metadata: Metadata = {
  description: 'Pharm Live',
  title: 'Pharm Live',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <div className='flex'>
          <NavBar />
          <div className='w-full'>
            <Header />
            <div className='w-full h-screen p-24 bg-[#F8F8F8]'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
