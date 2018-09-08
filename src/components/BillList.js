import React from 'react';
import { connect } from 'react-redux';

import BillListItem from './BillListItem';

const BillList = (props) => (
  <div>
    {props.bills.length ?
      (
        props.bills.map((bill) => {
          return <BillListItem {...bill} key={bill.billId} />;
        })
      )
      :
      <p>No bills</p>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    bills: state.bills
  }
}

export default connect(mapStateToProps)(BillList);
