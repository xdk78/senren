import styled, { css } from '../../styled-components'

type GridElementProps = {
  small?: boolean
  variant?: 'dark' | 'light'
}

const GridElement = styled.img<GridElementProps>`
  border-radius: 25px;
  box-shadow: 2px 2px 80px #d1d1d1;
  width: 250px;
  height: 250px;
  object-fit: cover;
  ${({ small }) =>
    small &&
    css`
      border-radius: 8px;
      width: 85px;
      height: 85px;
      object-fit: cover;
    `}
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      box-shadow: none;
    `}
`
export default GridElement
