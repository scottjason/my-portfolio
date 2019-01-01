import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../../constants';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-shrink: 0;
  &:last-child {
    padding-bottom: 75px;
  }
`;

export const Header = styled.h2`
  color: white;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1.7rem;
  font-size:calc(12px + .6vw);
`;

export const Subtext = styled.p`
  padding: 0;
  font-weight: 300;
  font-size: 12px;
  line-height: 1rem;
  color: ${props => props.isHighlight ? ORANGE_PRIMARY : 'rgba(225, 225, 225, .9)'};
  margin: ${props => props.isStack ? '20px 0 0 0' : '0'};
`;

export const Role = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size:calc(14px + .1vw);
  line-height: 1.2rem;
  color: white;
  margin-top: 20px;
`;

export const Description = styled.p`
  position: relative;
  padding: 0;
  color: white;
  font-size:calc(12px + .1vw);
  line-height: 1rem;
  color: white;
  margin: ${props => props.key === 0 ? '12px 0 0 0' : '8px 0 0 0'};
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.1rem;
`;

export const Span = styled.span`
  color: ${props => props.isHighlight ? ORANGE_PRIMARY : 'white' };
  margin: ${props => props.margin ? props.margin : '0'};
`;
