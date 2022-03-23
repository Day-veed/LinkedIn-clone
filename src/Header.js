import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        
        <div className="header__left">
            <img src="https://th.bing.com/th/id/R.ab725599921ce3ad5cc1ee2c82f1ee18?rik=7sSeFLtsaFtkcg&pid=ImgRaw&r=0&sres=1&sresct=1" 
            alt=""/>

            <div className='header__search'>
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>

        <div className="header__right">
/
        </div>
    </div>
  )
}

export default Header