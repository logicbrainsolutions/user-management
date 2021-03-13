import React from 'react';
import './User.css';
import axios from 'axios';
import { Component } from 'react';
import { BaseApi, GetUserById } from '../constants/apiCalls';
class User extends Component {
    
    state = {
        data: []
    }
    loadData = async (itemId) => {
        console.log(BaseApi + GetUserById + itemId);
        axios.get(BaseApi + GetUserById + itemId)
            .then((response) => {

                if (response && response.data) {
                    console.log('response: ', response.data.data)
                    this.setState({ data: response.data.data });
                    console.log(this.state.data)
                }


            });

    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.loadData(params.id)
    }


    renderData = () => {

        const { id, email, first_name, last_name, avatar } = this.state.data //destructuring
        return (
            <div key={id}>
                <h1>{id}</h1>
                <h1>{first_name + " " + last_name}</h1>
                <p>{email}</p>
                <br />
                <img src={avatar} alt="File not found."></img>

            </div>

        )
    }

    render() {
        return (
            <div>
                <div className="Ads">
                    {this.renderData()}
                </div>

            </div>



        );

    }
}

export default User;