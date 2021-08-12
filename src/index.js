import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/movie/:id" component={Movie}/> 
    <Route path="/search/:q" component={Search}/> 
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
