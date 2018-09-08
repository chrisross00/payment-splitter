export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [
        ...state,
        action.bill
      ];;
    case 'REMOVE_BILL':
      return {
        ...state
      };
    case 'EDIT_BILL':
      return state.map((bills) => {
        if (bills.billId === action.id) {
          return {
            ...bills,
            ...action.updates
          }
        } else {
          return bills
        }
      })
    case 'ADD_BILL_TRANSACTION':
      return state.map((bills) => {
        if (bills.billId === action.billId) {
          return {
            ...bills,
            transactions: [...bills.transactions, action.transactions]
          }
        }
        else {
          return bills
        }
      })
    default:
      return state;
  }
}
