import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'

const sg = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'GH STORE || ghstore.com',
  description: 'A web app created for people to make easy and solve their problems.',
  keywords: [
    "ghazna",
    "gh",
    "problem",
    "jobs",
    "job",
    "information"
  ],
  authors: [
    {
      name: "Ghazna",
      url: "https://ghazna.netlify.app",
    },
  ],
  creator: "GHAZNA",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={sg.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
