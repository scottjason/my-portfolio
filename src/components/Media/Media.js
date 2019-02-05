import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Work from './Work/Work';
import Project from './Project/Project';
import Icon from '../Icon/Icon';
import { ChevronRight } from 'styled-icons/boxicons-regular';
import { Container, HeaderContainer, Header, Slash, LineSlider } from './Media.style';

const Media = props => {
  const { mediaSelected, onToggleMedia } = props;
  const isProject = mediaSelected === 'project';
  console.log('mediaSelected', mediaSelected)
  const getIconStyle = () => {
    return {
      width: '28px',
      margin: '1px 14px 0 10px',
    };
  };
  const isSelected = tabName => {
    return tabName === mediaSelected;
  }
  return(
    <Container>
      <HeaderContainer>
        <Header onClick={onToggleMedia} isSelected={isSelected('project')}>
          projects
        </Header>
        <ChevronRight style={getIconStyle()} />
        <Header onClick={onToggleMedia} isSelected={isSelected('job')}>on the job</Header>
        <LineSlider mediaSelected={mediaSelected} />
      </HeaderContainer>
      {isProject && <Project /> }
    </Container>
  )
}

Media.propTypes = {};

export default Media;
