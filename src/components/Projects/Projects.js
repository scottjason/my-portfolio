import React, { Fragment } from 'react';
import { Close } from 'styled-icons/material';
import Icon from '../Icon/Icon';
import Project from './Project/Project';

import { Line, Header, Container, InnerWrap, HeaderContainer } from './Projects.style';

/* Real-Time Search */
// import searchBeachSmImg from '../../assets/images/search-beach-sm.jpg';

// /* Oak Labs */
// import associateImgOne from '../../assets/images/oak-associate-app-1.png';
// import associateImgTwo from '../../assets/images/oak-associate-app-2.png';
// import oakDashboardOne from '../../assets/images/oak-dashboard-1a.jpg';
// import oakDashboardTwo from '../../assets/images/oak-dashboard-2a.jpg';

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
