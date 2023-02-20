import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Homepage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ProductPage from './Pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)
  const mathcalc = ( a, b, c)=> {
    let calculation = (a +b + c)
    let i = 0
    while(i < calculation){
      if((calculation % i)  == 1){
        return i
      }else{
        i++
      }
    }
  }

  console.log(mathcalc(2,6,6))
   
  return (
    <div className="app  w-full">
        <Routes>
              <Route path='/' element={<Homepage/> } />
              <Route path='/login' element={<Login/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/waitlist' element={<ContactPage/>} />
              <Route path='/product' element={<ProductPage/>} />
        </Routes>
    </div>
  )
}

export default App
