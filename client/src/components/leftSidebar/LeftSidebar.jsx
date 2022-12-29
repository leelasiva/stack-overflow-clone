import React from 'react';
import './leftSidebar.css';
import { NavLink } from 'react-router-dom';
import Globe1 from '../../assets/Globe1.svg';

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClass='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>Public</p></div>
                    <NavLink 
                     to='/Questions' 
                     className='side-nav-links' 
                     activeClass='active'
                    >
                        <img src={Globe1} alt="globe" style={{width:"15px",height:"15px"}}/>
                        <p style={{ paddingLeft: '10px' }}> Questions</p>
                    </NavLink>

                    <NavLink to='/Tags'
                        // style={{ padding: "40px" }}
                        className='side-nav-links'
                        activeClass='active'
                    >
                        <p>Tags</p>
                    </NavLink>

                    <NavLink to='/Users'
                    // style={{ padding: "40px" }}
                    className='side-nav-links'
                    activeClass='active'
                >
                    <p>Users</p>
                </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar