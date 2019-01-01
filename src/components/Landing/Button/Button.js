import React from 'react';
import { Btn, Span } from './Button.style';

const Button = ({ url, openLink, displayName }) => (
  <Btn onClick={() => openLink(url)}><Span>{displayName}</Span></Btn>
)

export default Button;
