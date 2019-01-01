import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  html {
    height:100%;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: calc(14px + 1vw);
    font-family: 'Lato', sans-serif;
    line-height: calc(1.1em + 0.5vw);
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: auto;
    user-select: none;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;
`

/**
*
* Shared Styling
*
*/

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: -60px;
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: auto;
  height auto;
  text-align: center;
`;

export default GlobalStyles;
