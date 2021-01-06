import React from 'react';
import ReactPlayer from "react-player";
import { useState } from 'react'

function Player() {
const[pace1, setPace1]=useState(1)
const[pace2, setPace2]=useState(1)
const[pace3, setPace3]=useState(1)
const[pace4, setPace4]=useState(1)
const[pace5, setPace5]=useState(1)
const[pace6, setPace6]=useState(1)



function changePace1plus(e){
  e.preventDefault()
  setPace1(pace1 + 0.041111111111111111111111111)
}

function changePace1minus(e){
  e.preventDefault()
  if(pace1<=0.5){
    return
  }
  setPace1(pace1 -  0.041111111111111111111111111)
}

function changePace2plus(e){
  e.preventDefault()
  setPace2(pace2 + 0.041111111111111111111111111)
}

function changePace2minus(e){
  e.preventDefault()
  if(pace2<=0.5){
    return
  }
  setPace2(pace2 - 0.041111111111111111111111111)
}

function changePace3plus(e){
  e.preventDefault()
  setPace3(pace3 + 0.041111111111111111111111111)
}

function changePace3minus(e){
  e.preventDefault()
  if(pace3<=0.5){
    return
  }
  setPace3(pace3 - 0.041111111111111111111111111)
}

function changePace4plus(e){
  if(pace4<=0.5){
    return
  }
  e.preventDefault()
  setPace4(pace4 + 0.041111111111111111111111111)
}

function changePace4minus(e){
  e.preventDefault()
  setPace4(pace4 - 0.041111111111111111111111111)
}

function changePace5plus(e){
  if(pace5<=0.5){
    return
  }
  e.preventDefault()
  setPace5(pace5 + 0.04166666666666666666666666666666666666666666666)
}

function changePace5minus(e){
  e.preventDefault()
  setPace5(pace5 - 0.04166666666666666666666666666666666666666666666)
}

function changePace6plus(e){
  if(pace6<=0.5){
    return
  }
  e.preventDefault()
  setPace6(pace6 + 0.04166666666666666666666666666666666666666666666)
}

function changePace6minus(e){
  e.preventDefault()
  setPace6(pace6 - 0.04166666666666666666666666666666666666666666666)
}
  return (
    ///////////////
    <div className='beatBox'>
    {/* <h6>Beat Bank</h6> */}
    <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 1 </span>
      <button className="bpmUpDown" onClick={changePace1minus}>-</button>
      <p id="bpm">{Math.round(pace1*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace1plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643228/sensei-beat-1-_60_sec_eaev0o.mp3 "
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace1} 
      />
      </div>
         
      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 2 </span>
      <button className="bpmUpDown" onClick={changePace2minus}>-</button>
      <p id="bpm">{Math.round(pace2*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace2plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643253/sensei-beat-2-_60_sec_gtceyc.mp3"
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace2} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 3 </span>
      <button className="bpmUpDown" onClick={changePace3minus}>-</button>
      <p id="bpm">{Math.round(pace3*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace3plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643276/sensei-beat-3-_60_sec_hdznq8.mp3"
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace3} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 4 </span>
      <button className="bpmUpDown" onClick={changePace4minus}>-</button>
      <p id="bpm">{Math.round(pace4*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace4plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643793/sensei-beat-4-_60_sec_zwvtnw.mp3"
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace4} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 5 </span>
      <button className="bpmUpDown" onClick={changePace5minus}>-</button>
      <p id="bpm">{Math.round(pace5*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace5plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643812/sensei-beat-5-_60_sec_xzatrr.mp3"
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace5} 
      />
      </div>

      <div className="beat">            
      <div className="speedDaddy">
      <div className="speed">
    
      <span className="beat-title"> Beat 6 </span>
      <button className="bpmUpDown" onClick={changePace6minus}>-</button>
      <p id="bpm">{Math.round(pace6*120)} BPM</p>
      <button className="bpmUpDown" onClick={changePace6plus}>+</button>
  
        </div>
        </div>
    
    <ReactPlayer
        url="https://res.cloudinary.com/df3zbbtc1/video/upload/v1609643834/sensei-beat-6-_60_sec_yx0hqu.wav"
        width="250px"
        height="19px"
        playing={false}
        controls={true}
        loop={true}
        playbackRate={pace6} 
      />
      </div>
    </div>
  );
}
 
export default Player





      
