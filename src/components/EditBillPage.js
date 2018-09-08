import React from 'react';
import { connect } from 'react-redux';
import { editBill, addBillTransaction } from '../actions/bills';
import { addTransaction } from '../actions/transactions';
import { addPerson } from '../actions/people';
import BillAdderForm from './BillAdderForm';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

import SummaryDashboard from './SummaryDashboard';

export class EditBillPage extends React.Component {
  onSubmit = (transaction) => {
    this.props.addBillTransaction(this.props.match.params.id, transaction);
    if (transaction.guarantorSelection.__isNew__) {
      this.props.addPerson(transaction);
    }
  }
  onBillSubmit = (bill) => {
    this.props.editBill(this.props.match.params.id, bill)
  }
  render() {
    return (
      <div>
        <h2>Add transactions to your bill, id = : {this.props.match.params.id}</h2>
        <TransactionForm
          onSubmit={this.onSubmit} />
        <hr />

        <SummaryDashboard
          bills={this.props.bills.length ? this.props.bills.find((bill) => bill.billId === this.props.match.params.id)
            : ''} />

        <h2>Transactions on your Bill</h2>
        <TransactionList
          bills={this.props.bills.length ? this.props.bills.find((bill) => bill.billId === this.props.match.params.id)
            : ''} />
        <hr />

        <h2>Edit your bill: </h2>
        <BillAdderForm
          onSubmit={this.onBillSubmit} />
        <hr />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    bills: state.bills
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  addPerson: (person) => dispatch(addPerson(person)),
  addBillTransaction: (id, transaction) => dispatch(addBillTransaction(id, transaction)),
  editBill: (id, updates) => dispatch(editBill(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBillPage);
