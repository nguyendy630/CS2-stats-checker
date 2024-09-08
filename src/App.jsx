import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [results, setResults] = useState([]);
  const controller = new AbortController();

  useEffect(() => {
    async function fetchData() {
      axios.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/", {
        params: {
          key: import.meta.env.VITE_STEAM_WEB_API_KEY,
          steamids: "76561198274029909",
          appid: 730
        }
      }).then(
        response => {
          console.log(response.data)
        }
      ).catch(err => {
        console.log(err)
      })
    }

    fetchData();

    console.log(results, "Results");
    console.log('API Key:', import.meta.env.VITE_STEAM_WEB_API_KEY);
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
