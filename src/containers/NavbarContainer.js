/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { debounce } from 'debounce';
import { SOCIAL_DATA, NAVBAR_DATA } from '../constants';

class NavbarContainer extends Component {
  static defaultProps = {
    social: SOCIAL_DATA,
    navbar: NAVBAR_DATA,
  }
  openLink = url => {
    window.open(url, '_blank');
  }
  onClickIcon = url => {
    this.props.openLink(url);
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
    console.log('*** NavbarContainer', this.props)
    return(
      <Navbar
        tabs={this.generateTabs()}
        social={this.props.social}
        openLink={this.openLink}
        onClickTab={this.props.onClickTab}
      />
    )
  }
}

export default NavbarContainer;
