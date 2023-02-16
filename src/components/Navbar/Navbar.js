import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Social from './Social/Social';
import Dropdown from './Dropdown/Dropdown';
import Hamburger from './Hamburger/Hamburger';
import { ChevronRight } from 'styled-icons/feather';
import {
  Logo,
  Line,
  Inner,
  NavTabs,
  NavItem,
  Container,
  ContainerMobile,
  Highlight,
  LogoMobile,
  SectionTop,
  SubtextMobile,
  SectionBottom,
} from './Navbar.style';

const Navbar = props => {
  let { tabs, social, openLink } = props;
  // temporarily disable projects view
  tabs = tabs.filter(t => t.displayName !== 'projects');
  const renderIcon = i => i !== tabs.length - 1;
  const renderNavbarDesktop = props => {
    return (
      <Container>
        <Inner>
          <SectionTop>
            <Logo>
              scott jason<Highlight>{' / '}</Highlight>portfolio
            </Logo>
            <Logo>
              san francisco<Highlight>{' / '}</Highlight>remote
            </Logo>
            <Line lighten={true} />
          </SectionTop>
          <SectionBottom>
            <NavTabs>
              {tabs.map((tab, i) => {
                return (
                  <Fragment key={i}>
                    <NavItem isActive={tab.isActive} onClick={() => props[tab.method](tab)}>
                      {tab.displayName}
                    </NavItem>
                    {renderIcon(i) && <Icon type={'rightArrow'} Component={ChevronRight} />}
                  </Fragment>
                );
              })}
            </NavTabs>
            <Social icons={social} openLink={openLink}></Social>
          </SectionBottom>
          <Line />
        </Inner>
      </Container>
    );
  };

  const renderNavbarMobile = props => {
    const {
      onToggleMobileNav,
      isMobileNavInView,
      isMobileNavAnimating,
      isOverlayInView,
      shouldRenderBackdrop,
    } = props;
    return (
      <ContainerMobile>
        <Dropdown {...props} />
        <Inner isMobile={true}>
          <SectionTop isMobile={true}>
            <LogoMobile>scott jason</LogoMobile>
            <SubtextMobile>software engineer</SubtextMobile>
          </SectionTop>

          <Hamburger
            shouldRenderBackdrop={shouldRenderBackdrop}
            isOverlayInView={isOverlayInView}
            isMobileNavInView={isMobileNavAnimating || isMobileNavInView}
            onToggleMobileNav={onToggleMobileNav}
          />

          <Social type={'socialMobile'} icons={social} openLink={openLink}></Social>
        </Inner>
      </ContainerMobile>
    );
  };

  return (
    <Fragment>
      {renderNavbarMobile(props)}
      {renderNavbarDesktop(props)}
    </Fragment>
  );
};

Navbar.propTypes = {
  tabs: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
  openLink: PropTypes.func.isRequired,
  onClickTab: PropTypes.func.isRequired,
  onToggleMobileNav: PropTypes.func.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  isMobileNavAnimating: PropTypes.bool.isRequired,
};

export default Navbar;
