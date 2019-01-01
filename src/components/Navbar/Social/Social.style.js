import styled from 'styled-components';
import media from 'styled-media-query';
import { BREAKPOINT_SIZES } from '../../../constants';

const { portrait } = BREAKPOINT_SIZES;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  right: 25px;
  width: auto;
  height: 100%;
  transition: all 150ms ease-in-out;
  ${media.lessThan(portrait.large)`
    max-width: 160px;
    justify-content: space-between;
    letter-spacing: .4rem;
  `}
  ${media.lessThan(portrait.medium)`
    display: none;
  `}
`;
