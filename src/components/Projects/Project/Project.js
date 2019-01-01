/* eslint-disable no-unused-vars */

import React from 'react';
import { Container, Header, Subtext, Role, Description, Span } from './Project.style';

const Project = props => {
  const {
    name,
    subtext,
    stack,
    website,
    description,
    deployed,
    repo,
  } = props;
  return(
    <Container>
      <Subtext>{name}</Subtext>
      <Subtext>{subtext}</Subtext>
    </Container>
  )
}

export default Project;
