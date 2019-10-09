import React             from 'react'
import { Global, css }   from '@emotion/core'
import emotionReset      from 'emotion-reset'
import { ThemeProvider } from 'emotion-theming'
import { hot }           from 'react-hot-loader'
import theme             from '../shared/theme'
import global            from '../shared/global'

import ExampleComponent from './ExampleComponent/ExampleComponentView'

const App = () => {
  return (
    <>
      <Global styles={css`
          ${emotionReset}
          ${global}
        `}
      />
      <ThemeProvider theme={theme}>
        <ExampleComponent />
      </ThemeProvider>
    </>
  )
}

export default hot(module)(App)
