import React from 'react';
import { connect } from 'react-redux';
import selectTotalTransactions from '../selectors/transactions-total';
import visibleTransactions from '../selectors/transactions';
import numeral from 'numeral';

export const SummaryDashboard = ({ visibleTransactions, transactionTotal }) => {
  let totalPhrase, transactionAmount;
  const transactionWord = (visibleTransactions.length === 1) ? "transaction" : "transactions";
  if (visibleTransactions.length === 0) {
    totalPhrase = ".";
    transactionAmount = "";
  }
  else {
    totalPhrase = ", for a total of ";
    transactionAmount = numeral(transactionTotal / 100).format("$0,0.00");
  }
  // Calculate = (state) => 
  return (
    <div>
      <h2>Total Bill: {transactionAmount}</h2>
    </div>
  );
}

const mapStateToProps = (state, { bills }) => {
  return {
    visibleTransactions: visibleTransactions(bills.transactions, state.filters),
    transactionTotal: selectTotalTransactions(visibleTransactions(bills.transactions))
  };
};


export default connect(mapStateToProps)(SummaryDashboard);
