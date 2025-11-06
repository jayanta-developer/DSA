//Normal way to reverse a string
const revarseString=(test)=>{
const res = test.split("");
    return res.reverse().join("")
}
revarseString("Jayata");

//Normal way to calculates the sum of all numbers from 1 up to num (inclusive)
function addUpto(num){
  let total = 0;
  for(let i = 1; i <= num; i++){
    total += i
  }
  return total;
}