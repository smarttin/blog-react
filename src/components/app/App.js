import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../home/Home';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Post from '../post/Post';
import AuthRoute from '../../utils/AuthRoute';
import { AuthProvider } from '../../context/AuthContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <AuthRoute path="/register" exact={true} component={Register} />
            <AuthRoute path="/login" exact={true} component={Login} />
            <Route path="/post/:postId" component={Post} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
