import React, { Component } from 'react';
import "./LoginPage.css";
import axios from 'axios';

import {baseUrl, axiosHeaders} from  "../../utils/constants";
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios({
            method:"POST",
            data: {
                email:this.state.email,
                password:this.state.password,
            },
            withCredentials:true,
            url: `${baseUrl}user/login`,
            // headers: axiosHeaders.headers,
        })
        .then((res) => console.log(res))
        .catch(err => console.log(err)); 
    }
    handleEmailChange(event) {
        this.setState({email:event.target.value});
        console.log(this.state.email);
    }
    handlePasswordChange(event) {
        this.setState({password:event.target.value});
        console.log(this.state.password);
    }
    render() {
        return (
            <div className="login-form">
                <div className="center-align">
                    <h2>Login</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleEmailChange} placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handlePasswordChange} placeholder="Password"/>
                    </div>
                    <div className="center-align">
                        <button type="submit" className="btn btn-sm btn-primary btn-custom">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}