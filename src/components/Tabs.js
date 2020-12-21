import React, { useEffect} from 'react'
import { useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';


//////---COMPONENTS BELLOW
import TabResults from './TabResults';
import Header from './Header.js'
import LoadingPage from './LoadingPage'


//////---COUNTERS AND DATA STORAGE
let userInput = ""
// let count = 0;
function Tabs() {
  // const [starshipArray, setStarshipArray] = useState([]);
function getTabs(){
    axios({method: 'get',
    headers: { 'Content-Type': 'application/json'},
        url: userUrl,
        })
  .then(async(result) => {
    console.log('!requestmade!')
    await setStarshipArray(result.data)
    await setLoading(false)
    // console.log('!!!!!!!!!!$$$$$$$'+ JSON.stringify(result.data))
    // console.log('state police   ' + userUrl)
    // count = count+1;
  }).catch((err)=>{console.log(err+'Second BLOCKKKKKKKKKKKKKKKKK')})
}
/////Setting our state here:
  const [starshipArray, setStarshipArray] = useState([]);
  const [loading, setLoading] = useState(true)
  const [userUrl, setUserUrl] = useState(`https://cors-anywhere.herokuapp.com/http://www.songsterr.com/a/ra/songs.json?pattern=${userInput}`)
 
  ///////function that will make API call to fetch results after the information is enetered into the searchbar
  const searchBar =async(e)=>{
    e.preventDefault()
    // console.log("getting tabs")
    getTabs()
    return <Redirect to="/profile" />
  }
    // console.log('get tabs from' + userUrl)
 ////////////////////TABS component   
  useEffect(()=>{
        getTabs()
    },[]) 
  ///////////////////////implements LOADING PAGE and TABS comp
  return (
    <>
    { loading ===false ? (
    <BrowserRouter>
    <div className="App">
    <Header /> 
   
    <form onSubmit={searchBar}   >
      <label>Search for Tabs</label> 
      <br/>     
      <input id="inputSearchbar" type="text" onChange={(e => {setUserUrl(`https://cors-anywhere.herokuapp.com/http://www.songsterr.com/a/ra/songs.json?pattern=${e.target.value}`)})}  ></input>
      <br/>  
      <input id="submit" type="submit" value="getTabs" ></input>

    </form>  
    <Route path="/profile" render={()=>{return <TabResults starShipList={starshipArray}/>}} />
  
    </div>
    </BrowserRouter> ) : (
      <div>
       <Header />   
    <LoadingPage />

    </div>

    )}
    </>
  );
}

export default Tabs;