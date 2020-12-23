import React, { Component } from 'react';

import Tabs from './Tabs'
import BeatBank from './BeatBank'
import RecTabs from './RecTabs'

class Home extends Component {
    constructor() {
        super();
        this.state = { 

         }
    }
    render() { 
        return ( 
            <> 
            <div className='home_elements'>
            <div className='recTabs'>
                    <RecTabs />
                </div>
                <div className='tabs'>
                    <Tabs />
                </div>
                <div className='beatBank'>
                    <BeatBank />
                </div>
            </div>
            </>
         );
    }
}
 
export default Home;
                