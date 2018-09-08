import uuid from 'uuid';
import { SingleDatePicker } from 'react-dates';

export const addBill = ({
  billId = '',
  name = '',
  description = '',
  createdDate = 0,
  createdBy = '',
  transactions = []
}) => ({
  type: 'ADD_BILL',
  bill: {
    billId: uuid(),
    name,
    description,
    createdDate,
    createdBy,
    transactions
  }
});

export const removeBill = (id) => ({
  type: 'REMOVE_BILL',
  id
});

export const editBill = (id, updates = {}) => ({
  type: 'EDIT_BILL',
  id,
  updates
});

export const addBillTransaction = (billId, transactions
) => ({
  type: 'ADD_BILL_TRANSACTION',
  billId,
  transactions: {
    transactionId: uuid(),
    description: transactions.description,
    amount: transactions.amount,
    guarantor: transactions.guarantor
  }
});
