import styled, { css } from 'utils/styled-components'

export const StyledVideoWrapper = styled.div`
  display: grid;
  height: 600px;
  @media (max-width: 900px) {
    height: 300px;
  }
`

export const StyledLink = styled.a<{ bold? }>`
  color: white;
  text-decoration: none;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-size: 18px;
    `};
  span {
    font-weight: normal;
  }
`

export const StyledButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
`

export const StyledCenterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const StyledGenereWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const StyledGenereItem = styled.p`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 12px;
  color: ${({ theme }) => theme.fontColor};
  margin: 12px 12px 12px 0px;
`

export const StyledSelectWrapper = styled.div`
  display: flex;
  background: transparent;
  justify-items: center;
  align-items: center;
`

export const StyledSelect = styled.select`
  background: transparent;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 8px;
  margin: 12px 12px 0px 0px;
  border-radius: 8px;
`

export const StyledOption = styled.option`
  color: ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.auth.background};
`
