import styled, { css } from '../../styled-components'

type InputProps = {
  large?: boolean
}

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.inputs.input};
  outline: 0px;
  border: 0px;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.fontColor};
  &::placeholder {
    color: ${({ theme }) => theme.inputs.placehoder};
  }

  ${({ large }) =>
    large &&
    css`
      font-size: 15px;
      width: 100%;
      height: 56px;
      background-color: ${({ theme }) => theme.inputs.largeInput};
      &::placeholder {
        font-weight: bold;
        font-size: 13px;
      }
    `}
`
export default Input
