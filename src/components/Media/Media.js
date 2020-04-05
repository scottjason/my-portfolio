import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects/Projects';
import { Container, HeaderContainer, Header, Slash, LineSlider } from './Media.style';

const Media = props => {
  return(
    <Container>
      <HeaderContainer>
        <Header>
          projects
        </Header>
        <LineSlider />
        </HeaderContainer>
        <Projects />
    </Container>
  )
}

Media.propTypes = {};

export default Media;
