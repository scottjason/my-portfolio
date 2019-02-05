import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Subtext, Role, Description, Span } from './Work.style';

const Work = () => {
  return(
    <Container>
      <Header>Oak Labs</Header>
      <Subtext isSlogan={true}>slogan</Subtext>
      <Subtext isHighlight={true}>site</Subtext>      
      <Role>Role</Role>
      <Subtext isDate={true}>Decdemne 20</Subtext>
       <Description>Collaborating with some very talented designers to revamp from the ground up the UI / UX / JS architecture. The first project's goal was to help give the brand a more polished presence to enable more user signups.</Description>
       <Description>Collaborating with some very talented designers to revamp from the ground up the UI / UX / JS architecture. The first project's goal was to help give the brand a more polished presence to enable more user signups.</Description>
      <Subtext isStack={true}>
        <Span
          isHighlight={false}
          margin={'0 3px 0 0'}
        >
        </Span>
        other
      </Subtext>
    </Container>
  )
}

export default Work;
