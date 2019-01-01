import styled from 'styled-components';

export const Img = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

export const Inner = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: auto;
  height auto;
  text-align: center;
`;
