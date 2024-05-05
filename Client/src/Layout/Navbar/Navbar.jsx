import React from 'react'
import'./Navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <h2>Chrest</h2>
        </div>
        <div className="middle">
            <div className="home">
                <ul>
                <li>Home</li>
                <li>Rentals</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                </ul>
            </div>
        </div>
        <div className="end">
            <div className="sign-up">
                Sign in
            </div>
            <div className="past">
                <button>+ Past Listing</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar