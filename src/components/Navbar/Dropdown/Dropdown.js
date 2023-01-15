import React from 'react';
import PropTypes from 'prop-types';
import { Container, Tab } from './Dropdown.style';

const Dropdown = props => {
  let { tabs, onClickTab, isMobileNavInView, isMobileNavAnimating } = props;
  // temporarily disable projects view
  tabs = tabs.filter(t => t.displayName !== 'projects');
  return (
    <Container animate={isMobileNavAnimating || isMobileNavInView}>
      {tabs.map((tab, i) => {
        return (
          <Tab key={i} onClick={() => onClickTab(tab)}>
            {tab.displayName}
          </Tab>
        );
      })}
    </Container>
  );
};

Dropdown.propTypes = {
  tabs: PropTypes.array.isRequired,
  onClickTab: PropTypes.func.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  isMobileNavAnimating: PropTypes.bool.isRequired,
};

export default Dropdown;
