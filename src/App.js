import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MyError from './Error/Error'
import Users from './Users/Users';
import AddUser from './AddUser/AddUser';
import Header from './Header/Header';
import User from './User/User';

class App extends Component {
  state = {
   
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="header">
          <h1 className="app-title">
            User DATA MANAGEMENT 
        </h1>
        </div>
        <Switch>
          <Route path="/error" component={MyError} />
          <Route path="/" exact component={Users} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/user-details/:id" component={User}/> 
          <Route component={MyError} />
        </Switch>


        

      </div>
    );
    
  }
}

export default App;
