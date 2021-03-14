import React from 'react';
import './Users.css';
import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOADDATA } from '../constants/actionTypes';
import { connect } from 'react-redux';
import { BaseApi, GetAllUsers } from '../constants/apiCalls';

const mapStateToProps = state => ({ ...state.item });


const mapDispatchToProps = dispatch => ({

    onLoad: (data) => {
        dispatch({ type: LOADDATA, payload: data })
    }


});

class Users extends Component {
   

    loadData = async (e) => {
        console.log("Test");
        axios.get(BaseApi+GetAllUsers)
            .then((response) => {
                if (response && response.data) {
                    this.setState({ data: response.data.data })
                    this.props.onLoad(response.data.data)
                    console.log(this.state.data);
                }


            });

    }
    viewDetails = (id) => {
        console.log(id);
    }

    componentDidMount() {
        this.loadData()
    }
    renderData = () => {
        console.log(this.props)
        return this.props.items.map((item) => {
            const { id, first_name, email, avatar } = item //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{first_name}</td>
                    <td>{email}</td>
                    <td><img src={avatar} alt="File not found"></img></td>
                    <td><Link to={{ pathname: '/user-details/' + id }}>
                        Details
                    </Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="Ads">
                <table id="customers">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);