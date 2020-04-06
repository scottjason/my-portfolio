import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../data';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAnimation = styled.div`
  position: relative;
  position: ${props => props.type === 'close' ? 'absolute' : 'relative'};
  left: 300px;
  display: flex;
  height: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  perspective: 1000;
  backface-visibility: hidden;
  transition: transform 200ms ease-in-out;
`;

export function applyStyle(Component, type) {
  
  let StyledComponent;
  
  const isSocial = type === 'social';
  const isSocialMobile = type === 'socialMobile';
  const isRightArrow = type === 'rightArrow';
  const isUpArrow = type === 'upArrow';
  const isClose = type === 'close';
  
  if (isSocial) {
    StyledComponent = styled(Component)`
      width: 15px;
      height: 15px;
      cursor: pointer;
      color: rgba(225, 225, 225, .85);
      margin: 0 8px;
      transition: all 250ms ease-in-out;
      &:hover {
        color: ${ORANGE_PRIMARY};
      }
    ${media.lessThan('1050px')`
      margin: 0 7px;
    `}
    `
  }  else if (isSocialMobile) {
    StyledComponent = styled(Component)`
      width: 15px;
      height: 15px;
      cursor: pointer;
      color: rgba(225, 225, 225, .85);
      transition: all 250ms ease-in-out;
      &:hover {
        color: ${ORANGE_PRIMARY};
      }
      @media screen and (orientation: landscape) and (max-width: 667px) {
        width: 14px;
        height: 14px;
      }
    `
  } else if (isRightArrow || isUpArrow) {
    StyledComponent = styled(Component)`
      width: 12px;
      height: 12px;
      margin: 0px 16px 0 9px;
    `
  } else if (isUpArrow) {
    StyledComponent = styled(Component)`
      position: absolute;
      left: 12px;
      width: 28px;
      height: 28px;
      bottom: 8px;
      color: ${ORANGE_PRIMARY};
      transition: transform 275ms ease-in-out;
    `
  } else if (isClose) {
    StyledComponent = styled(Component)`
      position: absolute;
      margin-top: 3px;
      margin-left: 100px;
      width: 21px;
      height: 21px;
      cursor: pointer;
      transition: all 225ms ease-in-out;
      color: ${ORANGE_PRIMARY};
      &:hover {
        transform: rotate(180deg);
      }
    ${media.lessThan('1050px')`
      display: none;
    `}
    `
  }
  return StyledComponent;
}
