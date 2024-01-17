import styled, { keyframes } from 'styled-components';
import ReactPaginate from 'react-paginate';
const fireAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`;

export const PaginateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  > h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.input};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 30px 0 30px;
  }
`;

export const StyledPaginator = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin: auto;
  display: flex;
  gap: 5px;

  li {
    width: 25px;
    height: 24px;
  }
  li svg {
    padding-bottom: 2px;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 4px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: ${({ theme }) => theme.borders.table};
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.paginate};
    background-color: ${({ theme }) => theme.backgrounds.paginate};
  }

  li.previous a,
  li.next a,
  li.break a {
    color: ${({ theme }) => theme.colors.input};
  }

  li.active a {
    animation: ${fireAnimation} 1.5s infinite;
    background-color: ${({ theme }) => theme.backgrounds.active};
    border-color: ${({ theme }) => theme.backgrounds.active};
    color: ${({ theme }) => theme.colors.hover};
    align-items: center;
    padding-bottom: 0;
  }

  li.disabled a {
    color: ${({ theme }) => theme.colors.input};
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    gap: 12px;
  }
`;
