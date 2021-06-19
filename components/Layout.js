import Head from 'next/head'
import { Navigation } from './menu/Navigation'
import Footer from './Footer'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>El Majad Aromatic - {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navigation />
      </header>

      {children}

      <Footer />
    </>
  )
}
