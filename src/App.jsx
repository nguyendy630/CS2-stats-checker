import './App.css'
import { useState, useEffect } from 'react'
import UserStats from './components/UserStats'


function App() {
  return (
    <>
      <div className='container'>
        <h1 className="text-xl">Fetching Data</h1>
        <ul>
          <UserStats/>
        </ul>
      </div>
    </>
  )
}

export default App
