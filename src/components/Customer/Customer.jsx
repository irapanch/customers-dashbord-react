import React, { useEffect, useState } from 'react';
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
import { useMediaQuery } from 'react-responsive';
import Table from './Table/Table';
import axios from 'axios';
import Paginator from '../Paginator/Paginator';
import TableMob from './Table/TableMob/TableMob';

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
  const lastIndex = firstCustomerIndex + currentCustomer.length;
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) ',
  });

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
      {isMobile && <TableMob customers={currentCustomer} loading={loading} />}
      {isTablet && <Table customers={currentCustomer} loading={loading} />}

      <Paginator
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
        paginate={paginate}
        firstCustomerIndex={firstCustomerIndex}
        lastIndex={lastIndex}
      />
    </StyledContainer>
  );
};

export default Customer;
