import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import LoginImage from 'public/LoginImage.svg'
import firebase from 'firebase/clientApp'
import { FaGoogle } from 'react-icons/fa'
import WrapButton from 'components/ButtonIcon'

const Register = () => {
  const router = useRouter()
  const { register, handleSubmit, setValue, watch } = useForm()
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
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => router.push('/'))
      .catch((error) => console.error(error))

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
          {WrapButton(FaGoogle)({
            text: ' Sign in with Google',
            onClick: () => signInWithGoogle(),
          })}
          {/* <Button >
            <FaGoogle />
            Sign in with Google
          </Button> */}
        </StyledForm>
      </FormWrapper>
      <img src={LoginImage} alt="img" />
    </AuthPageTemplate>
  )
}

export default Register
