import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home";
import  SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';


function Header() {
  return (
    <div className='header'>
        
        <div className="header__left">
            <img src="https://th.bing.com/th/id/OIP.3Xx-bhPSwLFHedmoJxdMVAAAAA?w=181&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7" 
            alt=""/>

            <div className='header__search'>
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenter} title='Jobs' />
            <HeaderOption Icon={Chat} title="Messaging" />
            <HeaderOption Icon={Notifications} title="Notifications" />
            <HeaderOption avatar="https://th.bing.com/th/id/OIP.3aHIkCGZKWi1niSHhEFOlgHaHa?pid=ImgDet&rs=1" title='Me' />
        </div>
    </div>
  )
}

export default Header