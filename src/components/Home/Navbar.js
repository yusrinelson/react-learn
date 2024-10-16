import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

export default function Navbar({user}) {
  return (
    <nav className='home-navbar'>
        <ul>
            <Link to="/home" className='nav-headings'><li>HOME</li></Link>
            <Link to="/about" className='nav-headings'><li>ABOUT</li></Link> 
            <Link to={`/user/${user}` }className='nav-headings'><li>PROFILE</li></Link>
        </ul>
    </nav>
  )
}
