import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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

ReactDOM.render(<App />, document.getElementById('root'));
