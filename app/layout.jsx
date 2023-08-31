import './globals.css'
import { Inter, Montserrat } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Quill',
  description: 'Writers Block',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
