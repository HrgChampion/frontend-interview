// Javascript Interview Questions
// Everything in js happens inside an execution context
//  Memmory         |    Code
//  key :value      |    Code is executed one line at a time
//  Varibale env    |    Thread of execution

//Two Phases
//  1.Memory creation phase
//  2.Code execution phase
// Js is a synchronous single-threaded language
// Loosely  typed language
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
// Call Stack is a stack where all execution context is kept
// Functions

// var x=1;
// a()  // 10
// b()  // 100
// console.log(x)  //1
// function a(){
//     var x= 10;
//     console.log(x)
// }

// function b(){
//     var x=100;
//     console.log(x)
// }

//window - global object
//this
//this ===window    true

// var a=10;
// function b(){
//     var x=10;
// }
// console.log(a)
// console.log(window.a)
// console.log(this.a);

// undefined vs not defined
// var a= 7;  a:undefined
// console.log(z)  z is not defined

//Scope and lexical environment
// function a(){
//     console.log(b)  //10
// }
// var b=10;
// a();

// function a(){
//     var b=10;
//     c();
// function c(){

// }
// }
// a();
// console.log(b)  // b is not defined
//Whenever an execution context is created , a lexical environment is also get created.
// Refrence to the lexical environment of its parent
// Scope chain is the chain of lexical environment and parent refrences.

// let, var and const , Temporal dead zone
// let and const declarations are hoisted but they are in temporal dead zone for the time being
// console.log(b)  //undefined
// console.log(a)  //Refrence Error; can not acces a before initialization
// console.log(x)  //Refrence Error; x is not defined
// let a=10;
// var b=100;
// In console
// window.b  // 100
// window.a  // undefined
// temporal dead zone is the time since let variable is hoisted till it is initialized some value

// let a=10;
// let a=100;  var a=900;//Syntax Error; can not re-declare block scope variable a or Identifier a has already been declared but possible in var

// let a;
// a=90;
// const b; // const declrations must be initialized
// b=45;   // SynatxError; Missing identifier in const declaration
// const c=80;
// c=40; // Type Error ; Assignemnt to const variable;

// block ,scope and shadowing
// {
//     // block or Compound Statement
//     var a=10;
//     console.log(a)
//     // we group multiple statements together in a block so that we can use it where js expects one statement
// }

// {
//     let a=10;
//     var b=20;
//     const c=30;
//     console.log(a)  //10
//     console.log(b)  //20
//     console.log(c)  //30
// }
// console.log(a)    //10
// console.log(b)    // b is not defined
// console.log(c)
// var a=100;
// let b=100;
// const c=100;
// {
// var a=10;
// let b=10;
// const c=30;
// console.log(a) //10 shadowed
// }
// console.log(a) // 10
// console.log(b) // 100
// console.log(c) //100

//closures
// a function along with its lexical scope bundled together forms a closure
// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x() // 7

// function x(){
//     var a=7;
//     function y(){            return function y(){
//         console.log(a)       console.log(a)
//     }                         }
//     return y;
// }
// var z = x();
// console.log(z)
// z();

// function z() {
//     var b=900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a,b);
//     }
//     y()
//   }
//   x()
// }
// z()

// Uses of Closure
// - Module Design pattern
// - Currying
// - Functions like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators
