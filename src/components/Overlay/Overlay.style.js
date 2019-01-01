import styled from 'styled-components';
import { APP_MAX_WIDTH } from '../../constants';

const navHeight = '80px';

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 85px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  z-index: 5;
  color: white;
  height: auto;
  min-height: calc(100vh - ${navHeight});
  transform: ${props => props.animate ? 'scaleY(1)' : 'scaleY(0)'};    
  transform-origin: top;
  backface-visibility: hidden;
  background-color: black;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
`;

export const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
  width: auto;
  max-width: ${APP_MAX_WIDTH};
`;

export const ScrollView = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, .9);
  overflow: hidden auto;
`;
