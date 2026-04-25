// const arr = [];
// for(let i = 0; i < 5;i++){
//   const Inputprompt = prompt("Enter value ");
//   arr.push(Number(Inputprompt))
// }
// console.log(arr)


// const arr = [42, 7, 89, 23, 56, 12, 94, 31, 68, 5, 77, 19, 50, 83, 11, 99, 2, 64, 37, 15] 
// let sum = 0

// for(let i = 0; i<arr.length;i++){
//     sum = sum+arr[i]
// }


const arr = [42, 7, 89, 23, 56, 12, 94, 31, 68, 5, 77, 19, 50, 83, 11, 99, 2, 64, 37, 15];

for(let i = 0; i<arr.length;i++){
   if(arr[i] > bigNum){
       bigNum = arr[i]
   }
}
console.log(bigNum)

//get second large number
let Num1 = 0;
let Num2 = 0;

for(let i = 0; i<arr.length;i++){
   if(arr[i] > Num1){
       Num2 = Num1
       Num1 = arr[i]
   }else if(arr[i] > Num2)
       Num2 = arr[i]
   
}
console.log(Num2)