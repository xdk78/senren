import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import FormWrapper, { StyledForm } from 'components/Form'
import AuthPageTemplate from 'templates/AuthPageTemplate'
import Input from 'components/Input'
import Button from 'components/Button'
import firebase from 'firebase/clientApp'
import { FaGoogle } from 'react-icons/fa'
import WrapButton from 'components/ButtonIcon'
import Image from 'next/image'
import { StyledLoginImageContainer } from './login'

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

    setValue('email', '')
    setValue('password', '')
    setValue('name', '')
    setValue('password2', '')
  }
  return (
    <AuthPageTemplate>
      <FormWrapper text="Register">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            {...register('email', {
              required: true,
              minLength: 5,
            })}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            {...register('password', {
              required: true,
              minLength: 8,
              validate: (value) => value === watch('password'),
            })}
          />
          <Input
            placeholder="Repeat your password"
            type="password"
            name="password2"
            {...register('password2', {
              required: true,
              minLength: 8,
              validate: (value) => value === watch('password'),
            })}
          />
          <Button type="submit" large>
            Register
          </Button>
          {WrapButton(FaGoogle)({
            text: 'Sign in with Google',
            onClick: () => signInWithGoogle(),
          })}
        </StyledForm>
      </FormWrapper>
      <StyledLoginImageContainer>
        <Image
          src="/LoginImage.svg"
          width={500}
          height={500}
          alt="LoginImage"
        />
      </StyledLoginImageContainer>
    </AuthPageTemplate>
  )
}

export default Register
