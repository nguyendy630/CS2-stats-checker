import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from "./components/Navbar"
import FetchData from "./components/FetchData"
import { Input } from "@nextui-org/input";

function App() {
  const [currentSteamID, setSteamID] = useState("");

  // const steamID = "76561198274029909";
  // let newSteamId = "76561198961634260";

  
  return (
    <>
        <div className="App">
          <Input value={currentSteamID} onValueChange={setSteamID}/>
          <FetchData steamid={currentSteamID}/>
        </div>
    </>
  )
}

export default App
