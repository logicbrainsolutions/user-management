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
          <Route path="/item-details/:id" component={User}/> 
          <Route component={MyError} />
        </Switch>


        {/* <button onClick={() => this.switchNameHandler('NEW NAME')}>Switch Name</button>

        <button onClick={this.switchNameHandler.bind(this, 'Uzair')}>Switch Name</button>
        <Person name={this.state.persons[0].name} changed={this.nameChangeHandler}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler} /> */}

      </div>
    );
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Just test dynamic element!'))
  }
}

export default App;
