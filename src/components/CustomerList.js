import React from 'react';
import { connect } from 'react-redux';

const CustomerList = (props) => {
   const customers = props.customerData.map((customer) => {
     return <li key={customer._id}>{customer.first_name} {customer.last_name}</li>
   })
    return <ol>{customers}</ol>
}

const mapStateToProps = (state) => {
  return{
  customerData: state
}
}

export default connect(mapStateToProps)(CustomerList);
