import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT, LOGIN } from '../constants/actionTypes';


const mapStateToProps = state => ({ ...state.auth });


const mapDispatchToProps = dispatch => ({
  logOut: () => {
    console.log("Before Dispatch");
    localStorage.clear();
    dispatch({ type: LOGOUT, payload: null })
  },
  resetToken: (data) => {
    console.log("Before Dispatch")
    dispatch({ type: LOGIN, payload: data })
  }

});






const HeaderView = (props) => {
  return (

    <div className="container loggedInView">
      <Link to="/" className="nav-link">
        Home
        </Link>

      <Link to="/add-user" className="nav-link">
        Add User
        </Link>


    </div>
  );
};



class Header extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.resetToken({
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      })
    }
  }


  render() {
    console.log(this.props)
    return (
      <nav className="header">
        <div className="container">
          <HeaderView />
        </div>
      </nav>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);