import uuid from 'uuid';

export const addPerson = ({
  guarantorSelection = ''
}) => ({
  type: 'ADD_PERSON',
  id: uuid(),
  name: {
    value: guarantorSelection.value,
    label: guarantorSelection.label
  }
});

// export const removeBill = (id) => ({
//   type: 'REMOVE_BILL',
//   id
// });

// export const editBill = (id, updates = {}) => ({
//   type: 'EDIT_BILL',
//   id,
//   updates
// });
