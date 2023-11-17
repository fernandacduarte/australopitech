import localFont from 'next/font/local'
import './globals.css'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  // subsets: ['latin'],
  // variable: '--font-montserrat',
  // display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const agrandirGrandHeavy = localFont({
  src: './fonts/Agrandir-GrandHeavy.otf',
  variable: '--font-agrandir-grand-bold',
  display: 'swap',
})

export const metadata = {
  title: 'Australopitech',
  description: 'Australopitech web3 solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${agrandirGrandHeavy.variable}`}>
      <body>{children}</body>
    </html>
  )
}


 