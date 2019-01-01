import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { ORANGE_PRIMARY } from './constants';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: calc(16px + 1vw);
    font-family: 'Lato', sans-serif;
    line-height: calc(1.1em + 0.5vw);
    background-color: black;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
  h1, h2, h3, h4, h5, h6, p, a, li, ul {
    margin: 0;
    padding: 0;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden scroll;
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent; /* make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

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

export const Gradient = styled.div`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -ms-background-clip: text;
  -ms-text-fill-color: transparent;
  -o-background-clip: text;
  -o-text-fill-color: transparent;
   background-color: #fff;
   line-height: .5rem;
   letter-spacing: .2rem;
   background: linear-gradient(to right, white 0%, ${ORANGE_PRIMARY} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default GlobalStyles;
