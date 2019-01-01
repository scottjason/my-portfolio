import React from 'react';
import { Container, ScrollView } from './Overlay.style';

const Overlay = ({ isOverlayAnimating, isOverlayInView, Component }) => (
  <Container>
    <ScrollView animate={isOverlayAnimating}>
      {Component}
    </ScrollView>
  </Container>
)

export default Overlay;
