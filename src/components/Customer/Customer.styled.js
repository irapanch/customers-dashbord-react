import { styled } from 'styled-components';

export const StyledContainer = styled.section`
  max-width: 100%;
  width: 968px;
  height: 100%;

  margin-top: 128px;
  margin-left: 71px;
  padding: 38px 0;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.hover};
`;
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
`;
export const Title = styled.h1`
  margin-bottom: 7px;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
`;

export const StyledSubtitle = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.active};
`;
export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  width: 216px;
  height: 38px;
  margin-right: 23px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 7px;

  background-color: ${({ theme }) => theme.backgrounds.input};
  color: ${({ theme }) => theme.colors.input};
  > svg {
    width: 24px;
    height: 24px;
    margin-left: 8px;
    margin-right: 4px;
    fill: rgba(126, 126, 126, 1);
  }
  > input {
    height: 100%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.input};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.input};
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #23232329;
    }
    &::placeholder {
      /* Веб-переглядачі на основі WebKit, Blink (Safari, Google Chrome, Opera 15+) */
      color: ${({ theme }) => theme.colors.input};
      opacity: 1; /* Firefox */
    }

    &::-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.colors.input};
    }
  }
`;

export const TableContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  border-bottom: ${({ theme }) => theme.borders.table};
`;
export const StyledTable = styled.ul`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  display: flex;

  padding-bottom: 14px;
  color: ${({ theme }) => theme.colors.input};
`;
export const StyledTitleTable = styled.li`
  &.name {
    width: 190px;
  }
  &.company {
    width: 145px;
  }
  &.phone {
    width: 155px;
  }
  &.email {
    width: 185px;
  }
  &.country {
    width: 144px;
  }
`;

export const PaginatorWrap = styled.div`
  display: flex;
  gap: 10px;
`;
