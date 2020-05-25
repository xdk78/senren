import styled, { css } from 'utils/styled-components'
import { motion } from 'framer-motion'

type StyledButtonProps = {
  large?: boolean
}

const Button = styled(motion.button)<StyledButtonProps>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonFont};
  outline: 0px;
  border: 0px;
  border-radius: 24px;
  width: 248px;
  font-weight: 600;
  height: 48px;
  cursor: pointer;
  margin: 12px 0px 0px 0px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  ${({ large }) =>
    large &&
    css`
      font-size: 20px;
      width: 100%;
      height: 54px;
      background-color: ${({ theme }) => theme.auth.button};
    `}
`

export default Button
