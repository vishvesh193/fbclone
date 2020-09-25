import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {

    const [ { user }, dispatch] = useStateValue();

    return (
        <div className='header'>
          <div className="header__left">
          <img src={require("./main_icon.png")} alt="" />
          <div className="header__input">
              <SearchIcon />
              <input type="text" placeholder="Search Something"/>
          </div>
          </div>
          <div className="header__center">
          <div className="header__option
           header__option--active"> 
            <HomeIcon fontSize="large" />
          </div>

          <div className="header__option">
            <GroupIcon fontSize="large" />
          </div>

          <div className="header__option">
            <VideoCallIcon fontSize="large" />
          </div>
          
          </div>
          <div className="header__right">
                    <div className="header__info">
                        <Avatar src={user.photoURL} />
                        <h4>{user.displayName}</h4>
                    </div>
            <div className="header__right__icons">
            <IconButton>
                <div className="right__icons">
                <AddIcon />
                </div>
            </IconButton>

            <IconButton>
                <div className="right__icons">
                    <ForumIcon />
                </div>    
            </IconButton>

            <IconButton>
                <div className="right__icons">
                
                    <NotificationsActiveIcon />
            </div>    
            </IconButton>

            <IconButton>
                <div className="right__icons">
                
                    <ExpandMoreIcon />
                </div>    
            </IconButton>
            </div>
        </div>
        </div>
    )
}

export default Header
