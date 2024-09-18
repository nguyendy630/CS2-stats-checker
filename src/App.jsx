import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios";
import { response } from 'express';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/results',
      }
  
      axios.request(options).then((response) => {
        console.log(response.data);
        setUserData(response.data);
      }).catch((error) => {
        console.log(error)
      })
    }
    
    fetchData()
  },[])

  return (
    <>
      <div className='container'>
        <h1 className="text-xl">Fetching Data</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default App
