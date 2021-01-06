import React, { Component } from 'react';
import BeatBank from './BeatBank'
import RecTabs from './RecTabs'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
               email: this.props.email
        }
        // console.log("my home one" + this.state.email)
    }

    render() { 
        return ( 
            <> 
            <div >
            <h2 id="header">タブの先生</h2>
        
            {/* <h2 id="featured_tabs">Featured Tabs</h2> */}
            <div id="heading">
            <img src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1609866376/anime_girl_cropp_lvkjc3.png" id="anime_girl" alt="anime guitar girl"/> 
            {/* <img src="../images/anime-girl-crop3.png" id="anime_girl" alt="anime guitar girl"/>  */}
            <div className='recTabs'>
        
                    <RecTabs />
                </div>
                </div>
            <div className='home_elements'>
                <div className='beatBank'>
                    <BeatBank />
                </div>
                <div className="aboutDiv2">
                    {/* <h2 className="welcome">Welcome to Tab Sensei</h2> */}
                    <br></br>
                    <p className="homeText">Tab Sensei allows you to easily search for tabs from Songsterr, practice with beats from our beat bank at your desired tempo, or play along with a YouTube tutorial.</p>

                    <p className="homeText">Save your favorite tabs to your profile and talk to other users in the comments!</p>
                
                    <p className="homeText" id="about">
                        Guitar tablature, or guitar tabs, is a more straightforward way of reading and writing music specifically for guitars. If standard staff notation is the whole book, guitar tabs are the cliff notes. You get all the musical information that you need specifically for the guitar.<br/>
                    </p>
                    <p className="homeText">
                        Even though its simple, guitar tablature is useful as a notation system. You can use it to indicate rhythm, technique, and many other aspects of playing guitar music.
                    </p>
                        

                </div>
            </div>
            </div>
            </>
         );
    }
}
 
export default Home;