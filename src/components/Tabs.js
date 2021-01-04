import React, { Component } from 'react';
import Axios from 'axios'; 
import Videos from './Videos';
import TabResults from './TabResults';
import BeatBank from './BeatBank';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: [],
            starships2: [],
            search:'',
            email: props.email,
            loading: true
        }
        // console.log("my tabs one  " + this.state.email)
    }

    async componentDidMount() {
        setTimeout(
            function() {
                this.setState({ loading: false });
            }
            .bind(this),
            3000
        );
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        // console.log('successful');
        // console.log(res.data);
        // console.log("Hello Guys" + this.state.email)
        this.setState({
            starships: res.data
        })
        const res2 = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/youtube/${this.state.search}`)
        // console.log('videos');
        // console.log(res2.data);
        this.setState({
            starships2: res2.data
        })
    }

    render() {
            return(
                <div className="bigApp">
                    <div id="youTube">
                        {this.state.loading===true?
                        <h1>Loading</h1>:
                        <div></div>}
                        <Videos className="Videos" videos={this.props.videos} />
                     </div>
                    <div id="tabSearch ">
                        <div id="starships">
                            <TabResults tabs={this.props.tabs} email={this.props.email} toggle={this.props.toggle} />
                        </div>  
                    </div>
                    <div id="beatBankHome">
                    <div id="beatBank">
                        <BeatBank />
                    </div>
                    </div>
              </div>
            )
    }
}
export default Tabs;