import React from 'react'
import styled, { css } from '../../styled-components'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'

type StyledWrapperProps = {
  variant?: 'light' | 'dark'
}

type FormProps = {
  variant?: 'light' | 'dark'
  option?: 'login' | 'register'
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding: 60px 20px;
  border-radius: 23px;
  justify-items: stretch;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.primaryDark};
    `};
`
const StyledError = styled.p`
  color: #ff1e1e;
`

const StyledHeading = styled.h1`
  color: white;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 35px;
`
const StyledLabel = styled.label`
  color: white;
`
const StyledCheckboxWrapper = styled.div`
  display: flex;
  padding: 10px;
`

const Form = ({ variant, option }: FormProps) => {
  const { register, handleSubmit, errors, setValue, watch } = useForm()
  const onSubmit = (data) => {
    if (option === 'login') {
      // post to backend login route
      console.log('Login')
      console.log(data)
      setValue([{ email: '' }, { password: '' }])
    } else if (option === 'register') {
      setValue([{ email: '' }, { password: '' }, { password2: '' }])
      console.log('Register')
      console.log(data)
    }
  }
  return (
    <StyledWrapper variant={variant}>
      {option === 'login' && <StyledHeading>Sign in</StyledHeading>}
      {option === 'register' && <StyledHeading>Register</StyledHeading>}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {option === 'register' && (
          <Input
            placeholder="Your name"
            type="name"
            name="name"
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
        )}
        {errors.name && errors.name.type === 'required' && (
          <StyledError>This field is required</StyledError>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <StyledError>Password must have at least 5 characters</StyledError>
        )}
        <Input
          placeholder="Email"
          type="email"
          name="email"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.email && errors.email.type === 'required' && (
          <StyledError>This field is required</StyledError>
        )}
        {errors.email && errors.email.type === 'minLength' && (
          <StyledError>Email must have at least 5 characters</StyledError>
        )}
        <Input
          placeholder="Password"
          type="password"
          name="password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <StyledError>This field is required</StyledError>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <StyledError>Password must have at least 8 characters</StyledError>
        )}
        {option === 'register' && (
          <Input
            placeholder="Repeat your password"
            type="password"
            name="password2"
            ref={register({
              required: true,
              minLength: 8,
              validate: (value) => value === watch('password'),
            })}
          />
        )}
        {errors.password2 && errors.password2.type === 'required' && (
          <StyledError>This field is required</StyledError>
        )}
        {errors.password2 && errors.password2.type === 'minLength' && (
          <StyledError>Password must have at least 8 characters</StyledError>
        )}
        {errors.password2 && errors.password2.type === 'validate' && (
          <StyledError>Passwords do not match</StyledError>
        )}
        {option === 'login' && (
          <StyledCheckboxWrapper>
            <input type="checkbox" id="terms" name="terms" />
            <StyledLabel htmlFor="terms">Remember me</StyledLabel>
          </StyledCheckboxWrapper>
        )}
        {option === 'register' && (
          <StyledCheckboxWrapper>
            <input type="checkbox" id="terms" name="terms" required />
            <StyledLabel htmlFor="terms">
              I accept all terms and conditions
            </StyledLabel>
          </StyledCheckboxWrapper>
        )}
        {option === 'login' && (
          <Button type="submit" variant={variant} large>
            Login
          </Button>
        )}
        {option === 'register' && (
          <Button type="submit" variant={variant} large>
            Register
          </Button>
        )}
      </StyledForm>
    </StyledWrapper>
  )
}

export default Form
