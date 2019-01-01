import React from 'react';
import { Container, applyStyle, ContainerAnimation } from './Icon.style';

const Icon = ({ type, Component, onClickIcon, slideInArrow }) => {
  const StyledIcon = applyStyle(Component, type);
  const ContainerComponent = type = 'close'  ? ContainerAnimation : Container;
  return(
    <ContainerComponent slideInArrow={slideInArrow}>
        <StyledIcon
          onClick={onClickIcon}
        />
    </ContainerComponent>
  )
};

export default Icon;
