import React from 'react';
import PropTypes from 'prop-types';
import { Role, Subtext, Description, Line } from './Job.style';

const Promotion = ({ promotions }) => {
  return (
    <React.Fragment>
      {promotions.map((promotion, idx) => {
        return (
          <React.Fragment key={idx * Math.random()}>
            <Role>{promotion.role}</Role>
            <Subtext isDate={true}>
              {promotion.startedAt} to {promotion.endedAt}
            </Subtext>
            {promotion.description.map((description, idx) => {
              return <Description key={idx * Math.random()}>{description}</Description>;
            })}
            <Line />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

Promotion.propTypes = {
  promotions: PropTypes.array.isRequired,
};

export default Promotion;
