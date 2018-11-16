import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app'
import './index.css';

ReactDOM.render(<App />,
  document.getElementById('root'));