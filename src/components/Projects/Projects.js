import React, { Fragment } from 'react';
import { Close } from 'styled-icons/material';
import Icon from '../Icon/Icon';
import Project from './Project/Project';

import { Line, Header, Container, InnerWrap, HeaderContainer } from './Projects.style';

const Projects = ({ data, onCloseOverlay }) => {
  return (
    <Container>
      <InnerWrap>
        <HeaderContainer>
          <Header>projects</Header>
          <Icon onClickIcon={onCloseOverlay} type={'close'} Component={Close}></Icon>
        </HeaderContainer>
        <Line isHeader={true} />
        {data.map((project, i) => {
          return (
            <Fragment key={i}>
              <Project project={project} />
            </Fragment>
          );
        })}
      </InnerWrap>
    </Container>
  );
};

export default Projects;
