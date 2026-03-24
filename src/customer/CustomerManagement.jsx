import { useState } from 'react';
import { CustomerForm } from './CustomerForm';
import { CustomerList } from './CustomerList';

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