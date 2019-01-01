import React from 'react';
import { Container } from './Loader.style';

const Loader = ({ isDomContentLoaded }) => (
  <Container isLoaded={isDomContentLoaded} />
)

export default Loader;
