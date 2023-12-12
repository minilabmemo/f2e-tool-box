import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'F2E Tool Box',
  description: 'Generated by Create Next App ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <div className={inter.className}>{children}</div>
    </div>
  )
}
