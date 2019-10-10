import styled   from '@emotion/styled'
import { down } from 'styled-breakpoints'

export const PositionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  margin-top: 15px;
`

export const MainTitle = styled.h3`
  font-size: ${({ theme }) => theme.contentSize.header};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
  transition: color .5s;
  ${down('lg')} {
    color: ${({ theme }) => theme.colors.secondary};
  }
`
export const WhatsNew = styled.ul`
  list-style-type: circle;
  font-size: ${({ theme }) => theme.contentSize.list};
  margin-bottom: 15px;
  color: ${({ toggled, theme }) => toggled ? theme.colors.primary : theme.colors.defaultBlack};
`

export const ListElement = styled.li`
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.secondary};
`
