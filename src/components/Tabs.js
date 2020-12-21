
import React, { Component } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
// import '../home.css';
import TabResults from './TabResults';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Tabs extends Component {
    constructor() {
        super()

        this.state = {
            starships: [],
        }
    }

    async componentDidMount() {
       
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/test`)
        console.log('successful');
        console.log(res.data);
       
        
        this.setState({
            starships: res.data
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
    if (this.state.starships === '') {
        return;
    }
    if (prevState.starships === this.state.starshipName) {
        return;
    }

    Axios.get(`${REACT_APP_SERVER_URL}/api/request/test`).then((res) => {
        // console.log("!!!!!" + res)
    }).catch(err => {
        console.log(err);
    })
    }

    render() {
        return(
            <div className="App">
              <h2 id="header">Starships</h2>
              <div id="starships">
                  {/* {this.state.starships.map((starship, index) => */}
                  <TabResults tabs={this.state.starships}/>
                        {/* // <Link id="starship-link"
                        // key={starship.name}
                        // to={{
                        //     pathname: '/starship',
                        //     state: starship
                        // }}
                        // >
                        // {starship.name}
                        // </Link>
                  )} */}
              </div>
          </div>
        )
    }
}

export default Tabs;