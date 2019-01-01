import React from 'react';
import PropTypes from 'prop-types';
import { Container, Tab } from './Dropdown.style';

const Dropdown = props => {
  const { tabs, onClickTab, isMobileNavInView, isMobileNavAnimating } = props;
  return(
    <Container animate={isMobileNavAnimating || isMobileNavInView}>
      {tabs.map((tab, i) => {
        return (
          <Tab
            key={i}
            onClick={() => onClickTab(tab)}>{tab.displayName}
          </Tab>
        )
      })}
    </Container>
  )
}

Dropdown.propTypes = {
  tabs: PropTypes.array.isRequired,
  onClickTab: PropTypes.func.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  isMobileNavAnimating: PropTypes.bool.isRequired,
};

export default Dropdown;
