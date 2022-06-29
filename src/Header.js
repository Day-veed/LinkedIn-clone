import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home";
import  SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
//


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
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
            <HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header