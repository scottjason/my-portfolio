/* eslint-disable no-unused-vars */

import React, { Component, Fragment } from 'react';
import { OVERLAY_ANIMATION_TIME, SWITCH_ANIMATION_TIME } from '../constants';

/**
*
* Higher Order Component: withAnimation
* 
* Shares animation state throughout components that depend on it.
* Components that require animation state: Navbar, Content, Overlay 
*
*/

const withAnimation = (...components) => {
  return class extends Component {
    state = {
      tabSelected: null,
      isOverlayAnimating: false,
      isBtnAnimating: false,
      isOverlayInView: false,
    }
    onClickTab = tabSelected => {
      if (this.state.isOverlayInView) {
        this.animateOut(tabSelected);
      } else {
        this.animateIn(tabSelected);
      }
    }
    isMatch({ displayName }) {
      return displayName === this.state.tabSelected.displayName;
    }
    animateOut(tabSelected) {
      if (this.isMatch(tabSelected)) {
        this.setState({ isOverlayAnimating: false  });
        setTimeout(() => {
          this.setState({ isOverlayInView: false });
        }, OVERLAY_ANIMATION_TIME);
      } else {
        this.setState({ isOverlayAnimating: false  });
        setTimeout(() => {
          this.animateIn(tabSelected);
        }, SWITCH_ANIMATION_TIME);
      }
    }
    animateIn(tabSelected) {
      this.setState({ isOverlayAnimating: true, tabSelected });
      setTimeout(() => {
        this.setState({ isOverlayInView: true });
      }, OVERLAY_ANIMATION_TIME);
    }
    render() {
      console.log("*** withAnimation state", this.state)
      return(
        components.map((Component, idx) => {
          return (
            <Component
              {...this.state}
              key={idx}
              onClickTab={this.onClickTab}
            />
          )
        })
      )
    }
  }
}

export default withAnimation;
