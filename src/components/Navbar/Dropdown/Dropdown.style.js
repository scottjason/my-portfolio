import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../../data';

export const Container = styled.div`
  position: absolute;
  top: -330px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transition: all 225ms linear;
  z-index: 10;
  transform: ${props => props.animate ? 'translateY(410px)' : 'translateY(-330px)'};
`;

export const Tab = styled.li`
  position: relative;
  display: flex;
  font-weight: 400;
  font-size: 21px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  cursor: pointer;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  background-color: ${props => 'black'};
  border-bottom: 1px solid rgba(225, 225, 225, .4);
  transition: all 250ms ease-in-out;
  &:first-child {
    border-top: 1px solid rgba(225, 225, 225, .4);
  }
  &:hover {
    color: ${ORANGE_PRIMARY};
  }
`;
