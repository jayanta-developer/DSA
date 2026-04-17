//Normal way to reverse a string
const revarse_String = (test: string) => {
  const res = test.split("");
  return res.reverse().join("");
};
revarse_String("Jayata");

//Normal way to calculates the sum of all numbers from 1 up to num (inclusive)
function addUpto(num: number) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

// const res = addUpto([1, 3]);
// console.log(res);

const fun = (nums: number[]) => {
  let ev = 0;
  let od = 0;
  nums.map((val) => {
    const tergetVal = val / 2;
    if (Number.isInteger(tergetVal)) {
      od++;
    } else {
      ev++;
    }
  });
  console.log({
    Even: ev,
    Odd: od,
  });
};

fun([1, 2, 3, 4, 5]);

//Avg
const avg = async (num: number[]) => {
  let total = 0;
  await num.map((val, i) => {
    total = total + val;
  });
  const avg = total / num.length;
  console.log(avg);
};

avg([5, 3, 6, 7, 5, 3]);

//get discount amount
const getFinalAmountAfterDiscount = (amount: number): number => {
  const discount: number =
    amount <= 5000 ? 0 : amount <= 7000 ? 5 : amount <= 9000 ? 10 : 20;
  const payAmount: number = (amount / 100) * discount;
  return amount - payAmount;
};
console.log(getFinalAmountAfterDiscount(8000));

//get unit price
const calculateUnit = (unit: number) => {
  let InputUnit = unit;
  let payAmount = 0;

  if (InputUnit > 400) {
    payAmount = (InputUnit - 400) * 13;
    InputUnit = 400;
  }
  if (InputUnit > 200) {
    payAmount += (InputUnit - 200) * 8;
    InputUnit = 200;
  }
  if (InputUnit > 100) {
    payAmount += (InputUnit - 100) * 6;
    InputUnit = 100;
  }
  if (InputUnit > 0) {
    payAmount += InputUnit * 4;
  }
  console.log(payAmount);
};

calculateUnit(329);

//get currency notes old version
const objval:{
  currency: number;
  count: number;
}[] = [
  { currency: 2000, count: 0 },
  { currency: 500, count: 0 },
  { currency: 200, count: 0 },
  { currency: 100, count: 0 },
  { currency: 50, count: 0 },
  { currency: 20, count: 0 },
  { currency: 10, count: 0 },
  { currency: 5, count: 0 },
  { currency: 2, count: 0 },
  { currency: 1, count: 0 },
];

let currentAmount = 0;

const temFun = (val: number) => {
  if (objval.length || objval != undefined) {
    objval.find((item) => item.currency === val).count = Math.floor(
      currentAmount / val,
    );
    currentAmount = currentAmount % val;
  }
};

const getCurrency = (amount: number) => {
  currentAmount = amount;
  if (currentAmount >= 2000) temFun(2000);
  if (currentAmount >= 500) temFun(500);
  if (currentAmount >= 200) temFun(200);

  if (currentAmount >= 100) temFun(100);
  if (currentAmount >= 50) temFun(50);
  if (currentAmount >= 20) temFun(20);
  if (currentAmount >= 10) temFun(10);
  if (currentAmount >= 5) temFun(5);
  if (currentAmount >= 2) temFun(2);
  if (currentAmount >= 1) temFun(1);
  return objval;
};
console.log(getCurrency(4889));



//get currency notes new version
const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const getCurrency_v2=(amount:number)=>{
  let currentAmount  = amount;
  
  const result = denominations.map((currency)=>{
      const count = Math.floor(currentAmount / currency);
      currentAmount %= currency;
      
      return {currency,count}
      
  })
  
  return result;
}


console.log(getCurrency_v2(4889))
