import React from 'react';
import PropTypes from 'prop-types';
import { Container, Bar } from './Hamburger.style';

const Hamburger = ({ onToggleMobileNav, isMobileNavInView, isOverlayInView, shouldRenderBackdrop }) => {
  return(
    <Container onClick={onToggleMobileNav}>
      <Bar isOpen={shouldRenderBackdrop} />
      <Bar isOpen={shouldRenderBackdrop} />
      <Bar isOpen={shouldRenderBackdrop} />
    </Container>
  )
}

Hamburger.propTypes = {
  onToggleMobileNav: PropTypes.func.isRequired,
  isOverlayInView: PropTypes.bool.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  shouldRenderBackdrop: PropTypes.bool.isRequired,
};

export default Hamburger;
