import React from 'react';
import './AddUser.css';
import axios from 'axios';
import { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { BaseApi, CreateUser } from '../constants/apiCalls';
class AddUser extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator();
    }
    state = {
        item: {
            "userName": "",
            "jobTitle": ""
        },
        selectedFile: []
    }

    addUser = async (e) => {
        if (this.validator.allValid()) {
            console.log(this.state.item)
            axios.post(
                BaseApi+CreateUser,
                {
                    "name": this.state.item.userName,
                    "job": this.state.item.jobTitle
                }
            ).then((response) => {
                console.log("Add Item Response")
                console.log(response.data);
                this.props.history.push('/')

            });
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }

    }

    componentDidMount() {

    }

    changeUserName = (ev) => {
        this.setState({
            item: {
                ...this.state.item,
                userName: ev.target.value
            }
        })
        console.log(this.state);
    }
    changeJobTitle = (ev) => {
        this.setState({
            item: {
                ...this.state.item,
                jobTitle: ev.target.value
            }
        })
    }
    

    render() {
        return (
            <div className="card">
                <h1>ADD User</h1>
                <form>
                    <fieldset>
                        <fieldset className="form-control">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="User name"

                                onChange={this.changeUserName}
                                onBlur={() => { this.validator.showMessageFor('userName'); this.forceUpdate(); }} />

                            <span className="error">{this.validator.message('userName', this.state.item.userName, 'required')}</span>
                        </fieldset>
                        <fieldset className="form-control">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Job Title"

                                onChange={this.changeJobTitle}
                                onBlur={() => { this.validator.showMessageFor('jobTitle'); this.forceUpdate(); }} />

                            <span className="error">{this.validator.message('jobTitle', this.state.item.jobTitle, 'required')}</span>
                        </fieldset>
                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="button" onClick={this.addUser}>
                            Add Item
                        </button>
                    </fieldset>
                </form>
            </div>


        );

    }
}

export default AddUser;