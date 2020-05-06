import styled, { css } from '../../styled-components'

type ButtonProps = {
  large?: boolean
  variant?: 'light' | 'dark'
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.white};
  outline: 0px;
  border: 0px;
  border-radius: 25px;
  width: 254px;
  height: 49px;
  cursor: pointer;
  margin: 10px;

  ${({ large }) =>
    large &&
    css`
      font-size: 23px;
      width: 100%;
      height: 65px;
    `}
  ${({ variant }) =>
    variant === 'dark'
      ? css`
          background-color: ${({ theme }) => theme.primaryDark};
        `
      : css`
          background-color: ${({ theme }) => theme.primaryLight};
          box-shadow: 4px 4px 25px rgba(81, 153, 255, 0.3);
        `}
        ${({ large, variant }) =>
          large && variant === 'dark'
            ? css`
                background-color: ${({ theme }) => theme.primaryLight};
              `
            : ''}     
            ${({ large, variant }) =>
              large && variant === 'light'
                ? css`
                    background-color: ${({ theme }) => theme.primaryDark};
                  `
                : ''}  
`
export default Button
