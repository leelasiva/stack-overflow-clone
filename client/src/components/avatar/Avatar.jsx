import React from 'react'

const Avatar = ({children, backgroundColor,px, py,  padding, color, borderRadius, cursor,fontSize,marginRight
}) => {

  const style = {
    backgroundColor,
    padding:`${py} ${px}`,
    color: `${color}` || 'black',
    borderRadius,
    fontSize:`${fontSize}`,
    textAlign:'center',
    cursor: cursor || null,
    textDecoration:"none",
    margin:`${marginRight}`,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar