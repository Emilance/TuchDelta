import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Homepage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app ">
        <Routes>
              <Route path='/' element={<Homepage/> } />
              <Route path='/login' element={<Login/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/contact' element={<ContactPage/>} />
        </Routes>
    </div>
  )
}

export default App
