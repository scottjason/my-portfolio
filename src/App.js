import React from 'react';
import Favicon from 'react-favicon';
import Landing from './components/Landing/Landing';
import withAnimation from './containers/withAnimation';
import GlobalStyles, { AppContainer } from './App.style.js';
import NavbarContainer from './containers/NavbarContainer';
import ContentContainer from './containers/ContentContainer';

const faviconUrl = 'favicon/favicon.ico';

/* 
* 
* Enhance components that need animation state via withAnimation HOC
*
**/

const EnhancedWithAnimation = withAnimation(NavbarContainer, ContentContainer);

const App = () => (
  <AppContainer>
    <Favicon url={faviconUrl} />
    <GlobalStyles />
    <EnhancedWithAnimation />
    <Landing />
  </AppContainer>
);

export default App;
