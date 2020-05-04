import styled from '../../styled-components'

type ButtonProps = {
  color?: string
  big?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.white};
  padding: 10px 15px;
`

export default Button
