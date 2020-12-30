import Axios from 'axios';
import Comment from './Comment'
import {useState} from 'react'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;




function TabResults(props) {
    const[email, setEmail]=useState(props.email) 
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
       
        const handleClick=(e)=>{
            console.log("You are saving tab number " + e.target.value);
            console.log("your e-mail is " + props.email) 
            console.log("your artist is " + p.artist.name)
            console.log("your song title is " + p.title)
            const userData = {
                   email: props.email,
                   title: p.title,
                   artist: p.artist.name,
                   tab_id: e.target.value
            }

            Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/addsong`, userData).then(res=>{
                console.log(res)
            }).catch(err=>console.log(err));
        }

            return <div className="starShips" key={p.id}>
            <a className="link" href={link} target="_blank" rel="noreferrer">{p.title}</a>
            <h6 className = "tabNames"> Artist: {p.artist.name}</h6>
            <button className='btn-success' type="button" value={p.id} onClick={handleClick}>Save Tab!</button >
          
            <Comment songId={p.id} email={email}/>
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

