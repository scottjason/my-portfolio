import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import { Container } from './Social.style';

const Social = ({ icons, type, openLink }) => (
  <Container>
    {icons.map((icon, i) => {
      return (
        <Icon
          onClickIcon={() => openLink(icon)}
          key={i}
          type={type || icon.type}
          Component={icon.component} />
        )
    })}
  </Container>
)

Social.propTypes = {
  icons: PropTypes.array.isRequired,
  openLink: PropTypes.func.isRequired,
};

export default Social;
