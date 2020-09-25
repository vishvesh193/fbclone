import React,{useState} from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useStateValue } from './StateProvider';


export default function MessageSender() {

    const [ { user }, dispatch] = useStateValue();
    
    const [input,setInput]=useState("");
    const handleSubmit = e => {
    
        e.preventDefault();
        setInput("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>

                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)  }
                    className="messageSender__input" 
                    placeholder={"What's on your mind.."} />

                    <button onClick={handleSubmit} type='submit'>Hidden Button</button>
                </form>
                </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color:"green" }} />
                    <h3>Photo/Video</h3>


                </div>
                
            </div>    
        </div>
    )
}
