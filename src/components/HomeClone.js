import React, { Component } from 'react';

import Tabs from './Tabs'
import BeatBank from './BeatBank'
import RecTabs from './RecTabs'
import { useParams } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
               email: this.props.email
         }
         console.log("my home one" + this.state.email)
    }
//     async componentDidMount() {
//          await this.setState({email: this.props.email})
//         console.log( 'home2 ' + this.state.email )

// }


    render() { 
        return ( 
            <> 
            <div >
           
        
            <h2 id="featured_tabs">Featured Tabs</h2>
            <div id="heading">
           
            <div className='recTabs'>
        
                    <RecTabs />
                </div>
                </div>
            <div className='home_elements'>
            
                <div className='tabs'>
                    <Tabs email={this.props.email} toggle={this.props.toggle}/>
                </div>
              
            </div>
            </div>
            </>
         );
    }
}
 
export default Home;
                