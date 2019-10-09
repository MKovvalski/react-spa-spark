import React, { useState } from 'react'

const ExampleComponent = () => {

  const [count, setCount] = useState(0)

  // TODO: add state test
  // add base methods for shallow and so forth
  // test conditional rendering
  return (
    <div className='example-component-class'>
      <h2>I am an Example Component</h2>
      <div>Build to test and showcase capabilities of jest and enzyme</div>
      <div
        className='example-component-class__button'
        onClick={() => setCount(count + 1)}
      >
        Up the Counter!
      </div>
      <div>
        Display number of counter clicks:
        <span>{count}</span>
      </div>
    </div>
  )
}

export default ExampleComponent
