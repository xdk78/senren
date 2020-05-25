import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'
import firebase from 'firebase/clientApp'
import { FaGoogle } from 'react-icons/fa'
const Register = () => {
  const { register, handleSubmit, setValue, watch } = useForm()
  useEffect(() => {
    if (firebase.auth().currentUser?.uid) {
      Router.push('/')
    }
  })
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        Router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const onSubmit = (data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => Router.push('/'))
      .catch((error) => console.log(error))

    setValue([{ email: '' }, { password: '' }, { name: '' }, { password2: '' }])
  }
  return (
    <AuthPageTemplate>
      <FormWrapper text="Register">
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
            Register
          </Button>
          <Button onClick={signInWithGoogle} large>
            <FaGoogle />
            Sign in with Google
          </Button>
        </StyledForm>
      </FormWrapper>
      <img src={LoginImage} alt="img" />
    </AuthPageTemplate>
  )
}

export default Register
