import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Nav from './nav'
config.autoAddCss = false

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Quill',
  description: 'Writers Block',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ montserrat.className } flex max-h-screen flex-col items-center w-full transition-all` }>
        <Nav />
        {children}
      </body>
    </html>
  )
}
