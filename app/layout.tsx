import Header from '@/components/Header/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import LoginModal from '@/components/Modals/LoginModal'
import CallMeModal from '@/components/Modals/CallMeModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="body">
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <LoginModal />
        <CallMeModal />
      </body>
    </html>
  )
}
