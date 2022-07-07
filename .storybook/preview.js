import * as NextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider, createGlobalStyle } from '../src/utils/styled-components'
import light from '../src/themes/light'
import Style from '../src/themes/global'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

const GlobalStyle = createGlobalStyle`${Style}`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
