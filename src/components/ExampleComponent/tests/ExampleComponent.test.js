import React             from 'react'
import { render }        from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import ExampleComponent  from '../index'
import theme             from '../../../shared/theme'

describe('ExampleComponent', () => {
  it('component renders correctly', () => {

    const component = render(
      <ThemeProvider theme={theme}>
        <ExampleComponent />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
