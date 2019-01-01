import React, { Component } from 'react';
import Overlay from '../components/Overlay/Overlay';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import { EXPERIENCE_DATA, PROJECT_DATA, ABOUT_DATA } from '../constants';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    const {
      tabSelected,
      isOverlayAnimating,
      isOverlayInView,
      isBtnAnimating,
    } = props;
    this.state = {
      Component: null,
      tabSelected,
      isOverlayAnimating,
      isOverlayInView,
      isBtnAnimating,
    }
  }
  static defaultProps = {
    about: ABOUT_DATA,
    projects: PROJECT_DATA,
    experience: EXPERIENCE_DATA,
    components: {About, Experience, Projects},
  }
  isMatch({ componentName }) {
    return this.state.componentName === componentName;
  }
  generateComponent() {
    if (!this.props.tabSelected) { return null };
    return this.props.components[this.props.tabSelected.componentName];
  }
  transform = Component => {
    if (Component === Experience) {
      return <Component data={this.props.experience} />;
    } else if (Component === About) {
      return <Component data={this.props.about} />;
    }  else if (Component === Projects) {
      return <Component data={this.props.projects} />;
    }
  }
  getComponentToRender() {
    return this.transform(this.generateComponent());
  }
  render() {
    return(
      <Overlay
        {...this.props}
        Component={this.getComponentToRender()}
      >
      </Overlay>
    ) 
  }
}

export default ContentContainer;
