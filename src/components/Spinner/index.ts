import styled, { keyframes } from 'utils/styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div<{ size?: string }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${({ theme }) => theme.spinner.primary};
  border-right: 2px solid ${({ theme }) => theme.spinner.primary};
  border-bottom: 2px solid ${({ theme }) => theme.spinner.primary};
  border-left: 2px solid ${({ theme }) => theme.spinner.secondary};
  background: transparent;
  width: ${({ size }) => size || '48px'};
  height: ${({ size }) => size || '48px'};
  border-radius: 50%;
`

export const LoaderWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  place-items: center;
`

export default Spinner
