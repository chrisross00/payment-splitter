import React from 'react';

const TransactionListItem = ({ description, amount, guarantor }) => (
  <p>{description} | {amount} | {guarantor}</p>
);

export default TransactionListItem;
