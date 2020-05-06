import styled, { css } from '../../styled-components'

type InputProps = {
  large?: boolean
  variant?: 'light' | 'dark'
}

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.white};
  outline: 0px;
  border: 0px;
  border-radius: 20px;
  width: 100%;
  margin: 10px;
  padding: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.gray100};
  }
  
  ${({ large }) =>
    large &&
    css`
      font-size: 23px;
      width: 100%;
      height: 90px;
    `}

  ${({ variant }) =>
    variant === 'dark'
      ? css`
          background-color: ${({ theme }) => theme.primaryDark};
          color: ${({ theme }) => theme.white};
        `
      : css`
          background-color: ${({ theme }) => theme.white};
          &::placeholder {
            color: ${({ theme }) => theme.gray200};
          }
          color: ${({ theme }) => theme.gray200};
        `}
        ${({ large, variant }) =>
          large && variant === 'dark'
            ? css`
                background-color: ${({ theme }) => theme.gray400};
                color: ${({ theme }) => theme.gray100};
              `
            : ''}
`
export default Input
