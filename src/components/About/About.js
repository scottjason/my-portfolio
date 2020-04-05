import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'styled-icons/material';
import Icon from '../Icon/Icon';

import {
  Text,
  Line,
  Header,
  HeaderContainer,
  Highlight,
  Container,
  BlueHighlight,
} from './About.style';

const About = props => {
  const { onCloseOverlay } = props;
  return(
    <Container>
      <HeaderContainer>
       <Header>a few words about me</Header>
        <Icon
          onClickIcon={onCloseOverlay}
          type={'close'}
          Component={Close}
        >
        </Icon>
     </HeaderContainer>
     <Line isHeader={true} />
      <Text isFirst={true}>I'm a product and design-oriented senior frontend engineer who loves all things javascript.</Text>
      <BlueHighlight>I have somewhat of an unusual background; a very creative background rooted in music, software and aesthetics.</BlueHighlight>
      <Text>I built and deployed my first website in 1999. I had started a <Highlight href={'//en.wikipedia.org/wiki/Thriving_Ivory'} target={'_blank'}>band</Highlight> in college and needed to develop an online presence.</Text>
      <Text>I've always been a tinkerer at heart but it wasn't until midway through my sophomore year of college where I found myself actually needing a more robust solution- the first single started taking off at radio all over the world.</Text>
      <Line />
      <Text>Moving forward, I taught myself the fundamentals of basic web development while simultaneously working as a professional musician. I used an old PHP framework to build a fan community and collected and stored the fan data in a MSQL database. Years later, the band was signed and I handed the technical aspect off to the "new media" department of the label. The first single went RIAA Certifed Gold and won Apple's vote for <Highlight href={'//www.youtube.com/watch?v=S38-mjy5NtA'} target={'_blank'}>top 10 most influential songs of the 21st century's first decade.</Highlight></Text>
      <Text>I was continuously updating and revamping the site, mostly focusing on frontend as the backend didn't change much once it was set up.</Text>
      <Text>A few years later I left the music industry and continued my other <Highlight href={'https://hackernoon.com/understanding-functional-programming-with-javascript-41eb3fa8c2a'} target={'_blank'}>passion for software</Highlight>. I moved to San Francisco, attended a bootcamp and eventually got my first real job as an actual software engineer.</Text>
      <Line />
      <Text>Fast-forward to 2020 and I have five plus years of professional experience. I have worked on everything from intelligent mirrors to grocery delivery apps and throughout all this I've developed a whole new passion for <Highlight href={'//reactjs.org/'} target={'_blank'}>all things frontend.</Highlight></Text>
      <Text>As for music, I still release the occasional song and peform one or two shows a year for <Highlight href={'//angelsonthemoon.org'} target={'_blank'}>charitable</Highlight> causes.</Text>

    </Container>
  )
};

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    isHeading: PropTypes.bool,
    highlightByIdx: PropTypes.array.isRequired,
    highlightByString: PropTypes.array.isRequired,
  })).isRequired,
};

export default About;
