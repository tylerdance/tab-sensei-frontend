
import React, { Component } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
import Videos from './Videos'

// import '../home.css';
import TabResults from './TabResults';
import { computeHeadingLevel } from '@testing-library/react';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Tabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            starships: [],
            starships2: [],
            search:'',
            email: props.email
        }
        console.log("my tabs one  " + this.state.email)
       
    }
    



    
    
 
    async componentDidMount() {
       
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        console.log('successful');
        console.log(res.data);
        console.log("Hello Guys" + this.state.email)
        
        this.setState({
            starships: res.data
       
            
        })

        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${this.state.search}`)
        console.log('videos');
       
        console.log(res2.data);
       
        
        this.setState({
            starships2: res2.data
         
        })
    }
    
 
    handleClick=async()=>{
     
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
    
       
        
        this.setState({
            starships: res.data,
            email: this.props.email
            
        })

        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${this.state.search}`)
        console.log('videos');
        console.log(res2.data.items);
      
        
        this.setState({
            starships2: res2.data.items,
         
        })

    }
    render() {
        console.log("hi for the last time " + this.state.email)
        return(
            <div className="bigApp">
                <div id="youTube">
             <Videos className="Videos" videos={this.state.starships2} />
             </div>
             <div id="tabSearch">
              <div>
                      <label>Search for Tabs</label> 
                      <br/>     
                      <input id="inputSearchbar" type="text" onChange={(e=>{this.setState({search: e.target.value})})}></input>
                      <br/>  
                      <button onClick={this.handleClick} >Search Tabs</button>
                      </div>
              <div id="results">

              

             
              <div id="starships">
                  {/* {this.state.starships.map((starship, index) => */}
                  
                  {/* <form onSubmit={console.log('line 49 submit ' + this.state.search)}> */}
                      

                  {/* </form>  */}
                  <TabResults tabs={this.state.starships} email={this.state.email} />
                  
     
                 
            
              </div>
              </div>
              </div>
          </div>
        )
    }
}

export default Tabs;