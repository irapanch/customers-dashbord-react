import styled, { keyframes } from 'styled-components';
import ReactPaginate from 'react-paginate';
// import { device } from '../../styles/device';
// import { darkTheme, lightTheme } from '../../styles/theme';

const fireAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`;

export const PaginateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledPaginator = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  padding: 14px 0;
  display: flex;

  li {
    width: 27px;
    height: 27px;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 4px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: red;
  }

  li.previous {
    margin-right: 40px;
  }

  li.next {
    margin-left: 40px;
  }

  li.previous a,
  li.next a,
  li.break a {
    align-items: center;
    color: pink;
  }

  li.active a {
    animation: ${fireAnimation} 1.5s infinite;
    background-color: ${({ theme }) => theme.backgrounds.active};

    color: ${({ theme }) => theme.colors.hover};
    align-items: center;
    padding-bottom: 0;
  }

  li.disabled a {
    color: aqua;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
