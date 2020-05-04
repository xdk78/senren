import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider, createGlobalStyle } from '../src/styled-components'

import light from '../src/themes/light'
import Style from '../src/themes/global'
// automatically import all files ending in *.stories.tsx
configure(
  require.context('../src/components', true, /\.stories\.tsx?$/),
  module
)

const GlobalStyle = createGlobalStyle`
${Style}
`

addDecorator((story) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))
