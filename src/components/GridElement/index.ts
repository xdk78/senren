import styled, { css } from '../../styled-components'

type GridElementProps = {
  small?: boolean
}

const GridElement = styled.img<GridElementProps>`
  border-radius: 25px;
  /* box-shadow: 2px 2px 80px #d1d1d1; */
  width: 100%;
  height: 200px;
  object-fit: cover;
  ${({ small }) =>
    small &&
    css`
      border-radius: 8px;
      width: 85px;
      height: 85px;
      object-fit: cover;
    `}
`
export default GridElement
