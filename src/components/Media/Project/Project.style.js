import styled from 'styled-components';
import { ORANGE_PRIMARY } from '../../../constants';

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
`;

export const Img = styled.img`
  position: relative;
  width: 80%;
  margin-top: 10px;
  left: -5px;
  min-width: 300px;
  max-width: 800px;
  height: auto;
  object-fit: cover;
`;

export const Header = styled.h2`
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

export const Subtext = styled.p`
  padding: 0;
  font-size: 14px;
  margin-top: 2px;
  color: ${ORANGE_PRIMARY};
  cursor: ${props => props.isLink ? 'pointer' : 'normal'};
`;

export const Summary = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 2px;
  color: #9AD1F5;
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
  width: 50%;
  margin: 15px 0;
  background-color: rgba(225, 225, 225, .2);
`;