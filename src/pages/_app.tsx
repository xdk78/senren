import React from 'react'
import Head from 'next/head'
import darkTheme from 'themes/dark'
import lightTheme from 'themes/light'
import globalStyle from 'themes/global'
import { createGlobalStyle, ThemeProvider } from 'utils/styled-components'
import { useDarkMode } from 'hooks/useDarkMode'
import withReduxStore from 'lib/with-redux-store'
import { Provider } from 'react-redux'

const GlobalStyle = createGlobalStyle`${globalStyle}`

function MyApp({ Component, pageProps, store }) {
  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyle />
          <Head>
            <title>Senren</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
              rel="stylesheet"
            ></link>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default withReduxStore(MyApp)
