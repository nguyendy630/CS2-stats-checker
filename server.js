import cors from "cors"
import axios from "axios"
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()
const PORT = 8888;

app.use(cors())

app.get('/results', (req, res) => {
    const options = {
        key: process.env.VITE_STEAM_WEB_API_KEY,
        appid: 730,
        steamid: req.query.steamid
    }

    axios.request(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${options.appid}&key=${options.key}&steamid=${options.steamid}`)
        .then((response) => {
            res.json(response.data)
        }).catch((error) => {
            console.log(error)
        })
})


app.get('/', (req, res) => {
    res.json("Hi")
})

app.listen(PORT, () => console.log(`Sever is running on Port ${PORT}`)) 