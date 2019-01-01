import React, { Fragment } from 'react';
import Job from './Job/Job';
import { Container, Line } from './Experience.style';

const Experience = props => {
  const shouldRenderLine = i => i !== props.data.length - 1;
  return(
    <Container>
      {props.data.map((job, i) => {
        return (
          <Fragment key={i}>
            <Job job={job} />
            {shouldRenderLine(i) && <Line />}
          </Fragment>
        )
      })
    }
    </Container>
  )
}

export default Experience;
