//Normal way to reverse a string
const revarseString = (test) => {
  const res = test.split("");
  return res.reverse().join("");
};
revarseString("Jayata");

//Normal way to calculates the sum of all numbers from 1 up to num (inclusive)
function addUpto(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const res = addUpto([1, 3]);
console.log(res);



const fun=(nums)=>{
    let ev = 0;
    let od = 0;
nums.map((val)=>{
    const tergetVal = val/2;
    if(Number.isInteger(tergetVal)){
        od++
    }else{
        ev++
    }
})
console.log({
     Even:ev,
    Odd:od
   
})  
}

fun([1, 2, 3 ,4 ,5])


//Avg
const avg = async(num)=>{
    let total = 0;
   await num.map((val,i)=>{
        total = total + val;
    })
    const avg = total / num.length;
    console.log(avg);
    
}

avg([5, 3, 6, 7, 5, 3])
