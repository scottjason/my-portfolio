import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../../data';

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-shrink: 0;
  line-height: 1.2rem;
  color: white;
  letter-spacing: 1px;
  max-width: 70%;
  &:last-child {
    padding-bottom: 25px;
  }
`;

export const Header = styled.h2`
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #5db7f2;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 1.2rem;
  &:first-child {
    margin-top: 10px;
  }
`;

export const Subtext = styled.p`
  padding: 0;
  font-size: 14px;
  color: ${props => getSubtextColor(props)};
  margin: ${props => getSubtextMargin(props)};
  cursor: ${props => (props.isLink ? 'pointer' : 'normal')};
`;

function getSubtextColor(props) {
  if (props.isHighlight) {
    return ORANGE_PRIMARY;
  } else if (props.isStack) {
    return '#9AD1F5';
  }
  return 'rgba(225, 225, 225, .95)';
}
function getSubtextMargin(props) {
  if (props.isStack) {
    return '20px 0 0 0';
  } else if (props.isDate) {
    return '0 0 10px 0';
  }
  return '0';
}

export const Role = styled.p`
  margin: 0;
  padding: 0;
  color: #9ad1f5;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 1.2rem;
  margin-top: 20px;
`;

export const Description = styled.p`
  position: relative;
  padding: 0;
  line-height: 1.3rem;
  font-size: 16px;
  margin: ${props => (props.key === 0 ? '12px 0 5px 0' : '12px 0 5px 0')};
`;

export const Span = styled.span`
  color: ${props => (props.isHighlight ? '#9AD1F5' : 'white')};
  margin: ${props => (props.margin ? props.margin : '0')};
`;

export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: rgba(225, 225, 225, 0.2);
  ${media.lessThan('468px')`
    width: 95%;
  `}
`;
