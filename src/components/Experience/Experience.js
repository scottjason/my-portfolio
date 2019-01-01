import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Job from './Job/Job';
import Icon from '../Icon/Icon';
import { Close } from 'styled-icons/material';
import { Container, HeaderContainer, JobSeparator, Header, Line } from './Experience.style';

const Experience = props => {
  const { data, onCloseOverlay } = props;
  const shouldRenderLine = i => i !== props.data.length - 1;
  return(
    <Container>
      <HeaderContainer>
       <Header>professional experience</Header>
        <Icon
          onClickIcon={onCloseOverlay}
          type={'close'}
          Component={Close}
        >
        </Icon>
     </HeaderContainer>
      <Line isHeader={true} />
      {data.map((job, i) => {
        return (
          <Fragment key={i}>
            <Job job={job} />
            {shouldRenderLine(i) && <JobSeparator />}
          </Fragment>
        )
      })
    }
    </Container>
  )
}

Experience.propTypes = {
  data: PropTypes.array.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
};

export default Experience;
