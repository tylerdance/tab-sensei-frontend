import Axios from 'axios';
import Comment from './Comment'
import { useState} from 'react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



function TabResults (props){
   
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
        const handleClick=(e)=>{
            console.log("You are saving tab number "+e.target.value)
        }

            return <div className="starShips" key={index}>
            <h2> Artist: {p.artist.name}</h2>
            <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
            <button type="button"  value={p.id} onClick={handleClick}>Save Tab!</button >
            <Comment songId={p.id} />
           </div>
    
  //////////////////////////////         
        
 

  

    
     
    })
    return(
        <div id="manyStarships">
            {starShips}
        </div>
    )
}

export default TabResults;

