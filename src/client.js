/* src/client.js here we are doing React render in client way. */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('content')
);

