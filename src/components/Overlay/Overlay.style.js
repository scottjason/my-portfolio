import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ScrollView = styled.div`
  position: absolute;
  top: -480px;
  left: 0;
  right: 0;
  padding-left: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 400px;
  width: 100%;
  background-color: rgba(0, 0, 0, .9);
  color: white;
  z-index: 5;
  overflow: auto;
  transform-origin:top; 
  perspective: 1000;
  backface-visibility: hidden;
  transition: transform 275ms ease-in-out;
  transform: translate3d(0, ${props => props.animate ? '10px' : '-110%'}, 0);
`;
