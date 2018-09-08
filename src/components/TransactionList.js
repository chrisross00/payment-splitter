import React from 'react';
import TransactionListItem from './TransactionListItem';

const TransactionList = ({ bills }) => (
  <div>
    {bills.transactions ? (
      bills.transactions.map((transaction) => {
        return <TransactionListItem {...transaction} key={transaction.transactionId} />;
      })
    ) :
      (
        <p>No transactions</p>
      )
    }
  </div>
);

export default TransactionList;
