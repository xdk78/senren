import React from 'react'
import Head from 'next/head'
import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'
import globalStyle from '../themes/global'
import { createGlobalStyle, ThemeProvider } from '../styled-components'
import { useDarkMode } from '../hooks/useDarkMode'

const GlobalStyle = createGlobalStyle`${globalStyle}`

function MyApp({ Component, pageProps }) {
  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Head>
          <title>Senren</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default MyApp
