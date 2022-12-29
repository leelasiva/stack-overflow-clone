import React from 'react'
import './rightSidebar.css';

const WidgetTags = () => {

  const tags = ['c','c++','javascript','python','java','php','android','html','jquery','css','mangodb','express']
  
  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag)=>(
             <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags