import React from 'react'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
import '../assets/Style.css'

export default function Layout() {
  return (
    <div>
      <Header/>
      <div className='display'>
        <div className='sidebar'>
        <Sidebar/>
        </div>
      <div className='margin'>
      <Content/>
      </div>
     
      </div>
      
      <Footer/>
    </div>
  )
}
