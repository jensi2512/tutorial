import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import LoginError from './LoginError'

function Protact({children}) {
  const {isLoaded, isSignedIn} = useAuth()

  if(!isLoaded){
    return <h1>loading....</h1>
  }

  if(!isSignedIn){
    return <LoginError/>
  }

  return children

}

export default Protact
