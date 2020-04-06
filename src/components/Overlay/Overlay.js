import React from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import {
  Inner,
  Container,
  ScrollView
} from './Overlay.style';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
  }
  componentDidUpdate() {
    const { isOverlayInView } = this.props;
    if (!isOverlayInView && this.scrollViewRef.current.scrollTop !== 0) {
      this.scrollViewRef.current.scrollTop = 0
    }
  }
  render() {
    const { isOverlayAnimating, Component, windowHeight } = this.props;
    return(
      <Container
        ref={this.scrollViewRef}
        height={`${windowHeight}px`}
        animate={isOverlayAnimating}
      >
        <Inner>
          <ScrollView >
            {Component}
          </ScrollView>
        </Inner>
      </Container>
    )
  }
};

Overlay.propTypes = {
  Component: PropTypes.object,
  isOverlayAnimating: PropTypes.bool.isRequired,
};

export default windowSize(Overlay);
