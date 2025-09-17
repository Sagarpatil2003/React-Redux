import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/Action'
import './App.css'

function App() {
   const state = useSelector((state) => state)
   let dispatch = useDispatch()
  return (
    <>
      <div className="card">
        <h3>{state}</h3>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
      
    </>
  )
}

export default App
