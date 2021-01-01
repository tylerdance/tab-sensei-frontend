import { useState, useEffect } from "react";
import Comment from "./Comment";
import Axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function ShowMyTabs(props){
    const[deleteTab, setDeleteTab] = useState('')
    async function handleClick (e){
        e.preventDefault()
        const userData={
            _id: e.target.value,
            email: props.email
        }
        console.log(userData)
        await Axios.put(`${REACT_APP_SERVER_URL}/api/users/profile/tablist/delete`, userData)
        .then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        setDeleteTab(e.target.value)
        window.location.reload();
    }

   

    const tabs = props.mytabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.songsterr_id}`

        return <div className="starShips">
            <a className="link" href={link} target="_blank" rel="noreferrer"><span className="song_title">{p.title} -</span>
            <span className = "tabNames"> {p.artist[0].name}</span></a>
            <button type="button" value={p._id} onClick={handleClick} >Delete Tab</button>
            <Comment songId={p.songsterr_id} email={props.email} />
        </div>
    })
    return(
        <div>
            <div id="manyStarships">
            {tabs}
            </div>
            
        </div>
    )
}

export default ShowMyTabs;