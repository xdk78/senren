import styled, { css } from '../../styled-components'

type HeadingProps = {
  variant?: 'light' | 'dark'
}

const Heading = styled.h1<HeadingProps>`
  color: ${({ theme }) => theme.black};
  margin-bottom: -15px;
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`
export default Heading
