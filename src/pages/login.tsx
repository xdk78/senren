import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'
import firebase from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { FaGoogle } from 'react-icons/fa'
import WrapButton from 'components/ButtonIcon'

const Login = () => {
  const router = useRouter()
  const { register, handleSubmit, setValue } = useForm()
  useEffect(() => {
    if (firebase.auth().currentUser?.uid) {
      router.push('/')
    }
  })
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        router.push('/')
      })
      .catch((error) => console.error(error))
  }
  const onSubmit = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => router.push('/'))
      .catch((error) => console.error(error))
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
          {WrapButton(FaGoogle)({
            text: ' Sign in with Google',
            onClick: () => signInWithGoogle(),
          })}
        </StyledForm>
      </FormWrapper>
      <img src={LoginImage} alt="img" />
    </AuthPageTemplate>
  )
}

export default Login
