import { useState } from 'react'
import { Output } from '../Output'
import { Keyboard } from '../Keyboard'
import './App.css'

function App() {
  const [outputNum, setOutputNum] = useState(0)

  return (
    <>
    <header className='text-center text-3xl mt-4'>
      <h1 className='tracking-wide'>CALCULA<b className='tracking-wide'>THOR</b></h1>
    </header>
    <Output outputNum={outputNum}/>
   
    <Keyboard 
    outputNum={outputNum}
    setOutputNum={setOutputNum}
    />
    </>
  )
}

export default App
