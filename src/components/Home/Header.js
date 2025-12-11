import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Blog App</h1> 
      <NavLink to="/" className="nav-link">Home</NavLink> ||
      <NavLink to="/blogs" className="nav-link">Blogs</NavLink> ||
      <NavLink to="/contact" className="nav-link">Contact</NavLink> 
    </header>
  )
}


export default Header;