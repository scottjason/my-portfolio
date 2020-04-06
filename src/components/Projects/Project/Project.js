import React from 'react';
import PropTypes from 'prop-types';
import searchImgUrl from '../../../assets/images/search-sunrise-sm.jpg'

import {
  Opt,
  Break,
  Header,
  OptWrap,
  Container,
  ProjectImg,
  Description,
} from './Project.style';

const Project = ({ project }) => {
  const { projectName, projectUrl, sourceCodeUrl, description } = project;
  const lastIdx = description.length - 1;
  return(
    <Container>
      <Header>{projectName}</Header>
      <OptWrap>
        <Opt isFirst={true} href={projectUrl} target='_blank'>project</Opt>
        <Break/>
        <Opt href={sourceCodeUrl} target='_blank'>source code</Opt>
      </OptWrap>
      {project.description.map((description, idx) => {
        return (
          <article>
            <Description key={idx}>{description}</Description>
            {idx === lastIdx && <ProjectImg src={searchImgUrl}/>}
          </article>
        )
      })}
    </Container>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    sourceCodeUrl: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
  })
};

export default Project;
