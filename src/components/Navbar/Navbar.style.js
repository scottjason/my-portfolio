import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../constants';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 85px;
  width: 100vw;
  z-index: 10;
  background-color: rgba(0, 0, 0, .7);
  color: white;
  box-shadow: 0px 2px 1px -1px rgba(225,225,225, 0.6);
`;

export const SectionTop = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(225, 225, 225, .2);
`
export const SectionBottom = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 45px;
`

export const NavTabs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  width: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  color: ${props => props.isActive ? ORANGE_PRIMARY : 'white'};
  text-decoration: none;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${ORANGE_PRIMARY};
  }
`;

export const Logo = styled.div`
  position: absolute;
  bottom: -12px;
  left: 20px;
  color: white;
  font-size: 13px;
  line-height: 2.5rem;
  font-weight: 300;
  letter-spacing: .25rem;
  &:nth-child(2) {
    left: unset;
    right: 20px;
    font-size 13px;
  }
`

export const ArrowSlider = styled.div`
  position: relative;
`

export const Highlight = styled.span`
  color: ${ORANGE_PRIMARY};
`;
