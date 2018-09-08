import uuid from 'uuid';

// ADD_TRANSACTION action
export const addTransaction = (
  {
    billId = '',
    description = '',
    amount = 0,
    guarantor = ''
  } = {}
) => ({
  type: 'ADD_TRANSACTION',
  billId,
  transaction: {
    transactionId: uuid(),
    description,
    amount,
    guarantor
  }
});

// REMOVE_TRANSACTION action
export const removeTransaction = ({ id } = {}) => ({
  type: 'REMOVE_TRANSACTION',
  id
});

// EDIT_TRANSACTION action
export const editTransaction = (id, updates) => ({
  type: 'EDIT_TRANSACTION',
  id,
  updates
});
