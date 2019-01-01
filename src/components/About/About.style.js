import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: auto;
  color: white;
  font-weight: 400;
  padding: 60px 0 20px 0;
  border-bottom: 1px solid rgba(225, 225, 225, .3);
`;

export const Heading = styled.p`
  max-width: 85%;
  font-size:calc(12px + .5vw);
  color: white;
  letter-spacing: 2px;
  font-weight: 300;
  margin-bottom: 15px;
  ${media.lessThan('600px')`
    display: none;
  `}
`;

export const Text = styled.p`
  max-width: 85%;
  display: ${props => props.isFlex ? 'flex': 'unset'};
  margin-top: ${props => props.pushDown ? '18px' : '5px;'};
  font-size:calc(14px + .1vw);
  line-height: 1.2rem;
  color: white;
  letter-spacing: 1px;
  font-weight: 300;
  margin-left: 25px;
  padding-bottom: ${props => props.paddingBottom ? '50px' : '0'};
  &:nth-child(3) {
    margin-top: 12px;
  }
  ${media.lessThan('600px')`
    max-width: 80%;
    text-align: center;
    margin: 2rem auto 0 auto;
  `}
`;

export const Highlight = styled.a`
  color: #fd845c;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
`;

export const Line = styled.span`
  height: 1px;
  width: 90%;
  margin: 25px 0 20px 0;
  margin-left: ${props => props.pullLeft ? '55px' : '25px'};
  background-color: rgba(225, 225, 225, .3);
`;