const budget = 1000;
const iPhone = 99;
const phoneCase = 9.99;
const tax = 0.23;


const shoppingCalculator = (money: number) => {


const priceWithTax = (price: number) => {
  return price + (price * tax)
};

const buyPhoneWithAcc = () => {
  let sum = money;

  while(sum > priceWithTax(iPhone)) {
    sum = sum - priceWithTax(iPhone) - priceWithTax(phoneCase)
  };
    return money - sum
};

const moneySpent = buyPhoneWithAcc();

const logTotalSpentMoney = (num: number) => {
  const roundedNumber = num.toFixed(2)
  console.log(`You spent $${roundedNumber}`)
};

logTotalSpentMoney(moneySpent);

}

shoppingCalculator(budget);