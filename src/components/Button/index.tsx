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
  border-radius: 25px;
  width: 254px;
  font-weight: 600;
  height: 49px;
  cursor: pointer;
  margin: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ large }) =>
    large &&
    css`
      font-size: 21px;
      width: 100%;
      height: 55px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.auth.button};
    `}
`

export default Button
