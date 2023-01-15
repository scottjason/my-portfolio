import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY, BREAKPOINT_SIZES } from '../../../data';
const { portrait } = BREAKPOINT_SIZES;

export const Btn = styled.button`
  position: absolute;
  display: flex;
  padding: 17px;
  align-items: center;
  background-color: black;
  color: white;
  border: 1px solid #fd845c;
  font-weight: 300;
  border-radius: 5px;
  bottom: -80px;
  // right: -45px;
  outline-color: transparent;
  outline-style: none;
  cursor: pointer;
  min-width: 250px;
  color: rgba(225, 225, 225, 0.95);
  transition: all 150ms ease-in-out;
  ${media.lessThan(portrait.medium)`
    width: 70%;
    padding: 15px;
    margin: 10px auto 0 auto;
    left: 0;
    right: 0;
  `}
  &:hover {
    color: ${ORANGE_PRIMARY};
    font-weight: 300;
    border: 1px solid black;
    background-color: white;
  }
`;

export const Span = styled.span`
  text-align: center;
  font-size: 1rem;
  margin: 0 auto;
  letter-spacing: 2px;
`;
