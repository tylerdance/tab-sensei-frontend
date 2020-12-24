import Axios from 'axios';
import Comment from './Comment'
import { useState} from 'react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;




function TabResults(props) {
   
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        const handleClick=(e)=>{
            console.log("You are saving tab number "+e.target.value)
        }

            return <div className="starShips" key={p.id}>
            <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
            <h6 className = "tabNames"> Artist: {p.artist.name}</h6>
            <button className='btn-success' type="button" value={p.id} onClick={handleClick}>Save Tab!</button >
            <Comment songId={p.id} />
           </div>
    })
    return(
        <div>
        <div id="manyStarships">
            {starShips}
        </div>
        
        </div>
    )
}

export default TabResults;

