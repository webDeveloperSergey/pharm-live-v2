import type { Metadata } from 'next'
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
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
