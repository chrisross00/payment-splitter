import moment from 'moment';

// Get visible transactions
export default (transactions, { text, sortBy, startDate, endDate } = {}) => {
  return transactions.filter((transaction) => {
    const createdAtMoment = moment(transaction.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = text ? transaction.description.toLowerCase().includes(text.toLowerCase()) : true;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
