import React from 'react';
import { connect } from 'react-redux';

import BillAdderForm from './BillAdderForm';
import { addBill } from '../actions/bills';

export class BillDashboard extends React.Component {
  onSubmit = (bill) => {
    console.log(bill.billId);
    return Promise.resolve(
      this.props.addBill(bill)
    ).then(() => {
      console.log('added bill to store', bill.billId);
      this.props.onComplete(bill.billId)
    })
  };
  render() {
    // const id = this.props.billLength;
    // console.log(id);
    return (
      <div>
        <h3>Bill Dashboard</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    bills: state.bills
  }
}
const mapDispatchToProps = (dispatch) => ({
  addBill: (bills) => dispatch(addBill(bills))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillDashboard);
