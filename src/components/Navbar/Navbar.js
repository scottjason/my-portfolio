/* eslint-disable no-unused-vars */

import React, { Fragment } from 'react';
import Icon from '../Icon/Icon';
import Social from './Social/Social';
import { ChevronRight } from 'styled-icons/feather';
import { ChevronsUp } from 'styled-icons/boxicons-regular';
import { Close } from 'styled-icons/material';
import { 
  Logo, 
  NavTabs, 
  NavItem,
  Container,
  Highlight, 
  SectionTop, 
  ArrowSlider,
  SectionBottom, 
} from './Navbar.style';

const Navbar = props => {
  const { tabs, social, onClickTab, onClickIcon } = props;
  const renderIcon = i => i !== tabs.length - 1;
  return (
    <Container>
      <Icon
        type={'close'}
        Component={Close}
      >
      </Icon>
      <SectionTop>
        <Logo>scott jason<Highlight>{' // '}</Highlight>portfolio</Logo>
        <Logo>san francisco<Highlight>{' // '}</Highlight>remote</Logo>
      </SectionTop>
      <SectionBottom>
        <NavTabs>
          {tabs.map((tab, i) => {
            return (
              <Fragment key={i}>
                <NavItem
                  isActive={tab.isActive}
                  onClick={() => onClickTab(tab)}>{tab.displayName}
                </NavItem>
                {renderIcon(i) && 
                  <Icon
                    type={'rightArrow'}
                    Component={ChevronRight}
                  />
                }
              </Fragment>
            )
          })}
        </NavTabs>
        <Social
          icons={social}
          onClickIcon={onClickIcon}
        >
        </Social>
      </SectionBottom>
    </Container>
  )
}

export default Navbar;
