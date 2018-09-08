const defaultPeople = [
  {
    id: 1,
    name: {
      value: 'Bobby',
      label: 'Bobby'
    }
  },
  {
    id: 2,
    name: {
      value: 'Alecia',
      label: 'Alecia'
    }
  }
]

export default (state = defaultPeople, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        action
      ];;
    case 'REMOVE_PERSON':
      return {
        ...state
      };
    case 'EDIT_PERSON':
      return {
        ...state
      };
    default:
      return state;
  }
}
