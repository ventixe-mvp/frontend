import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        <img src="/src/assets/components/images/ventixeicon.svg" alt="" />
        <h1>Ventixe</h1>
      </div>
      <div>
      <NavLink         style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? '#F26CF9' : '#37437D',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        })}to="/"> <i class="fa-regular fa-ticket-perforated"></i> <span>Events</span></NavLink>
      </div>

    </nav>
  )
}

export default Nav
