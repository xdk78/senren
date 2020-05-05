import styled, { css } from '../../styled-components'

type HeadingProps = {
  variant?: 'light' | 'dark'
}

const Paragraph = styled.p<HeadingProps>`
  color: ${({ theme }) => theme.black};
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`
export default Paragraph
