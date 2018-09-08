import React from 'react';
import { connect } from 'react-redux';

import BillAdderForm from './BillAdderForm';
import BillList from './BillList';
import { addBill } from '../actions/bills';

export class AddBillPage extends React.Component {
  onSubmit = (bill) => {
    return Promise.resolve(
      this.props.addBill(bill)
    ).then(() => {
      // this.props.history.push(`/edit/${bill.billId}`)
      // this.props.onComplete(bill.billId)
    })
  };
  render() {
    // const id = this.props.billLength;
    // console.log(id);
    return (
      <div>
        <h1>Create a new bill: </h1>
        <BillAdderForm
          onSubmit={this.onSubmit} />
        <BillList />
        <hr />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBillPage);
