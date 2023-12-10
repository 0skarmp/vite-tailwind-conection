import React from 'react'
import Lottie from 'lottie-react'
import animationData from './assets/Developer.json'
const App = () => {
  return (
    <>
    <div >
      <h1 className=' font-mono text-4xl justify-center text-center mt-10'> hola soy oskar</h1>
      <Lottie className='w-60 h-60' animationData={animationData}  />
    </div>
    
    </>
  )
}

export default App
