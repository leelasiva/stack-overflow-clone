import React from 'react'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import HomeMainbar from '../../components/homeMainbar/HomeMainbar'
import RightSidebar from '../../components/rightSidebar/RightSidebar'
import '../../App.css';

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
      <HomeMainbar/>
      <RightSidebar/>
      </div>

    </div>
  )
}

export default Home