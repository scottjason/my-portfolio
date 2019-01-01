import React from 'react';
import { Container, Header, Subtext, Role, Description, Span } from './Job.style';

const Job = ({ job }) => {
  const openLink = url => window.open(url, '_blank');
  return(
    <Container>
      <Header>{job.company}</Header>
      <Subtext>{job.slogan}</Subtext>
      <Subtext onClick={() => openLink(job.website)} isHighlight={true}>{job.website}</Subtext>
      <Role>{job.role}</Role>
      <Subtext>{job.startedAt} to {job.endedAt}</Subtext>
      {job.description.map((description, idx) => {
        return <Description key={idx}>{description}</Description>;
      })}
      <Subtext isStack={true}>
        <Span
          isHighlight={true}
          margin={'0 3px 0 0'}
        >
          Stack:  
        </Span>
        {job.stack}
      </Subtext>
    </Container>
  )
}

export default Job;
