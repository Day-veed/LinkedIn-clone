import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@mui/material"


function Sidebar() {
  return <div className='sidebar'>
      <div className='sidebar__top'>
          <img src='' alt='' />
          <Avatar className='sidebar__avatar'/>
          <h2>Angelina Benson</h2>
          <h4>Angelina.Benson.com</h4>
      </div>
  </div>
}

export default Sidebar