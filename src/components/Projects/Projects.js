/* eslint-disable no-unused-vars */

import React, { Fragment } from 'react';
import Project from './Project/Project';
import { Container, Line } from './Projects.style';

const Projects = props => {
  const shouldRenderLine = i => i !== props.data.length - 1;
  return(
    <Container>

    </Container>
  )
}

export default Projects;

    //   {props.data.map((project, i) => {
    //     return (
    //       <Fragment key={i}>
    //         <Project {...project} />
    //         {shouldRenderLine(i) && <Line />}
    //       </Fragment>
    //     )
    //   })
    // }