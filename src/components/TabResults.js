import Axios from 'axios';
import Comment from './Comment'
import { useState } from 'react'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function TabResults(props) {
    const[email, setEmail]=useState(props.email) 
    const starShips = props.tabs.map((p, index)=>{
        const link = `http://www.songsterr.com/a/wa/song?id=${p.id}`
       
        const handleClick=async(e)=>{
            if(props.email===null){
                // console.log("Please Log In To Save Tabs")
                alert('Please Log In to Save Tabs')
            }

            // console.log("You are saving tab number " + e.target.value);
            // console.log("your e-mail is " + props.email) 
            // console.log("your artist is " + p.artist.name)
            // console.log("your song title is " + p.title)
         
            const userData = {
                email: props.email,
                title: p.title,
                artist: p.artist.name,
                tab_id: e.target.value
            }
            await Axios.get(`${REACT_APP_SERVER_URL}/api/users/songlist/${props.email}`)
            .then(res=>{
                if(res.data.response[0].song_list.length !==0){
                    // console.log('duplicate?')
                    // console.log(res.data.response[0].song_list)
                    const tabs = res.data.response[0].song_list
                    let counter=false;
                    const unique= tabs.map((p, index)=>{
                        // console.log(p.songsterr_id)
                        // console.log(e.target.value)
                        if(parseInt(p.songsterr_id) === parseInt(e.target.value)){
                            counter=true;  
                        }else{
                        }
                    })
                    if(counter===false){
                        Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/addsong`, userData).then(res=>{
                            // console.log(res)
                            props.toggle(true)
                            props.toggle(false)
                            if(res){}
                        }).catch(err=>{console.log(err) 
                        alert('Your Tab Was Saved to Your Profile')}
                        );
                    }else{
                        alert("This Tab Has Already Been Saved")
                    }
                }else{
                
                    Axios.post(`${REACT_APP_SERVER_URL}/api/users/tabs/addsong`, userData).then(res=>{
                        // console.log(res)
                        props.toggle(true)
                        props.toggle(false)
                        if(res){}
                    }).catch(err=>{
                        // console.log(err) 
                    alert('Your Tab Was Saved to Your Profile')}
                    );
                }
         
            }).catch(err=>{
                // console.log(err)
            })
        }

        return <div className="starShips" key={p.id}>
            <div className="tabLink">
                <a href={link} target="_blank" rel="noreferrer" className=""> 
                    <div class="tabResultName">
                        <span className="tabTitle">{p.title}</span>
                        <span className="tabArtist"> - {p.artist.name}</span> 
                    </div> 
                </a>
                <button className='saveButton' type="button" value={p.id} onClick={handleClick}>Save</button >
            </div>
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