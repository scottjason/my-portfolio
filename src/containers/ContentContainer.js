import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inobounce from 'inobounce';
import Loader from '../components/Loader/Loader';
import About from '../components/About/About';
import Media from '../components/Media/Media';
import Overlay from '../components/Overlay/Overlay';
import Experience from '../components/Experience/Experience';
import { EXPERIENCE_DATA, ABOUT_DATA } from '../constants';
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
      mediaSelected: 'project',
      isDomContentLoaded: false,
    }
  }
  static defaultProps = {
    about: ABOUT_DATA,
    experience: EXPERIENCE_DATA,
    components: { About, Experience, Media },
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
  onToggleMedia = () => {
    const mediaSelected = this.state.mediaSelected === 'project' ? 'job' : 'project';
    this.setState({ mediaSelected });
  }
  transform = Component => {
    if (Component === Media) {
      return (
        <Component
          onToggleMedia={this.onToggleMedia}
          mediaSelected={this.state.mediaSelected}
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
