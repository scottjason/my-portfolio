import React from 'react';
import Favicon from 'react-favicon';
import Landing from './components/Landing/Landing';
import withAnimation from './containers/withAnimation';
import GlobalStyles, { AppContainer } from './App.style.js';
import NavbarContainer from './containers/NavbarContainer';
import ContentContainer from './containers/ContentContainer';

/* 
*
* 
* Enhance components that need animation state via withAnimation HOC
*
**/

const EnhancedWithAnimation = withAnimation(NavbarContainer, ContentContainer);

const App = () => (
  <AppContainer>
    <Favicon url='favicon/favicon.ico' />
    <GlobalStyles />
    <EnhancedWithAnimation />
    <Landing />
  </AppContainer>
);

export default App;
