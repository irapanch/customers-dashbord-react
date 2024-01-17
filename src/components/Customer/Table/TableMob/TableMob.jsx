import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader';

import {
  StyledTable,
  TableContainer,
  StyledTitleTable,
} from './TableMob.styled';

const TableMob = ({ customers, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <TableContainer>
      {customers?.map((customer, i) => {
        return (
          <StyledTable
            key={customer.id}
            className={customer.status ? 'activeBorder' : 'inactiveBorder'}
          >
            {customer.status ? (
              <StyledTitleTable className="name active">
                {customer.name}
              </StyledTitleTable>
            ) : (
              <StyledTitleTable className="name inactive">
                {customer.name}
              </StyledTitleTable>
            )}

            <StyledTitleTable>{customer.company}</StyledTitleTable>
            <StyledTitleTable>{customer.phone}</StyledTitleTable>
            <StyledTitleTable>{customer.email}</StyledTitleTable>
            <StyledTitleTable>{customer.country}</StyledTitleTable>
          </StyledTable>
        );
      })}
    </TableContainer>
  );
};

TableMob.propTypes = {
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

export default TableMob;
