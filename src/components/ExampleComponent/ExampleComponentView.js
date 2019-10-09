import React, { useState } from 'react'
import {
  MainTitle,
  PositionWrapper,
  WhatsNew,
  ListElement
}                          from './ExampleComponent.shards'
import { CounterButton }   from '../Commons/Buttons.shards'

const ExampleComponent = () => {

  const [toggled, toggleColor] = useState(false)
  return (
    <PositionWrapper>
      <MainTitle>
        Aloha and welcome to React SPA spark!
      </MainTitle>
      <WhatsNew toggled={toggled}>
        <ListElement>emotion replaced sass</ListElement>
        <ListElement>stylelint replaced sass-lint</ListElement>
        <ListElement>removed code overhead from webpack configs</ListElement>
        <ListElement>created a example file structure for emotion</ListElement>
      </WhatsNew>
      <CounterButton onClick={() => toggleColor(!toggled)}>
        I am a common button
      </CounterButton>
    </PositionWrapper>
  )
}

export default ExampleComponent
