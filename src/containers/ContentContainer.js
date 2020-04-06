import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inobounce from 'inobounce';
import Loader from '../components/Loader/Loader';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Overlay from '../components/Overlay/Overlay';
import Experience from '../components/Experience/Experience';
import { EXPERIENCE_DATA, PROJECT_DATA, ABOUT_DATA } from '../data';
import ready from 'document-ready-promise';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    const {
      tabSelected,
      isOverlayAnimating,
    } = props;
    this.state = {
      Component: null,
      tabSelected,
      isOverlayAnimating,
      isDomContentLoaded: false,
    }
  }
  static defaultProps = {
    about: ABOUT_DATA,
    projects: PROJECT_DATA,
    experience: EXPERIENCE_DATA,
    components: { About, Experience, Projects },
  }
  componentDidMount() {
    ready().then(() => {
      this.setState({ isDomContentLoaded: true });
    });
    if (inobounce.isEnabled) {
      inobounce.disable();
    }
  }
  isMatch({ componentName }) {
    return this.state.componentName === componentName;
  }
  shouldBackdropRender() {
    const { isOverlayInView, isMobileNavInView, isMobileNavAnimating, isOverlayAnimating } = this.props;
    return isMobileNavAnimating || isMobileNavInView || isOverlayAnimating || isOverlayInView;
  }
  generateComponent() {
    if (!this.props.tabSelected) { return null };
    return this.props.components[this.props.tabSelected.componentName];
  }
  transform = Component => {
    if (Component === Projects) {
      return (
        <Component
          data={this.props.projects}
          onCloseOverlay={this.props.onCloseOverlay}        
        />
      )
    } else if (Component === Experience) {
      return (
        <Component
          data={this.props.experience}
          onCloseOverlay={this.props.onCloseOverlay}
        />
      )
    } else if (Component === About) {
      return (
        <Component
          data={this.props.about}
          onCloseOverlay={this.props.onCloseOverlay}
        />
      )
    }
  }
  getComponentToRender() {
    return this.transform(this.generateComponent());
  }
  renderLoader() {
    return (
      <Loader
        isDomContentLoaded={this.state.isDomContentLoaded}
      />
    )
  }
  renderContent() {
    if (!this.state.isDomContentLoaded) { return null };
    return(
      <Overlay
        {...this.props}
        Component={this.getComponentToRender()}
      />
    ) 
  }
  render() {
    return(
      <div>
      { this.renderLoader() }
      { this.renderContent() }
      </div>
    )
  }
}

ContentContainer.propTypes = {
  about: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  components: PropTypes.object.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  isOverlayInView: PropTypes.bool.isRequired,
  isMobileNavInView: PropTypes.bool.isRequired,
  isOverlayAnimating: PropTypes.bool.isRequired,
  isMobileNavAnimating: PropTypes.bool.isRequired,
  onToggleMobileNav: PropTypes.func.isRequired,
};

export default ContentContainer;
