import "./Header.css"
import React, { useState } from 'react'

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <>
            <div className="background-header">
                <div className="header">
                    <img src="/publicphotos/LOGO.png" alt="logo" className="logo" />
                    <button className="open-btn" onClick={toggleSidebar}>☰ Open Menu</button>
                    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                        <div className="links">
                            <h1>{'>'} <a href="/home">HOME</a></h1>
                            <h1>{'>'} <a href="/store">STORE</a></h1>
                            <h1>{'>'} <a href="/premium">PREMIUM</a></h1>
                            <h1>{'>'} <a href="/information">INFO</a></h1>
                            <h1>{'>'} <a href="/newsletter">NEWS</a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;