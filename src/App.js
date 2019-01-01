import React from 'react';
import Landing from './components/Landing/Landing';
import withAnimation from './containers/withAnimation';
import GlobalStyles, { AppContainer } from './App.style.js';
import NavbarContainer from './containers/NavbarContainer';
import ContentContainer from './containers/ContentContainer';

/* 
*
* Use HOC to inject animation state 
*
**/
const EnhancedContainers = withAnimation(NavbarContainer, ContentContainer);

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Landing />
    <EnhancedContainers />
  </AppContainer>
);

export default App;
