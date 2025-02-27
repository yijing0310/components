// import localFont from 'next/font/local'
import '@/Styles/globals.css'
import Header from './_components/header'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export const metadata = {
  title: 'GYM',
  description: '我在，往GYM步的路上邁進',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body>
      <Header/>
        {children}
      </body>
    </html>
  )
}
