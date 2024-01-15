import React, { useEffect, useState } from 'react';
import {
  PaginatorWrap,
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
import axios from 'axios';
import Paginator from '../Paginator/Paginator';
import PaginatorIcons from '../Paginator/PaginatorIcons';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(8);

  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      const res = await axios.get(
        ' https://65157a0edc3282a6a3ce7a6f.mockapi.io/contacts/customers'
      );

      setCustomers(res.data);
      setLoading(false);
    };
    getCustomers();
  }, []);
  const lastCustomerIndex = currentPage * customersPerPage;
  const firstCustomerIndex = lastCustomerIndex - customersPerPage;
  const currentCustomer = customers.slice(
    firstCustomerIndex,
    lastCustomerIndex
  );
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // const nextPage = () => setCurrentPage(prev => prev + 1);
  // const prevPage = () => setCurrentPage(prev => prev - 1);

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
      <Table customers={currentCustomer} loading={loading} />
      <PaginatorWrap>
        <Paginator
          customersPerPage={customersPerPage}
          totalCustomers={customers.length}
          // paginate={paginate}
        />
        {/* <button onClick={prevPage}>
          <PaginatorIcons iconId="icon-pagi-left" />
        </button>

        <Paginator
          customersPerPage={customersPerPage}
          totalCustomers={customers.length}
          paginate={paginate}
        />
        <button onClick={nextPage}>
          <PaginatorIcons iconId="icon-pagi-right" />
        </button> */}
      </PaginatorWrap>
    </StyledContainer>
  );
};

export default Customer;
