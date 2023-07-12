//Initials
import React from 'react';
import ReactDOM from 'react-dom';

//Libraries
import { BrowserRouter as Router } from "react-router-dom";

//Components
import * as serviceWorker from './serviceWorker';
import AppRouter from "./AppRouter"

//Style
import "./indexRem.css"

ReactDOM.render(
    
    <Router>
        <AppRouter />
    </Router>,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
