import { useState, useEffect } from 'react'
import firebase from 'firebase/clientApp'
import { useRouter } from 'next/router'

const withAuth = (Component) => (props) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          setUser(user)
          setLoggedIn(true)
        } else {
          setUser(null)
        }
      } catch (error) {
      } finally {
        setLoadingUser(false)
      }
    })

    return () => unsubscriber()
  }, [])

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
        setLoggedIn(false)
        router.push('/')
      })
      .catch((error) => console.error(error))
  }

  return (
    <Component
      {...props}
      user={user}
      logout={Logout}
      isLoggedIn={isLoggedIn}
      loadingUser={loadingUser}
    />
  )
}

export default withAuth
