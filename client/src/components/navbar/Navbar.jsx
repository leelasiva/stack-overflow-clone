import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/magnifying-glass-solid.svg';
import Avatar from '../../components/avatar/Avatar';
import './navbar.css';

const Navbar = () => {

  const User = null;

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-items nav-logo'>
          <img src={logo} alt="logo"></img>
        </Link>
        <Link to='/about' className='nav-items nav-btn'>About</Link>
        <Link to='/products' className='nav-items nav-btn'>Products</Link>
        <Link to='/forteams' className='nav-items nav-btn'>For Teams</Link>
        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} alt='search' className='search-icon' style={{ width: "18px" }} />
        </form>
        {User === null ?
          <Link to='/Auth' className='nav-items nav-links'> Login </Link> :
          <>

            <Avatar
              backgroundColor="#009dff"
              px="13px"
              py="8px"
              borderRadius="50%"
              color="white"
              fontSize="18px"
              marginRight="6px"
            >
              <Link to='/' style={{ color: "white", textDecoration: "none" }}>L
              </Link>
            </Avatar>
            <button className='nav-items nav-links'>Log Out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar