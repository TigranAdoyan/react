import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import store from "./ReduxStore/ReduxStore";


window.store = store;
// Rendering App Component to Dom
ReactDOM.render(<MainApp />, document.getElementById('root'));