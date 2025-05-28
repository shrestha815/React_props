import { useState } from 'react'
import Heading from './components/Heading'
import { About } from './components/About'

function App() {
  return (
    <>
      <Heading/>
      <About title= "About React" subtitle= "Cool things about react"/>
      <About title= "About Python" subtitle= "Python in Machine learning"/>
    </>
  )
}

export default App
