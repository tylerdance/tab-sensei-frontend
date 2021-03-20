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
                    <div id="heading">
                        <div className='recTabs'>
                            <RecTabs />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Home;
                