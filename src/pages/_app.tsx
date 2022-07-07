import Head from 'next/head'
import darkTheme from 'themes/dark'
import lightTheme from 'themes/light'
import globalStyle from 'themes/global'
import { createGlobalStyle, ThemeProvider } from 'utils/styled-components'
import { useDarkMode } from 'hooks/useDarkMode'
import withReduxStore from 'lib/with-redux-store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { Store } from 'redux'
const GlobalStyle = createGlobalStyle`${globalStyle}`

type MyAppProps = AppProps & { store: Store }

function MyApp({ Component, pageProps, store }: MyAppProps) {
  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyle />
          <Head>
            <title>Senren</title>
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

export default withReduxStore(MyApp)
