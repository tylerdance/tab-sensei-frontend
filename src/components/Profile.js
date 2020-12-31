import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './Tabs.js'
import Image from './Image'
import GetMytabs from './GetMytabs'
import HomeClone from './HomeClone'
import Axios from 'axios'
import { useState } from 'react'
import BeatBank from './BeatBank.js';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
     const[photo, setPhoto]=useState([])
  
     Axios.get(`${REACT_APP_SERVER_URL}/api/users/myphoto/${props.user.email}`)
     .then(res=>{
         console.log(res.data)
         setPhoto(res.data.user[0].image_url)
        })
     .catch(err=>{console.log(err)})

    console.log("line 9")
    console.log(props);
    const userData = props.user ? 
    (<div>
        {/* <h1>Profile</h1> */}
        <img src={photo} className="profilepic"/>
        <p>{props.user.name}</p> 
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
            < div className="tabScroll">
                <div className="tabScroll1">
            { props.user ? userData : errorDiv() }
                  
            <Image email={props.user.email}/>
                </div>
                <div className="tabScroll2">
              
            <GetMytabs email={props.user.email}/>
                </div>
                <div className="tabScroll3">
                    <BeatBank />
                </div>
                </div>
            {/* <Tabs email={props.user.email} /> */}
            <HomeClone email={props.user.email}/>
           
            
            
            
            
        
        </div>
    );

}

export default Profile;