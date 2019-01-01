import styled from 'styled-components';
import media from 'styled-media-query';
import { ORANGE_PRIMARY } from '../../constants';

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
