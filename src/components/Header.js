import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const Header = () => {
  return (
    <nav>
        <h1>NexusFlow Systems
</h1>
        
        <main>
        <Link to={"/#home"}>Home</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
        </main>

    </nav>
  )
}
