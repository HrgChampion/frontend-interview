// Javascript Interview Questions

// Everything in js happens inside an execution context
//  Memmory         |    Code
//  key :value      |    Code is executed one line at a time
//  Varibale env    |    Thread of execution

//Two Phases
//  1.Memory creation phase
//  2.Code execution phase
// Js is a synchronous single-threaded language
// Call Stack/ Execution Context Stack/ Program Stack/ Control Stack/Runtime Stack/ Machine Stack

// var n = 2;
// function sqaure(num) {
//   var ans = num * num;
//   return ans;
// }
// var sqaure2 = sqaure(2);
// var square4 = square(4);

// Whenver a new function is invoked, a brand new execution context is created inside global execution context
// Call stack maintains the order of execution of execution contexts

// Hoisting
// getName();      // Hello
// console.log(x)  // undefined
// var x=7;
// function getName(){
//     console.log("Hello")
// }

// getName();      // getName is not a function
// console.log(x)  // undefined
// var x=7;
// var getName=()=>{
//     console.log("Hello")
// }
