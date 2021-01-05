import React, { Component } from 'react';
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
            <h2 id="featured_tabs">Featured Tabs</h2>
            <div id="heading">
            <div className='recTabs'>
        
            <RecTabs />
                </div>
                </div>
            <div className='home_elements'>
                <div className='tabs'>
                </div>
            </div>
            </div>
            </>
        );
    }
}
 
export default Home;
                