import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import { SOCIAL_DATA, NAVBAR_DATA } from '../constants';

class NavbarContainer extends Component {
  static defaultProps = {
    social: SOCIAL_DATA,
    navbar: NAVBAR_DATA,
  };
  openLink = ({ url }) => {
    window.open(url, '_blank');
  }
  isMatch(tab) {
    return this.props.tabSelected &&
      this.props.tabSelected.componentName === tab.componentName;
  }
  generateTabs() {
    const { isInView, isOverlayAnimating } = this.props;
    return this.props.navbar.map(tab => {
      const isMatch = this.isMatch(tab);
      if (isMatch && (isInView || isOverlayAnimating)) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
      return tab;
    });
  }
  render() {
    const { social, onClickTab, isMobileNavInView, isOverlayInView, isMobileNavAnimating, onToggleMobileNav, shouldRenderBackdrop } = this.props;
    return(
      <Navbar
        {...this.state}
        openLink={this.openLink}
        tabs={this.generateTabs()}
        social={social}
        onClickTab={onClickTab}
        isOverlayInView={isOverlayInView}
        isMobileNavInView={isMobileNavInView}
        isMobileNavAnimating={isMobileNavAnimating}
        onToggleMobileNav={onToggleMobileNav}
        shouldRenderBackdrop={shouldRenderBackdrop}
      />
    )
  }
}

NavbarContainer.propTypes = {
  social: PropTypes.array.isRequired,
  navbar: PropTypes.array.isRequired,
  onClickTab: PropTypes.func.isRequired,
  isOverlayInView: PropTypes.bool.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  isOverlayAnimating: PropTypes.bool.isRequired,
  isMobileNavAnimating: PropTypes.bool.isRequired,
  onToggleMobileNav: PropTypes.func.isRequired,
  shouldRenderBackdrop: PropTypes.bool.isRequired,
};

export default NavbarContainer;
