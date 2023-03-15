import React from 'react'
import { Link } from 'react-router-dom'

const Navs = () => {
  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/users'>Users</Link>
    </nav>
  )
}

export default Navs
