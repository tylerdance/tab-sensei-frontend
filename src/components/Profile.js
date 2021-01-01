import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './Tabs.js'
import Image from './Image'
import GetMytabs from './GetMytabs'
import HomeClone from './HomeClone'

import BeatBank from './BeatBank.js';



const Profile = (props) => {


    console.log("line 9")
    console.log(props);
    const userData = props.user ? 
    (<div>
        {/* <h1>Profile</h1> */}
        {/* <img src={photo} className="profilepic"/>
        <p>{props.user.name}</p>  */}
        {/* <p><strong>Email:</strong> {props.user.email}</p>  */}
        {/* <p><strong>ID:</strong> {props.user.id}</p>  */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
             <div className="tabScroll4">
                {/* { props.user ? userData : errorDiv() } */}
             
            < div className="tabScroll">
                <div className="tabScroll1">
                <h2 id="header">タブの先生</h2>
                <img src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1609209287/anime_girl3_ilzqfv.png" id="anime_girl" alt="anime guitar girl"/> 
                </div>
                <div className="tabScroll2">
              
            <GetMytabs email={props.user.email}/>
                </div>
                <div className="tabScroll3">
                    <BeatBank />
                </div>
               
                  {/* <Image email={props.user.email}/> */}
                </div>
                </div>
            {/* <Tabs email={props.user.email} /> */}
            <HomeClone email={props.user.email}/>
           
            
            
            
            
        
        </div>
    );

}

export default Profile;