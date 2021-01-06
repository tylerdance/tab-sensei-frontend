import React, { Component } from 'react';
import Axios from 'axios';
import ShowMyTabs from './ShowMyTabs';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class GetMytabs extends Component{
    constructor(props){
        super(props)

        this.state ={
            mytabs: []
            
        } 
    }

    async componentDidMount(){
    
    await this.setState({email: this.props.email})
    // console.log("line 14 " + this.props.email)
    await Axios.get(`${REACT_APP_SERVER_URL}/api/users/mytabs/${this.props.email}`)
    .then(res=>{this.setState({ mytabs: res.data.user[0].song_list})})
    .catch(err=>{
        // console.log(err)
    });
    }

    async componentDidUpdate(prevProps){
    if(this.props.newtab!==prevProps.newtab && this.props.newtab){
        await this.setState({email: this.props.email})
    // console.log("line 14 " + this.props.email)
    await Axios.get(`${REACT_APP_SERVER_URL}/api/users/mytabs/${this.props.email}`)
    .then(res=>{
        console.log('tabs updated');
        this.setState({ mytabs: res.data.user[0].song_list})})
    .catch(err=>{
        // console.log(err)
    });
    }
    }

    render(){
        return(
            <div>
                <ShowMyTabs mytabs={this.state.mytabs} email={this.props.email} toggle={this.props.toggle}/>
            </div>
        )
    }
  
}

export default GetMytabs;