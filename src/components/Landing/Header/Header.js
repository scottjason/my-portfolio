import React from 'react';
import { Container, Highlight, H, HM, P, Line } from './Header.style';

const Header = props => {
  const {
    text,
    mobileText,
    mobileSubtext,
    subtext: { preHighlight, postHighlight, highlighted },
  } = props;
  return (
    <Container>
      <H>{text}</H>
      <Line />
      <HM>{mobileText}</HM>
      <HM>{mobileSubtext}</HM>
      <P>
        {preHighlight}
        <Highlight>{highlighted}</Highlight>
        {postHighlight}
      </P>
    </Container>
  );
};

export default Header;
