import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'styled-icons/material';
import Icon from '../../Icon/Icon';
import { Container, Summary, Line, Stack, Header, Img, Subtext, Role, Description } from './Project.style';
import associateImgOne from '../../../assets/images/oak-associate-app-1.png';
import associateImgTwo from '../../../assets/images/oak-associate-app-2.png';
import oakDashboardOne from '../../../assets/images/oak-dashboard-1a.jpg';
import oakDashboardTwo from '../../../assets/images/oak-dashboard-2a.jpg';

const Project = props => {
  return(
    <Container>
      <Header>Oak Labs, Inc.</Header>
      <Subtext isDate={true}>October 2015 to July 2016</Subtext>
      <Role>FULL-STACK ENGINEER, FRONTEND FOCUS</Role>
      <Line />
      
      <Summary>Brand-Customizable Associate iPad App w/ Web View</Summary>
      <Stack>Angular, Node, Express, Mongo, Redis, WebSockets</Stack>
      <Description>The objective with this mobile tool was to create a baseline foundation that could easily be themed/skinned for any fashion specific to a given retailer's style guidelines.</Description>
      <Description>It give sales associates the ability to virtually see what items are within specific fitting rooms along with the ability to receive and respond to customer requests originating from the fitting room mirrors.</Description>
      <Img src={associateImgOne} />
      <Description>The app also enables sales associates to check inventory items via scanning barcodes from their mobile device. </Description>
      <Description>The app also enables sales associates to check inventory items via scanning barcodes from their mobile device as well as provide a mechanism to provide real-time suggesstions for the customer in the fitting room that are triggered by the iPad app and rendered by the mirror.</Description>
      <Img src={associateImgTwo} />
      
      <Line isSection={true} />

      <Summary>Oak Analytics Dashboard</Summary>
      <Stack>Angular, Highcharts, Node, Express, AWS Lambda, AWS Kinesis</Stack>
      <Description>The Oak OS would populate the analytics dashboard (custom themed to X brand color palette) provided to our corporate partners enabling them the ability to view store activity in real-time.</Description>
      <Img isDashboardImg={true} src={oakDashboardOne} />

      <Description>The Node app was pulling a database that was constantly populated by the t-logs, imported and cleaned via a lambda function that pushed into a Kinesis stream for database import.</Description>
      <Description>Using WebSocket technologoy, specifically socket.io, the analytics app redraws charts and graphs in real-time, in-sync with store activity.</Description>
      <Img isDashboardImg={true} src={oakDashboardTwo} />


    </Container>
  )
}


export default Project;
