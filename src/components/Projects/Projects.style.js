import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../data';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: auto;
  color: white;
  font-weight: 400;
  padding: 35px 0 50px 35px;
  overflow: hidden auto;
  scroll-behavior: smooth;
  ${media.lessThan('768px')`
    padding: 35px 0 50px 20px;
  `}
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
`;

export const InnerWrap = styled.article`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Img = styled.img`
  position: relative;
  align-self: flex-start;
  margin-top: 10px;
  min-width: 280px;
  max-width: 1440px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Header = styled.p`
  font-weight: 400;
  padding: 0;
  margin: 0;
  line-height: 1.1em;
  letter-spacing: .4rem;
  font-size: 21px;
  white-space: nowrap;
  color: ${ORANGE_PRIMARY};
  ${media.lessThan('768px')`
    font-size: 18px;
    letter-spacing: .3rem;
  `}
`;


export const Subtext = styled.h2`
  padding: 0;
  font-size: 14px;
  margin-top: 2px;
  color: ${ORANGE_PRIMARY};
  color: white;
  cursor: ${props => props.isLink ? 'pointer' : 'normal'};
`;

export const Role = styled.p`
  margin: 0;
  padding: 0;
  color: #9AD1F5;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 1.2rem;
  margin-top: 2px;
  color: #9AD1F5;
`;

export const Summary = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 1px;
  color: #9AD1F5;
`;

export const Stack = styled.p`
  font-size: 16px;
  color: ${ORANGE_PRIMARY};
`;

export const Description = styled.p`
  position: relative;
  padding: 0;
  line-height: 1.3rem;
  font-size: 16px;
  margin: ${props => props.key === 0 ? '12px 0 5px 0' : '12px 0 5px 0'};
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
