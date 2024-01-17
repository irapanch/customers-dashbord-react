import React from 'react';
import PropTypes from 'prop-types';
import { StyledTable, StyledTitleTable } from './Table.styled';
import { TableContainer } from '../Customer.styled';
import { Loader } from 'components/Loader';

const Table = ({ customers, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <TableContainer>
      {customers?.map((customer, i) => {
        return (
          <StyledTable key={customer.id}>
            <StyledTitleTable className="name">
              {customer.name}
            </StyledTitleTable>
            <StyledTitleTable className="company">
              {customer.company}
            </StyledTitleTable>
            <StyledTitleTable className="phone">
              {customer.phone}
            </StyledTitleTable>
            <StyledTitleTable className="email">
              {customer.email}
            </StyledTitleTable>
            <StyledTitleTable className="country">
              {customer.country}
            </StyledTitleTable>
            {customer.status ? (
              <StyledTitleTable className="status active">
                Active
              </StyledTitleTable>
            ) : (
              <StyledTitleTable className="status inactive">
                Inactive
              </StyledTitleTable>
            )}
          </StyledTable>
        );
      })}
    </TableContainer>
  );
};

Table.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.bool,
      name: PropTypes.string,
      company: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      country: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};
export default Table;
