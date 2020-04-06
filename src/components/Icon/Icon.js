import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  applyStyle,
  ContainerAnimation
} from './Icon.style';

const Icon = ({ type, Component, onClickIcon }) => {
  const StyledIcon = applyStyle(Component, type);
  const ContainerComponent = type === 'close'  ? ContainerAnimation : Container;
  return(
    <ContainerComponent type={type}>
      <StyledIcon onClick={onClickIcon} />
    </ContainerComponent>
  )
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  Component: PropTypes.object.isRequired,
  onClickIcon: PropTypes.func,
};

export default Icon;
