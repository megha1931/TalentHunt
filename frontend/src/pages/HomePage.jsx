import React, { useEffect, useState } from 'react'

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import toast from 'react-hot-toast'


function HomePage() {
  //data fetching -without using any library
  // const [books,setBooks] = useState([])
  // const [isLoading,setIsLoading] = useState(true)
  // const [error,setError] = useState(null)

  // useEffect(()=>{
  //   setIsLoading(true);
  //   try {
  //     const getBooks = async()=>{
  //     const res = await fetch("/api/books")
  //     const data = await res.json()
  //     setBooks(data)
  //     }  
  //   } catch (error) {
  //     setError(error)
  //   }finally{
  //     setIsLoading(false);
  //   }
    //we will need refetching logic here
    //we will need caching logic here
    //we will need loading and error state management here
    //when you refresh window - it fetches data immediately
    //but when you navigate b/w pages - it does not fetch data again
    //thats where libraries like react-query, swr come into picture
  //   getBooks();
  // },[])




  return (
    <div>
      <button className='btn btn-secondary' 
      onClick={()=> toast.success("this is success toast")}>
        Click me
        </button>
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
