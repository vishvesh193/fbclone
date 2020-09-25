import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [ { user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
        
        </div>
    )
}

export default Sidebar
