import React from 'react';
import customers from '../../../assets/contacts.json';
import { StyledTable, StyledTitleTable } from './Table.styled';
import { TableContainer } from '../Customer.styled';

const Table = () => {
  return (
    <TableContainer>
      {customers.map(customer => {
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

export default Table;
