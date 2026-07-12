import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './componenrs/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'


function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(multiply())}}>*</button>
      {count}
      <button  onClick={()=>{dispatch(decrement())}}>-</button> 
    </>
  )
}

export default App
