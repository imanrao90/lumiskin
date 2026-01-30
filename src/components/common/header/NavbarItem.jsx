import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({label, to}) {
  return (
    <NavLink to={to}>{label}</NavLink>
  )
}

export default NavbarItem