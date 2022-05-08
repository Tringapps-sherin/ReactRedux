import React from 'react'
import '../assets/Style.css'
import { useSelector } from 'react-redux'
export default function Footer() {
  const store=useSelector((state)=>state.web)
  return (
    <div className='header'>
        <div className='headerin'>
          Welcome {store.name}
          <div>{store.address}</div>
          </div>
    </div>
  )
}
