import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin: auto;
  margin-right: auto;
  color: white;
  font-weight: 400;
  padding: 20px 0 50px 35px;
  overflow: hidden auto;
  scroll-behavior: smooth;
`;

export const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
`;

export const LineSlider = styled.div`
  position: absolute;
  display: none;
  bottom: 0;
  height: 1px;
  left: 0;
  background-color: white;
  width: ${props => getWidth(props)};
  transform: ${props => getTransform(props)};
  transition: all 225ms ease-in-out;
`;

function getTransform({ mediaSelected }) {
  const isProject = mediaSelected === 'project';
  return isProject ? 'translateX(40px)' : 'translateX(240px)';
}

function getWidth({ mediaSelected }) {
  const isProject = mediaSelected === 'project';
  return isProject ? '77px' : '97px'
}

export const Header = styled.p`
  padding: 0;
  margin: 0;
  font-size: 21px;
  white-space: nowrap;
  letter-spacing: 6px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${props => props.isSelected ? ORANGE_PRIMARY: 'white'};
  transition: all 225ms ease-in-out;
  ${media.lessThan('768px')`
    font-size: 18px;
    letter-spacing: .3rem;
  `}
`;

export const Slash = styled.p`
  color: white;
  line-height: 1.1em;
`;

export const Line = styled.div`
  height: 1px;
  width: ${props => props.isHeader ? '420px': '80%'};
  margin-left: ${props => props.pullLeft ? '30px' : '0'};
  background-color: rgba(225, 225, 225, .2);
  background-color:  ${props => props.isHeader ? 'rgba(225, 225, 225, .2)' : 'rgba(225, 225, 225, .2)'};
  margin-bottom: ${props => props.isHeader ? '5px': 'unset'};
  ${media.lessThan('468px')`
    width: 95%;
  `}
`;

export const JobSeparator = styled(Line)`
  height: 1px;
  width: 80%;
  background-color: rgba(225, 225, 225, .2);
  margin: 10px 0 10px 0;
`;
