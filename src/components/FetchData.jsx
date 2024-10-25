import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


// FetchData Component to fetch data from the server
// @param {string} steamid - Steam ID of the user
// @returns {JSX.Element} - JSX Element
// @requires request from server.js parameter steamid
export default function FetchData(props) {
    const [userData, setUserData] = useState(null);
    let steamid = props.steamid;

    useEffect(() => {
        if (typeof steamid == "undefined" || steamid == "") {
            steamid = "76561198961634260";
        }

         async function fetchData() {
            const options = {
                method: 'GET',
                url: `http://localhost:8888/results?steamid=${steamid}`,
            }
            axios.request(options).then((response) => {
                setUserData(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [steamid])

    return (
        <>
            <h2>
                {userData ? (<pre>{JSON.stringify(userData, null, 2)}</pre>) : ("Loading...")}
            </h2>
        </>
    )
}
