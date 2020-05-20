import React from 'react'
import { useForm } from 'react-hook-form'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'

const Register = () => {
  const { register, handleSubmit, setValue, watch } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setValue([{ email: '' }, { password: '' }, { name: '' }, { password2: '' }])
  }
  return (
    <AuthPageTemplate>
      <FormWrapper text="Register">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            ref={register({ required: true, minLength: 5 })}
          />
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
          <Button type="submit" large>
            Login
          </Button>
        </StyledForm>
      </FormWrapper>
      <LoginImage />
    </AuthPageTemplate>
  )
}

export default Register
