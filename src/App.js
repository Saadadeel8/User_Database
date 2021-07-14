import React from 'react'
import UserRegistrationForm from './Components/Form/UserRegistrationForm'
import UserList from './Components/UserList'
import { Provider } from 'react-redux'
import store from './redux/Store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <Provider store= {store}> {/* To make the redux store available for all nested components*/}

    <Router>
    {/* Main Interface */}
    <div className="App">
      <div className='UserData'>
      <Link to={"/UserList"}><FontAwesomeIcon icon={faUser} size={'2x'} /> <br />Show Users</Link>
      <Link to={"/"}><FontAwesomeIcon icon={faUserPlus} size={'2x'} /> <br />Sign Up</Link>
      </div>
    </div>
    {/* !Main Interface */}

    <Switch>
        <Route exact path="/">
        <UserRegistrationForm />
        </Route>
        <Route path="/UserList">
          <UserList />
        </Route>
      </Switch>
    </Router>
 
  </ Provider>
 )}

export default App;
