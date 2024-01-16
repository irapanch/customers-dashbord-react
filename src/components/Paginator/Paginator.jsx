import React from 'react';
import { PaginateContainer, StyledPaginator } from './Paginator.styled';
import PaginatorIcons from './PaginatorIcons';

const Paginator = ({
  customersPerPage,
  totalCustomers,
  paginate,
  firstCustomerIndex,
  lastIndex,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = data => {
    let selected = data.selected;
    paginate(selected + 1);
  };
  return (
    <PaginateContainer>
      <h3>
        Showing data {firstCustomerIndex + 1} to {lastIndex} of {totalCustomers}{' '}
        entries
      </h3>
      <div>
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
      </div>
    </PaginateContainer>
  );
};

export default Paginator;
