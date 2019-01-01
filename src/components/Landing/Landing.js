import React from 'react';
import image from '../../portfolio-bg.jpg';
import { Img } from './Landing.style';
import { LANDING_DATA } from '../../constants';
import { Container, Inner } from '../../App.style';
import Header from './Header/Header';
import Button from './Button/Button';

const Landing = () => {
  const { headerData, buttonData } = LANDING_DATA;
  const openLink = url => window.open(url, '_blank');
  return(
    <Container>
      <Img src={image} />
      <Inner>
        <Header {...headerData} />
        <Button
          {...buttonData}
          openLink={openLink}
        />
      </Inner>
    </Container>



  )
}

export default Landing;
