import { styled } from 'styled-components';
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const StyledTable = styled.ul`
  width: 305px;
  margin-bottom: 8px;

  border-radius: 8px;

  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.main};
  &.activeBorder {
    border: 1px solid ${({ theme }) => theme.backgrounds.statusActive};
    border-left: 5px solid ${({ theme }) => theme.backgrounds.statusActive};
  }
  &.inactiveBorder {
    border: 1px solid ${({ theme }) => theme.backgrounds.statusInactive};
    border-left: 5px solid ${({ theme }) => theme.backgrounds.statusInactive};
  }
`;
export const StyledTitleTable = styled.li`
  font-size: 14px;
  width: 100%;
  padding: 5px 10px;

  &.name {
    font-size: 20px;
    font-weight: 600;
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
  }
  &.inactive {
    color: ${({ theme }) => theme.colors.textInactive};
    background-color: ${({ theme }) => theme.backgrounds.statusInactive};
  }
`;
