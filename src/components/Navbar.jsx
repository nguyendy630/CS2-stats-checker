import React from 'react'

export default function Navbar() {
    return (
        <>
            <h2 className="logo">CS2 Stat Tracker</h2>
            <nav>
                <ul>
                    <li className="nav-links"><a href="#">Home</a></li>
                    <li className="nav-links"><a href="#">Search Steam Users</a></li>
                </ul>
            </nav>
        </>
    )
}