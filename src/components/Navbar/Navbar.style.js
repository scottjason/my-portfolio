import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { isMobile } from 'react-device-detect';
import { Gradient } from '../../App.style';
import {
  ORANGE_PRIMARY,
  APP_MAX_WIDTH,
  BREAKPOINT_SIZES
} from '../../data';

const { portrait } = BREAKPOINT_SIZES;

export const Container = styled.nav`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  width: 100vw;
  min-width: 420px;
  z-index: 10;
  background-color: rgba(0, 0, 0, .7);
  color: white;
  margin: 0 auto;
  overflow: hidden;
  ${media.lessThan(portrait.medium)`
    display: none;
  `};
`;

export const ContainerMobile = styled.nav`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  max-height: 80px;
  width: 100vw;
  background-color: rgba(0, 0, 0, .7);
  color: white;
  margin: 0 auto;
  z-index: 10;
  border-bottom: 1px solid rgba(225, 225, 225, .2);
  ${media.lessThan(portrait.medium)`
    display: flex;
    align-items: center;
 `};
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 30;
  ${media.lessThan(portrait.medium)`
    text-align: left;
  `}
  ${isMobile && css`
    padding-top: 10px;
  `};
`;

export const SectionTop = styled.section`
  position: ${props => props.isMobile ? 'relative' : 'absolute'};
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  flex-shrink: 0;
  justify-content: ${props => props.isMobile ? 'center' : 'space-between'};
  max-width: 1440px;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  width: 100%;
  height: 30px;
  max-width: ${APP_MAX_WIDTH};
  transition: all 250ms ease-in-out;
  ${props => props.isMobile && css`
    padding-left: 22px;
 `}
`;

export const SectionBottom = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1440px;
  bottom: 0;
  width: 100%;
  height: 50%;
  max-width: ${APP_MAX_WIDTH};
  ${media.lessThan(portrait.medium)`
    display: none;
  `}
`;

export const NavTabs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  color: ${props => props.isActive ? ORANGE_PRIMARY : 'rgba(225, 225, 225, 1)'};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2rem;
  cursor: pointer;
  letter-spacing: .3rem;
  transition: all 150ms ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${ORANGE_PRIMARY};
  }
`;

export const Logo = styled(Gradient)`
  position: relative;
  left: 30px;
  color: white;
  top: 12px;
  font-size:16px;
  line-height: 1.1rem;
  font-weight: 400;
  letter-spacing: .2rem;
  &:nth-child(2) {
    left: unset;
    right: 30px;
    ${media.lessThan('1050px')`
      display: none;
    `}
  }
  ${media.lessThan(portrait.medium)`
    display: none;
  `}
`;

export const LogoMobile = styled.p`
  display: none;
  position: relative;
  ${media.lessThan(portrait.medium)`
    display: block;
    line-height: 24px;
    font-size: ${isMobile ? '21px' : '22px'};
    letter-spacing: ${isMobile ? '.1rem' : '.2rem'};
    font-weight: 400;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: ${ORANGE_PRIMARY};
    ${isMobile && css`
      margin-top: -10px;
      letter-spacing: 5px;
   `}
  `}
`;

export const SubtextMobile = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 5px;
  font-weight: 400;
  line-height: 13px;
  color: white;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 100%;
  height: 1px;
  max-width: 1440px;
  background-color: ${props => props.lighten ? 'rgba(225, 225, 225, .2)' : 'rgba(225, 225, 225, .3)'};
`;

export const Highlight = styled.span`
  color: ${ORANGE_PRIMARY};
`;
