import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Button from './Button/Button';
import { Container, Inner, Img } from './Landing.style';
import { LANDING_DATA } from '../../data';
import imageSrc from '../../assets/images/background-img.jpg';
import withBounce from '../../containers/withBounce';
import withAnimation from '../../containers/withAnimation';

const Landing = props => {
  const { headerData, buttonData } = LANDING_DATA;
  const openLink = url => window.open(url, '_blank');
  return(
    <Container>
      <Img src={imageSrc} />
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

Landing.propTypes = {
  enable: PropTypes.func,
  disable: PropTypes.func,
  isMobile: PropTypes.bool,
  isBounceEnabled: PropTypes.bool,
};

export default compose(withBounce, withAnimation)(Landing);
