import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import './App.css';
// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Tabs from './components/Tabs';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [tabs, setTabs] = useState([])
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);

    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} user={currentUser} tabs={setTabs} videos={setVideos} search={setSearch}/>
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route exact path='/' component={ Home } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          {/* <Route path='/about' component={ About } /> */}
          <PrivateRoute path="/profile" component={ Profile } user={currentUser} tabs={tabs} videos={videos}/>
          {/* <Route path="/results" component={ Tabs }   user={currentUser} tabs={tabs} videos={videos}/> */}
          <Route path="/results" render={()=>{
             return <Tabs email={currentUser ? currentUser.email: null} tabs={tabs} videos={videos} /> 
          }} />
       
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;