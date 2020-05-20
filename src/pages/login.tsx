import React from 'react'
import { useForm } from 'react-hook-form'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'

const Login = () => {
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setValue([{ email: '' }, { password: '' }])
  }
  return (
    <AuthPageTemplate>
      <FormWrapper text="Login">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            ref={register({ required: true, minLength: 5 })}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
          <Button type="submit" large>
            Login
          </Button>
        </StyledForm>
      </FormWrapper>
      <LoginImage />
    </AuthPageTemplate>
  )
}

export default Login
