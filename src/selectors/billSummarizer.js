export default (billTransactions, people) => {
  let guars = [];
  let nameSet = new Set();
  for (let transaction of billTransactions) {
    if (transaction.amount) {
      nameSet.add(transaction.guarantor)
    }
  }

  let nameArr = Array.from(nameSet)
  for (let index in nameArr) {
    guars[index] = { name: nameArr[index] };
  }

  for (let index in guars) {
    let amountHolder = 0;
    for (let transaction of billTransactions) {
      if (guars[index].name === transaction.guarantor) {
        amountHolder += transaction.amount
        guars[index] = { ...guars[index], amount: amountHolder }
      }
    }
  }
  return guars;
}
