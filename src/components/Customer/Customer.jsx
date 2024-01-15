import React from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledSubtitle,
  StyledTable,
  StyledTitleTable,
  TableContainer,
  Title,
  TitleWrap,
} from './Customer.styled';
import { IoSearch } from 'react-icons/io5';
import Table from './Table/Table';

const Customer = () => {
  return (
    <StyledContainer>
      <TitleWrap>
        <div>
          <Title>All Customers</Title>
          <StyledSubtitle>Active Members</StyledSubtitle>
        </div>
        <StyledInput>
          <IoSearch />
          <input
            type="search"
            name="search"
            title="search"
            autoComplete="search"
            placeholder="Search"
          />
        </StyledInput>
      </TitleWrap>
      <TableContainer>
        <StyledTable>
          <StyledTitleTable className="name">Customer Name</StyledTitleTable>
          <StyledTitleTable className="company">Company</StyledTitleTable>
          <StyledTitleTable className="phone">Phone Number</StyledTitleTable>
          <StyledTitleTable className="email">Email</StyledTitleTable>
          <StyledTitleTable className="country">Country</StyledTitleTable>
          <StyledTitleTable className="status">Status</StyledTitleTable>
        </StyledTable>
      </TableContainer>
      <Table />
    </StyledContainer>
  );
};

export default Customer;
