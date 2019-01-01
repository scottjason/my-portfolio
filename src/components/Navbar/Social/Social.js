import React from 'react';
import Icon from '../../Icon/Icon';
import { Container } from './Social.style';

const Social = ({ icons, onClickIcon }) => (
  <Container>
    {icons.map((icon, i) => {
      return (
        <Icon
          onClickIcon={() => onClickIcon(icon.link)}
          key={i}
          type={icon.type}
          Component={icon.component} />
        )
    })}
  </Container>
)

export default Social;
