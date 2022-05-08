import React from 'react'
import { useSelector } from 'react-redux'
export default function Sidebar() {
    const sideBar = useSelector((state) => state.web.sideBar);

  return (
    <div>
        {sideBar.map(bar=>{
            return <p className='menu'>{bar}</p>
        })}
    </div>
  )
}
