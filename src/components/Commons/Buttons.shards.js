// Place all configurations of sharable buttons here

import styled from '@emotion/styled'

export const CounterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border: none;
  transition: all .5s;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
