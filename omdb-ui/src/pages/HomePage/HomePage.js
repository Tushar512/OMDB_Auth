import React from 'react';
import {useHistory} from 'react-router-dom';
import logo from "../../images/logo.png";
import "./HomePage.css";

export default function HomePage() {
    const history = useHistory();
    const login = () => {
        console.log("Login");
        history.push("/login");
    };
    const signup = () => {
        console.log("Signing Up");
        history.push("/signup")
    };
    return (
        <div className="container">
            <div className="jumbotron-custom">
                <div className="center-align logo">
                    <img src={logo} width="60" alt="Logo"/>
                    <span> MovieSearch </span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="center-align">
                    <button className="btn btn-md btn-default btn-custom" onClick={login}> Login</button>
                    <button className="btn btn-md btn-default btn-custom" onClick={signup}> Sign Up</button>
                </div>
            </div>           
        </div>
    )
}