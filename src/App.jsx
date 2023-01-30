import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Homepage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <Routes>
              <Route path='/' element={<Homepage/> } />
              <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default App
