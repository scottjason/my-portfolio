import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerAnimation = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  top: 0;
  left: ${props => props.type === 'upArrow' ? '-50px' : 'unset'}
  justify-content: space-between;
  align-items: center;
  perspective: 1000;
  backface-visibility: hidden;
  transition: transform 200ms ease-in-out;
  transform: translate3d(${props => props.slideInArrow ? '64px' : '0'}, 0, 0);
`;

export function applyStyle(Component, type) {
  
  let StyledComponent;
  
  const isSocialIcon = type === 'social';
  const isRightArrow = type === 'rightArrow';
  const isUpArrow = type === 'upArrow';
  const isClose = type === 'close';
  
  if (isSocialIcon) {
    StyledComponent = styled(Component)`
      width: 12px;
      height: 12px;
      cursor: pointer;
      color: rgba(225, 225, 225, .7);
      transition: all 250ms ease-in-out;
      &:hover {
        color: ${ORANGE_PRIMARY};
      }
    `
  } else if (isRightArrow || isUpArrow) {
    StyledComponent = styled(Component)`
      width: 14px;
      height: 14px;
      margin: 4px 7px 0 7px;
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
      top: 110px;
      left: -50px;
      width: 28px;
      height: 28px;
      color: ${ORANGE_PRIMARY};
    `
  }
  return StyledComponent;
}
