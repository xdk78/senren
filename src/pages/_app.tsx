import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import darkTheme from '../themes/dark'
import globalStyle from '../themes/global'
import { createGlobalStyle, ThemeProvider } from '../styled-components'

const GlobalStyle = createGlobalStyle`${globalStyle}`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={darkTheme}>
        <>
          <GlobalStyle />
          <Head>
            <title>Senren</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}

export default MyApp
