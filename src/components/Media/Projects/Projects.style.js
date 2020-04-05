import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../../constants';

export const Container = styled.section`
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

export const Project = styled.article`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Img = styled.img`
  position: relative;
  align-self: flex-start;
  margin-top: 10px;
  min-width: 300px;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  max-height: ${props => props.isDashboardImg ? '650px' : 'unset'};
`;

export const Header = styled.h1`
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #5DB7F2;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 1.2rem;
  &:first-child {
    margin-top: 30px;
  }
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
  width: 75%;
  margin: ${props => props.isSection ? '45px 0' : '15px 0'};
  background-color: rgba(225, 225, 225, .2);
`;