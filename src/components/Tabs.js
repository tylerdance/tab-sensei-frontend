
import React, { Component } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
import Videos from './Videos'
// import '../home.css';
import TabResults from './TabResults';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const REACT_APP_YOU_TUBE_API_KEY = process.env.REACT_APP_YOU_TUBE_API_KEY;
class Tabs extends Component {
    constructor() {
        super()

        this.state = {
            starships: [],
            starships2: [],
            search:''
        }
    }
    
 
    async componentDidMount() {
       
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        console.log('successful');
        console.log(res.data);
       
        
        this.setState({
            starships: res.data,
         
        })

        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${this.state.search}`)
        console.log('videos');
       
        console.log(res2.data);
       
        
        this.setState({
            starships2: res2.data,
         
        })
    }
    
    
    // componentDidUpdate(prevProps, prevState) {
    // if (this.state.starships === '') {
        
    //     return;
    // }
    // if (prevState.starships === this.state.starshipName) {
    //     return;
    // }
    // Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`).then((res) => {
    // }).catch(err => {
    //     console.log(err);
    // })
   
    // }
    handleClick=async()=>{
     
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        // console.log('successful');
        // console.log(res.data);
       
        
        this.setState({
            starships: res.data,
         
            
        })

        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${this.state.search}`)
        console.log('videos');
        console.log(res2.data.items);
      
        
        this.setState({
            starships2: res2.data.items,
         
        })

    }
    render() {
        return(
            <div className="App">
              <h2 id="header">ギタルのタブです</h2>
              <div>
                      <label>Search for Tabs</label> 
                      <br/>     
                      <input id="inputSearchbar" type="text" onChange={(e=>{this.setState({search: e.target.value})})}></input>
                      <br/>  
                      <button onClick={this.handleClick} >Search Tabs</button>
                      </div>
              <div id="results">

              

              <Videos className="Videos" videos={this.state.starships2} />
              <div id="starships">
                  {/* {this.state.starships.map((starship, index) => */}
                  
                  {/* <form onSubmit={console.log('line 49 submit ' + this.state.search)}> */}
                      

                  {/* </form>  */}
                  <TabResults tabs={this.state.starships} />
                 
            
              </div>
              </div>
          </div>
        )
    }
}

export default Tabs;