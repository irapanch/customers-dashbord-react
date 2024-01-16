import { styled } from 'styled-components';
export const StyledTable = styled.ul`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: ${({ theme }) => theme.borders.table};
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  display: flex;
  gap: 5px;

  color: ${({ theme }) => theme.colors.tableText};
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
`;
export const StyledTitleTable = styled.li`
  &.name {
    width: 186px;
  }
  &.company {
    width: 142px;
  }
  &.phone {
    width: 180px;
    @media screen and (min-width: 1440px) {
      width: 151px;
    }
  }
  &.email {
    width: 178px;
  }
  &.country {
    width: 130px;
    @media screen and (min-width: 1440px) {
      width: 141px;
    }
  }
  &.status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 29px;
    border-radius: 4px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.textActive};
    background-color: ${({ theme }) => theme.backgrounds.statusActive};
    border: ${({ theme }) => theme.borders.active};
  }
  &.inactive {
    color: ${({ theme }) => theme.colors.textInactive};
    background-color: ${({ theme }) => theme.backgrounds.statusInactive};
    border: ${({ theme }) => theme.borders.inactive};
  }
`;
