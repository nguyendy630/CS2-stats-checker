import React, {useEffect} from 'react'
import axios from "axios";

export default function UserStats() {
    useEffect(() => {
        async function fetchData() {
            axios.get("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/", {
                params: {
                    key: import.meta.env.VITE_STEAM_WEB_API_KEY,
                    steamid: "76561198274029909",
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
    }, [])

    return (
        <div>UserStats</div>
    )
}
