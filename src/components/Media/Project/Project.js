import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'styled-icons/material';
import Icon from '../../Icon/Icon';
import { Container, Summary, Line, Header, Img, Subtext, Role, Description } from './Project.style';
import image from '../../../assets/images/oak-associate-app.png';
const Project = props => {
  return(
    <Container>
      <Header>Oak Labs, Inc.</Header>
      <Subtext isDate={true}>October 2015 to July 2016</Subtext>
      <Role>FULL-STACK ENGINEER, FRONTEND FOCUS</Role>
      <Line />
      <Summary>Brand Customizable Associate iPad App</Summary>
      <Img src={image} />
      <Description>The objective with this mobile tool was to create a baseline foundation that could easily be themed/skinned for any fashion specific to a given retailer's style guidelines.</Description>
      <Description>The iPad app is a web view, built with Angular V1 and Node and Mongo on the backend. It give sales associates the ability to virtually see what items are within specific fitting rooms along with the ability to receive and respond to customer requests originating from the fitting room mirrors.</Description>
      <Description>The app also enables sales associates to check inventory items via scanning barcodes from their mobile device. </Description>
    </Container>
  )
}


export default Project;
