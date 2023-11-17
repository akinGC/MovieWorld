import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../component/Header'
import Provider from '../component/utilities/Provider'
import NavBar from '../component/NavBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB',
  description: 'Find the right Movie',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Provider>
          <Header/>
          <NavBar/>
          {children}
       
          </Provider>

      </body>
    </html>
  )
}
