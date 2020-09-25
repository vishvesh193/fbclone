import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <MessageSender />
            <Post profilePic="https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg" 
            message="SUNKISSED..  :)"
            timestamp="TIMESTAMP HERE"
            username="papa_pug"
            image="https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg"
            
            />
            
            <Post />
            <Post />
        </div>
    )
}

export default Feed
