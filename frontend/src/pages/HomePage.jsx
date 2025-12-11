import React from 'react'

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'

function HomePage() {
  return (
    <div>
     <SignedOut>
        <SignInButton mode='modal' >
          <button className=''>
          Signup please
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
       <UserButton/> 
    </div>
  )
}

export default HomePage
