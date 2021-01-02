import Axios from 'axios';
import Comment from './Comment'
import {useState, useEffect} from 'react'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;




function TabResults(props) {
    const[email, setEmail]=useState(props.email) 
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
       
        const handleClick=async(e)=>{
            if(props.email===undefined){
                console.log("Please Log In To Save Tabs")
                alert('Please Log In to Save Tabs')
            }

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

            await Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/addsong`, userData).then(res=>{
                console.log(res)
                props.toggle(true)
                props.toggle(false)
            }).catch(err=>console.log(err));

            // window.location.reload();
        }

        // useEffect(()=>{

        // },[])

            return <div className="starShips" key={p.id}>
            <a href={link} target="_blank" rel="noreferrer"> 
             
            <span className="link" >{p.title}</span>
            <span className = "tabNames"> Artist: {p.artist.name}</span></a> 
            <button className='saveButton' type="button" value={p.id} onClick={handleClick}>Save</button >
          
            <Comment songId={p.id} email={props.email}/>
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

