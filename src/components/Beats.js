import React from 'react';
import ReactPlayer from "react-player";
import { useState } from 'react'

function Player() {
const[pace1, setPace1]=useState(1)
const[pace2, setPace2]=useState(1)
const[pace3, setPace3]=useState(1)
const[pace4, setPace4]=useState(1)

function handleSlide1(e){
  setPace1(e.target.value);
  console.log("speed is " + pace1)
}
function handleSlide2(e){
  setPace2(e.target.value);
  console.log("speed is " + pace2)
}
function handleSlide3(e){
  setPace3(e.target.value);
  console.log("speed is " + pace3)
}
function handleSlide4(e){
  setPace4(e.target.value);
  console.log("speed is " + pace4)
}
  return (
    <div className='beatBox'>
    <h6>Beat Bank</h6>
    <div class="beat">            
      <form action="/action_page.php">
      <div class="speed">
      <label class="speed_bar" id="beatSpeed"> BEAT 1 || Speed: {pace1}</label>
      <input type="range" className="slider" name="speed" id="range_speed" value={pace1} 
      min={0.5} max={2}   step={0.25} onChange={handleSlide1}/>
        </div>
      </form>
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace1} 
      />
      </div>

      <div class="beat">            
      <form action="/action_page.php">
      <div class="speed">
      <label class="speed_bar" id="beatSpeed"> BEAT 2 || Speed: {pace2}</label>
      <input type="range" className="slider" name="speed" id="range_speed" value={pace2} 
      min={0.5} max={2}   step={0.25} onChange={handleSlide2}/>
        </div>
      </form>
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace2} 
      />
      </div>

      <div class="beat">            
    
      <form action="/action_page.php">
      <div class="speed">
      <label class="speed_bar" id="beatSpeed"> BEAT 3 || Speed: {pace3}</label>
      <input type="range" className="slider" name="speed" id="range_speed" value={pace3} 
      min={0.5} max={2}   step={0.25} onChange={handleSlide3}/>
        </div>
      </form>
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace3} 
      />
      </div>

      <div class="beat">            
      <form action="/action_page.php">
      <div class="speed">
      <label class="speed_bar" id="beatSpeed"> BEAT 4 || Speed: {pace4}</label>
      <input type="range" className="slider" name="speed" id="range_speed" value={pace4} 
      min={0.5} max={2}   step={0.25} onChange={handleSlide4}/>
        </div>
      </form>
    <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="250px"
        height="15px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace4} 
      />
      </div>
    </div>
  );
}
 
export default Player





      
