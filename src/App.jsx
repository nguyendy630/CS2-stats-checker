import './App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  const[results, setResults] = useState([]);
  const controller = new AbortController();
  
  useEffect(() => {
    async function fetchData() {
      const response = axios.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/", {
        params: {
          key: import.meta.env.VITE_STEAM_WEB_API_KEY,
          steamids: "76561198274029909"
        }
      })
      const data = await response.json();
      setResults(data);
    }

    fetchData();

    console.log(results, "Results");
  }, [])

  return (
    <>
      <div className='container'>
        <h1 className="text-xl">Fetching Data</h1>
      
      </div>
    </>
  )
}

export default App
