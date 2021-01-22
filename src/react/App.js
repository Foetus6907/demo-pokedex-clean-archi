import React, { Component} from "react";
import { Router } from "react-router-dom";
import {hot} from "react-hot-loader";
import AppLayout from "./layout/components/AppLayout";
import history from "../react/history";

class App extends Component{
    render(){
        return  <Router history={history}>
                    <AppLayout/>
                </Router>
    }
}

export default hot(module)(App);
