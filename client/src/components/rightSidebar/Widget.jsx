import React from 'react';
import './rightSidebar.css';
import pen from '../../assets/pen.svg';
import stackoverflow from '../../assets/stackoverflow.svg';
import chat from '../../assets/chat.svg';


const Widget = () => {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18px' />
          <p>An honest end-of-year rundown (Ep. 518)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18px' />
          <p>Product 374: How valuable is your screen name? (Ep. 518)</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={chat} alt="chat" width='18px' />
          <p>
            Help us identify new roles for community members</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={chat} alt="chat" width='18px' />
          <p>
            Navigation and UI research starting soon</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={stackoverflow} alt="stackoverflow" width='18px' />
          <p>
            2022 Community Moderator Election Results - now with two more mods!</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={stackoverflow} alt="stackoverflow" width='18px' />
          <p>
            Temporary policy: ChatGPT is banned</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p> 2022 Community Moderator Election Results - now with two more mods!</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>20</p>
          <p>  Proposing a Community-Specific Closure Reason for non-English content</p>
        </div>
       
        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>  Temporary policy: ChatGPT is banned</p>
        </div>
      </div>

    </div>
  )
}

export default Widget