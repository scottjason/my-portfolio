import React, { Component } from 'react';
import inobounce from 'inobounce';
import { isMobile } from 'react-device-detect';

const withBounce = WrappedComponent => {
  return class extends Component {
    state = {
      isMobile: isMobile,
      isBounceEnabled: inobounce.isEnabled(),
    }
    enable() {
      inobounce.enable();
      this.setState();
    }
    disable() {
      inobounce.disable();
      this.setState();
    }
    isEnabled() {
      return this.state.isEnabled;
    }
    render() {
      return(
        <WrappedComponent
          {...this.state}
          enable={this.enable}
          disable={this.disable}
        />
      )
    }
  }
};

export default withBounce;
