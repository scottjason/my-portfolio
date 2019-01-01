import React from 'react';
import { Container, Highlight, H, P } from './Header.style';
import Mobile from './Header.mobile';

const Header = props => {
  const { 
    text, 
    subtext: { preHighlight, postHighlight, highlighted } 
  } = props;
  return(
    <Container>
      <H>{text}</H>
      <Mobile {...props} />
      <P>{preHighlight}<Highlight>{highlighted}</Highlight>{postHighlight}</P>
    </Container>
  )
};

export default Header;
