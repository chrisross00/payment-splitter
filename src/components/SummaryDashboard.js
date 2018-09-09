import React from 'react';
import { connect } from 'react-redux';
import selectTotalTransactions from '../selectors/transactions-total';
import visibleTransactions from '../selectors/transactions';
import billSummarizer from '../selectors/billSummarizer';
import numeral from 'numeral';

export const SummaryDashboard = ({ visibleTransactions, transactionTotal, billSummarizer }) => {
  let totalPhrase, transactionAmount, billSummary;
  const transactionWord = (visibleTransactions.length === 1) ? "transaction" : "transactions";
  if (visibleTransactions.length === 0) {
    totalPhrase = ".";
    transactionAmount = "";
  }
  else {
    totalPhrase = ", for a total of ";
    transactionAmount = numeral(transactionTotal / 100).format("$0,0.00");
    billSummary = billSummarizer;
  }
  console.log(billSummary === undefined ? billSummary : billSummary);
  // Calculate = (state) => 
  return (
    <div>
      <h2>Total Bill: {transactionAmount}</h2>
      <div>
        <h2>Total per person:</h2>
        {billSummary ?
          billSummary.map((each) => {
            return (
              <div key={each.name}>
                <p>{each.name} owes a total of {numeral(each.amount / 100).format("$0,0.00")}</p>
              </div>)
          })
          : ''}
      </div>

    </div>
  );
}

const mapStateToProps = (state, { bills }) => {
  return {
    visibleTransactions: visibleTransactions(bills.transactions, state.filters),
    transactionTotal: selectTotalTransactions(visibleTransactions(bills.transactions)),
    billSummarizer: billSummarizer(bills.transactions, state.people)
  };
};


export default connect(mapStateToProps)(SummaryDashboard);
