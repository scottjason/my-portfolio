import React, { Fragment } from 'react';
import { HM } from './Header.style';

const Mobile = ({ mobileText, mobileSubtext }) => (
  <Fragment>
    <HM>{mobileText}</HM>
    <HM>{mobileSubtext}</HM>
  </Fragment>  
)

export default Mobile;
