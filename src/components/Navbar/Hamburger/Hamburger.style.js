import styled from 'styled-components';
import media from 'styled-media-query';
import { BREAKPOINT_SIZES, ORANGE_PRIMARY } from '../../../constants';

const { portrait } = BREAKPOINT_SIZES;

export const Container = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  top: 30px;
  right: 22px;
  border-radius: 3px;
  width: auto;
  cursor: pointer;
  ${media.lessThan(portrait.medium)`
    display: block;
  `}
`;

export const Bar = styled.span`
  display: block;
  width: 40px;
  margin-bottom: 13px;
  height: 1px;
  background-color: ${ORANGE_PRIMARY};
  border-radius: 1px;
  transition: .25s ease-in-out;
  &:first-child {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(7px, 5px)' : 'unset' };
  }
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1' };
  }
  &:last-child {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(13px, -15px)' : 'unset' };
  }
`;
