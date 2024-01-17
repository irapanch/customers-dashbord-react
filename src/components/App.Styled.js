import { styled } from 'styled-components';
export const Container = styled.section`
  margin: 30px auto;
  width: 335px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin: 100px auto;
    min-width: 768px;
    text-align: center;
    font-size: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin: auto;
    margin-left: 71px;
    padding-top: 100px;
    min-width: 968px;
    min-height: 100vh;
  }
`;
export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`;
