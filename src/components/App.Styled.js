import { styled } from 'styled-components';
export const Container = styled.section`
  @media screen and (min-width: 768px) {
    margin: 100px auto;
    min-width: 768px;
    text-align: center;
    font-size: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin: auto;
    min-width: 968px;
    margin-left: 71px;
  }
`;
export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`;
