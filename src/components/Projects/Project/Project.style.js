import styled from 'styled-components';
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
  max-width: 90%;
  &:last-child {
    padding-bottom: 25px;
  }
`;

export const Header = styled.h2`
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #5DB7F2;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 1.2rem;
  &:first-child {
    margin-top: 10px;
  }
`;
export const OptWrap = styled.section`
  position: relative;
  display: flex;
`;

export const Opt = styled.a`
  font-size: 14px;
  color: ${ORANGE_PRIMARY};
  margin-left: ${props => props.isFirst ? 0 : '8px'};
  cursor: pointer;
`;

export const Break = styled.div`
    position: relative;
    width: 1px;
    height: 16px;
    margin: 3px 0 0 7px;
    background-color: rgba(225, 225, 225, 0.5);
`

export const Description = styled.p`
  position: relative;
  padding: 0;
  line-height: 1.3rem;
  font-size: 16px;
  margin: ${props => props.key === 0 ? '12px 0 5px 0' : '12px 0 5px 0'};
`;

export const ProjectImg = styled.img`
  max-width: 600px;
  min-width: 280px;
  width: 100%;
  border: 1px solid white;
`
