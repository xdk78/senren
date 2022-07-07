import styled, { css } from 'utils/styled-components'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

type StyledButtonIconProps = {
  award?: boolean
}

type ButtonIconProps = {
  award?: boolean
  children?: React.ReactNode
  text?: string
  onClick?: () => void
}

const StyledButtonIcon = styled(motion.a)<StyledButtonIconProps>`
  color: ${({ theme }) => theme.nav.link};
  display: flex;
  margin: 35px 0px;
  align-items: center;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.nav.activeLink};
  }
  ${({ award }) =>
    award &&
    css`
      color: ${({ theme }) => theme.buttonFont};
    `}
  & > * {
    margin: 8px;
  }
`

// eslint-disable-next-line react/display-name
const WrapButton = (Icon: IconType) => (props: ButtonIconProps) =>
  (
    <StyledButtonIcon
      onClick={props.onClick}
      whileHover={{ scale: 1.1 }}
      award={props.award}
    >
      <Icon {...props} />
      {props.text}
    </StyledButtonIcon>
  )

export default WrapButton
