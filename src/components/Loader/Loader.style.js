import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: ${props => props.isLoaded ? '0' : '1'};
  z-index: ${props => props.isLoaded ? '-1' : '101'};
  transition: all .7s ease-in-out;
`;
