import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'
import firebase from 'firebase/clientApp'
import Router from 'next/router'

const Login = () => {
  const { register, handleSubmit, setValue } = useForm()
  useEffect(() => {
    if (firebase.auth().currentUser?.uid) {
      Router.push('/')
    }
  })
  const onSubmit = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => Router.push('/'))
      .catch((error) => console.log(error))
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
      <img src={LoginImage} alt="img" />
    </AuthPageTemplate>
  )
}

export default Login
