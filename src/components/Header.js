import React from 'react'
import { Avatar } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <div>
     <div className="grid  grid-flow-col bg-white shadow-md">
      <div className="flex justify-between col-span-1 m-3">
        <img src="https://www.assiduusglobal.com/images/assiduus-logo-dark.png" alt="logo" className="w-36 h-11 m-3"></img>
        <div className="flex">
          {/* <img src={ZoomInIcon} alt="search"></img> */}

          {/* <ZoomInIcon></ZoomInIcon> */}
          <input type="text" placeholder='🔍 Search' className='w-44 bg-gray-100 rounded-full p-2 m-3'></input>
          <NotificationsIcon style={{ marginTop: '20px'}}/>



          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="m-3" />
        </div>



      </div>
    </div>
      
    </div>
  )
}

export default Header
