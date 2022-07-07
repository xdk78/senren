import { createGlobalStyle, ThemeProvider } from 'utils/styled-components'
import { Provider } from 'react-redux'
import withReduxStore from 'lib/with-redux-store'
import globalStyle from 'themes/global'
import lightTheme from 'themes/light'
import { Store } from 'redux'
import type { NextRouter } from 'next/router'
const GlobalStyle = createGlobalStyle`${globalStyle}`

type AllTheProvidersProps = {
  children: React.ReactNode
  store?: Store
  route?: Partial<NextRouter>
}

const AllTheProviders = ({ children, store }: AllTheProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default withReduxStore(AllTheProviders)
