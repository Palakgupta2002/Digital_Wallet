import { useState, useEffect } from 'react'

const useUser = (email) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://digital-wallet-backend-falh.onrender.com/getUser/getUser/${email}/User`,
        )
        if (!response.ok) {
          throw new Error('Failed to fetch user')
        }
        const userData = await response.json()
        setUser(userData)
      } catch (error) {
        console.error(error)
      }
    }

    if (email) {
      fetchUser()
    }
  }, [email, user])

  return user
}

export default useUser
