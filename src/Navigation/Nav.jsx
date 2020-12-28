import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import ProtectedRoute from '../Auth/ProtectedRoute';
import Home from '../Screens/Home';
import NoMatch from '../Screens/NoMatch';
import Post from '../Screens/Post';
import Login from '../Screens/Login';
import Admin from '../Screens/Admin';
import EditPost from '../Screens/EditPost';

const Nav = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:postID" component={Post} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/admin" component={Admin}/>
      <ProtectedRoute path="/new-post" component={EditPost}/>
      <ProtectedRoute path="/edit-post" component={EditPost}/>
      <Route component={NoMatch} />
    </Switch>
  )
}

export default Nav
