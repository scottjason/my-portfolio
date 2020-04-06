import React, { Component } from 'react';
import { OVERLAY_ANIMATION_TIME, SWITCH_ANIMATION_TIME } from '../data';
import { debounce } from 'throttle-debounce';
import inobounce from 'inobounce';

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
    constructor(props) {
      super(props);
      this.state = {
        tabSelected: null,
        isOverlayInView: false,
        isMobileNavInView: false,
        isOverlayAnimating: false,
        isMobileNavAnimating: false,
      };
      this.debouncedAnimateIn = debounce(125, this.animateIn);
      this.debouncedAnimateOut = debounce(125, this.animateOut);
    }
    componentDidUpdate() {
      const isEnabled = inobounce.isEnabled();
      const isOverlayInView = this.state.isOverlayInView;
      if (isEnabled && isOverlayInView) {
        inobounce.disable();
      } else if (isEnabled) {
        inobounce.enable();
      } else if (!this.state.tabSelected) {
        inobounce.enable()
      }
    }
    onClickTab = tabSelected => {
      const isLink = tabSelected.method === 'openLink';
      const isMobileNav = this.state.isMobileNavInView;
      if (isLink) {
        window.open(tabSelected.url, '_blank');
      } else if (isMobileNav) {
        this.onClickTabFromMobile(tabSelected);
      } else if (this.state.isOverlayInView) {
        this.debouncedAnimateOut(tabSelected);
      } else if (!this.state.isOverlayAnimating) {
        this.animateIn(tabSelected)
      } else {
        this.debouncedAnimateIn(tabSelected);
      }
    }
    onClickTabFromMobile(tabSelected) {
      this.setState({ isMobileNavInView: false, isMobileNavAnimating: false });
        this.animateIn(tabSelected);
    }
    onCloseOverlay = () => {
      this.setState({ isOverlayAnimating: false, isOverlayInView: false });
    }
    onToggleMobileNav = () => {
      const isMobileNavInView = this.state.isMobileNavInView;
      const isOverlayInView = this.state.isOverlayInView;
      if (isOverlayInView) {
        this.setState({ isOverlayAnimating: false  });
        setTimeout(() => {
          this.setState({ isOverlayInView: false, isMobileNavAnimating: false, isMobileNavInView: false });
        }, OVERLAY_ANIMATION_TIME);
      } else if (isMobileNavInView) {
          this.setState({ isMobileNavAnimating: false, isMobileNavInView: false  });
      } else {
          this.setState({ isMobileNavAnimating: true })
          setTimeout(() => {
            this.setState({ isMobileNavInView: true }); 
          }, OVERLAY_ANIMATION_TIME);
      }
    }
    isMatch({ displayName }) {
      return displayName === this.state.tabSelected.displayName;
    }
    animateOutMobile(tabSelected, cb) {
      if (this.isMatch(tabSelected)) {
        this.setState({ isOverlayAnimating: false  });
        setTimeout(() => {
          this.setState({ isOverlayInView: false });
        }, OVERLAY_ANIMATION_TIME);
      } else {
        this.setState({ isOverlayAnimating: false  });
        setTimeout(() => {
          this.animateInMobile(tabSelected);
        }, SWITCH_ANIMATION_TIME);
      } 
    }
    animateOut(tabSelected, cb) {
      if (this.isMatch(tabSelected)) {
        this.setState({ isOverlayAnimating: false, isOverlayInView: false  });
      } else {
        this.setState({ isOverlayAnimating: false  });
        this.animateIn(tabSelected);
      }
    }
    animateIn(tabSelected) {
      this.setState({ isOverlayAnimating: true, tabSelected, isOverlayInView: true });
    }
    animateInMobile(tabSelected) {
      this.setState({ isOverlayAnimating: true, tabSelected });
      setTimeout(() => {
        this.setState({ isOverlayInView: true });
      }, OVERLAY_ANIMATION_TIME);
    }
    shouldRenderBackdrop() {
      const { isOverlayInView, isOverlayAnimating, isMobileNavInView, isMobileNavAnimating } = this.state;
      return isOverlayInView || isOverlayAnimating || isMobileNavInView || isMobileNavAnimating;
    }
    render() {
      return(
        components.map((Component, idx) => {
          return (
            <Component
              {...this.state}
              key={idx}
              onClickTab={this.onClickTab}
              onCloseOverlay={this.onCloseOverlay}
              onToggleMobileNav={this.onToggleMobileNav}
              shouldRenderBackdrop={this.shouldRenderBackdrop()}
            />
          )
        })
      )
    }
  }
}

export default withAnimation;