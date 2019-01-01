import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerObserver } from 'react-perf-devtool';
import initReactFastclick from 'react-fastclick';
import inobounce from 'inobounce';
import { isMobile } from 'react-device-detect';

/**
*
* Initialize Fast Click and inobounce (for mobile web on a native device)
*
*/
if (isMobile) {
  initReactFastclick();
  inobounce.enable();
}


/**
*
* Development Only
*
*/

const isLocalHost = (window.location.host || window.location.hostName).includes('localhost');
if (isLocalHost) {
  window.observer = registerObserver();
}


/**
*
* Render App
*
*/

ReactDOM.render(<App />, document.getElementById('root'));
