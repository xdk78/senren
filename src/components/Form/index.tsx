import styled from 'utils/styled-components'

type FormProps = {
  text: string
  children?: React.ReactNode
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px;
  padding: 60px 20px;
  border-radius: 23px;
  justify-items: stretch;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
`

export const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 35px;
`

const FormWrapper = ({ text, children }: FormProps) => {
  return (
    <StyledWrapper>
      <StyledHeading>{text}</StyledHeading>
      {children}
    </StyledWrapper>
  )
}

export default FormWrapper
