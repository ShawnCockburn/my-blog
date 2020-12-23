import React from 'react'
import  { 
    BrowserRouter, 
    Switch, 
    Route 
  } from 'react-router-dom'
import Home from '../Screens/Home';
import NoMatch from '../Screens/NoMatch';
import Post from '../Screens/Post';

const Nav = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post/:postID" component={Post}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Nav
