import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: auto;
  color: white;
  font-weight: 400;
  margin: 0;
  min-height: 200px;
  padding: 35px 0 35px 35px;
  overflow: hidden auto;
  ${media.lessThan('768px')`
    padding: 35px 0 35px 20px;
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

export const Text = styled.p`
  position: relative;
  padding: 0;
  line-height: 1.3rem;
  font-size: ${props => props.isFirst ? '18px;' : '16px;'};
  margin: 12px 0 5px 0;
  max-width: 90%;
`;

export const BlueHighlight = styled.p`
  position: relative;
  padding: 0;
  line-height: 2rem;
  font-size: 24px;
  max-width: 850px;
  color: #5DB7F2;
  color: #9AD1F5;
  font-weight: 400;
  margin: 5px 0 5px 0;
  ${media.lessThan('768px')`
    font-size: 21px;
    max-width: 90%;
    line-height: 1.8rem;
  `}
`;

export const Highlight = styled.a`
  color: ${props => props.isBlue ? '#CDE5F5' : '#FD845C' };
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

export const Line = styled.div`
  height: 1px;
  margin: ${props => props.isHeader ? '0px 20px 20px 0' : '25px 0 20px 0'};
  width: ${props => props.isHeader ? '420px': '80%'};
  margin-left: ${props => props.pullLeft ? '30px' : '0'};
  background-color: rgba(225, 225, 225, .2);
  ${media.lessThan('768px')`
    width: ${props => props.isHeader ? '90%': '90%'};
    max-width: ${props => props.isHeader ? '400px': 'none'};
    text-align: left;
  `}
`;
