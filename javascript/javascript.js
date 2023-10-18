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

// setTimeout

// function x(){
//     var i=1;
//     setTimeout(() => {
//         console.log(i)
//     }, 3000);
//     console.log("Hello JS")
// }

// function x(){
//     for(var i=1;i<=5;i++){        //6
//     setTimeout(() => {            //6
//         console.log(i)            //6   Pointing to refrence of i
//     }, i*1000);                   //6
// }                                 //6
//     console.log("Hello JS")
// }

// function x(){
//     for(let i=1;i<=5;i++){        //1   block scope, function will form closure to new copy of i
//     setTimeout(() => {            //2    five closures will formed having different refrence to i
//         console.log(i)            //3   Pointing to refrence of i
//     }, i*1000);                   //4
// }                                 //5
//     console.log("Hello JS")
// }

// function x(){
//     for(var i=1;i<=5;i++){          //1    with var create closure to get same output
//     function close(x){              //2   remebers new copy of x
//         setTimeout(() => {          //3            
//             console.log(x)          //4  
//         }, x*1000);                 //5
//     }
//     close(i)
//     }                                               
//     console.log("Hello JS")
// }

// a()
// b()   // Type Error ; b is not a function
// // Function Statement aka Function Declaration
// function a(){
//     console.log("a called")
// }                                        
// a()              Difference between function declaration and function expression is hoisting  a works but b throws error
// // Function Expression       
// var b= function(){
//     console.log("b called")
// }
// b()

// Anonymous function  (can be used a value only like above)
// function (){  // Syntax Error; Functio statement requires a function name

// }

// Named Function Expression
// var b= function xyz(){
//     console.log("b called")
// }
// b()  // b called
// xyz() // Refrence Error xyz is not defined

// Parameters and arguments
// var b= function xyz(params){
//     console.log("b called")
// }
// b(args)

// First Class Functions   // Functions are first class citizens
// Passing another function inside function and we can return a function from a function
// Ability of function to used as value , passed as argument and can be returned out from a function
// var b= function xyz(params){
//     console.log("b called",params)
// }
// b(function(){})

// var b= function (params){
//     return function(){

//     }
// }
// console.log(b())

// Arrow functions
// What is callback function ?

// setTimeout(() => {
//     console.log("timer")
// }, 5000);
// function x(y){
// console.log("x")
// y()
// }
// x(function y(){
//     console.log("y")
// })

// Blocking the main thread 
// Closures Demo with event Listeners
// function attachEventListeners(){ 
// let count=0;
// document.getElementById("ClickMe").addEventListener("click",function xyz(){
//     console.log("Button Clicked",++count)
// })
// }
// attachEventListeners()

// Garbage Collection and remove Event Listeners
// Event Listeners are heavy

// Aynchronous js and event loop
// function a(){
//     console.log("a")
// }
// a();
// console.log("End")

// A global execution context gets created inside call stack, a will be allocated memory and function is stored
// a() in call stack above GEC and a get printed in console then a context will get remove and then it will print End and call stack will be empty
// call inside js engine and js engine inside browser
// url, timer, localstorage in browser
// web apis - setTimeout,DOM API,fetch,localstorage,console,location
// browser wraps in a global object called window(windoe.setTimeout or setTimeout)

// console.log("start")
// setTimeout(function cb() {
//     console.log("callback")      //  callback queue, event loop - monitor call stack and callback queue(all cb function which comes through promises)
// },5000 );
// console.log("End")

// console.log("start")
// setTimeout(function cbT() {
//     console.log("callback setTimeOut")      
// },5000 );
// fetch("https://api.netflix.com").then(function cbF(){     // microTask Queue (more priority than callback queue)
//     console.log("CB Netflix")                              // microTask inside microTask leads to starvation for callback queue
// })
// console.log("End")
