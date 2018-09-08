export default (transactions) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return transactions
    .map((transaction) => transaction.amount)
    .reduce(reducer, 0);
};
