import { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerForm from "./CustomerForm";

let CustomerManagement = () => {
  var [customers, setCustomers] = useState([]);
  return (
    <>
      <CustomerForm setCustomers={setCustomers} />
      <CustomerList customers={customers} />
    </>
  )
};

export default CustomerManagement;