import React from 'react';
import "./Feed.css";
import {CreateIcon} from "@mui/material"

function Feed() {
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input type="text"/>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Feed