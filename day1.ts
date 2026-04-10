//Normal way to reverse a string
const revarseString = (test: string) => {
    const res = test.split("");
    return res.reverse().join("");
};
revarseString("Jayata");

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
            od++
        } else {
            ev++
        }
    })
    console.log({
        Even: ev,
        Odd: od

    })
}

fun([1, 2, 3, 4, 5])


//Avg
const avg = async (num: number[]) => {
    let total = 0;
    await num.map((val, i) => {
        total = total + val;
    })
    const avg = total / num.length;
    console.log(avg);

}

avg([5, 3, 6, 7, 5, 3])

//get discount amount
const getFinalAmountAfterDiscount = (amount: number): number => {
    const discount: number = amount <= 5000 ? 0 : amount <= 7000 ? 5 : amount <= 9000 ? 10 : 20;
    const payAmount: number = (amount / 100) * discount;
    return amount - payAmount;
}
console.log(getFinalAmountAfterDiscount(8000))


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
    console.log(payAmount)

}

calculateUnit(101)