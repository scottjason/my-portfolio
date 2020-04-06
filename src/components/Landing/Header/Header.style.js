import styled from 'styled-components';
import media from 'styled-media-query';
import { BREAKPOINT_SIZES } from '../../../data';

const { portrait } = BREAKPOINT_SIZES;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const H = styled.h1`
  font-size:calc(24px + 2vw);
  color: white;
  font-weight: 300;
  ${media.lessThan(portrait.medium)`
    display: none;
  `}
`;

export const P = styled.p`
  margin-top: 5px;
  font-size:calc(14px + 1.2vw);
  color: white;
  font-weight: 400;
  margin-top: .7rem;
  // color: #A0C8E2;
  ${media.lessThan(portrait.medium)`
    max-width: 65%;
    text-align: center;
    margin: 2rem auto 0 auto;
  `}
`;

export const HM = styled.h1`
  display: none;
  font-size:calc(24px + 2vw);
  color: white;
  font-weight: 300;
  ${media.lessThan(portrait.medium)`
    display: block;
    font-size:calc(22px + 1.8vw);
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
    line-height: 2rem;
  `}
`;

export const Highlight = styled.span`
  color: #fd845c;
  font-weight: 400;
`;
