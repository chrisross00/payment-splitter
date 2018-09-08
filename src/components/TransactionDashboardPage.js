import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { addBillTransaction } from '../actions/bills';
import { addTransaction } from '../actions/transactions';
import { addPerson } from '../actions/people';
import TransactionList from './TransactionList';

export class TransactionDashboardPage extends React.Component {
  // onSubmit = (transaction) => {
  //   this.props.addTransaction(transaction);
  //   if (transaction.guarantorSelection.__isNew__) {
  //     this.props.addPerson(transaction);
  //   }
  // }
  onSubmit = (transaction) => {
    // this.props.addTransaction(transaction);
    this.props.addBillTransaction(this.props.billId, transaction);
    if (transaction.guarantorSelection.__isNew__) {
      this.props.addPerson(transaction);
    }
  }
  render() {
    return (
      <div>
        <TransactionForm
          onSubmit={this.onSubmit} />
        <TransactionList
          billId={this.props.billId} />
        <hr />
        <p>{this.props.billId}</p>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  addPerson: (person) => dispatch(addPerson(person)),
  addBillTransaction: (id, transaction) => dispatch(addBillTransaction(id, transaction))
});

export default connect(undefined, mapDispatchToProps)(TransactionDashboardPage);
