import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate, Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProblemsPge from './pages/ProblemsPge'
function App() {
  const {isSignedIn} = useUser()

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/problems' element={isSignedIn ? <ProblemsPge/> :<Navigate to={"/"} /> }/>
    </Routes>
    <Toaster/>
    </>
    
  )
}

export default App
