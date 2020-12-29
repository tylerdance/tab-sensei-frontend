import React, { Component } from 'react';
import Player from './Beats'


class BeatBank extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                      <Player />
                </div>
            </div>
         );
    }
}
 
export default BeatBank;
                