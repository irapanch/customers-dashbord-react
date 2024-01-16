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
  const paginatorExpediency = totalCustomers > 8;

  const handlePageClick = data => {
    let selected = data.selected;
    paginate(selected + 1);
  };
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <PaginateContainer>
      {!totalCustomers ? (
        <h3>
          Showing data {firstCustomerIndex} to {lastIndex} of {totalCustomers}{' '}
          entries
        </h3>
      ) : (
        <h3>
          Showing data {firstCustomerIndex + 1} to {lastIndex} of{' '}
          {totalCustomers} entries
        </h3>
      )}

      <div>
        {paginatorExpediency && (
          <StyledPaginator
            onClick={handleLinkClick}
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
        )}
      </div>
    </PaginateContainer>
  );
};

export default Paginator;
