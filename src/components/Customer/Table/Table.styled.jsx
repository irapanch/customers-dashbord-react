import { styled } from 'styled-components';
export const StyledTable = styled.ul`
  /* padding-left: 30px;
  padding-right: 30px; */
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: ${({ theme }) => theme.borders.table};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  display: flex;
  gap: 5px;

  color: ${({ theme }) => theme.colors.tableText};
  &:last-child {
    border-bottom: none;
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
    width: 151px;
  }
  &.email {
    width: 178px;
  }
  &.country {
    width: 141px;
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
