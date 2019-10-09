import React             from 'react'
import { render, mount } from 'enzyme'
import ExampleComponent  from '../index'

describe('ExampleComponent', () => {

  const component = mount(<ExampleComponent />)

  it('renders component with counter set to 0', () => {
    expect(component.find('span').text()).toEqual('0')
  })

  it('responds to click action with counter update', () => {
    component
      .find('.example-component-class__button')
      .simulate('click')

    expect(component.find('span').text()).toEqual('1')
  })

  it('component renders correctly', () => {

    const component = render(<ExampleComponent />)
    expect(component).toMatchSnapshot()
  })
})
