import React from 'react';
import { PaginateContainer, StyledPaginator } from './Paginator.styled';
import PaginatorIcons from './PaginatorIcons';

// const Paginator = ({ customersPerPage, totalCustomers, paginate }) => {
// const pageNumbers = [];
// for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
//   pageNumbers.push(i);
// }
const Paginator = ({ customersPerPage, totalCustomers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePageClick = data => {
    let selected = data.selected;
    // Виконайте дії при зміні сторінки
  };
  return (
    <PaginateContainer>
      {/* <StyledPaginator> */}
      <StyledPaginator
        previousLabel={<PaginatorIcons iconId="icon-pagi-left" />}
        nextLabel={<PaginatorIcons iconId="icon-pagi-right" />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageNumbers.length + 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      {/* </StyledPaginator> */}
      {/* {pageNumbers?.map(number => (
        <li key={number}>
          <a href="#" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))} */}
    </PaginateContainer>
  );
};

export default Paginator;
