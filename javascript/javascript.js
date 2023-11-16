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

// Trust issues with SetTimeOut
// console.log("start")

// setTimeout(function cb(){
//     console.log("callback")
// },5000)

// console.log("end")


// // time waste
// let startDate=new Date().getTime();      // start
// let endDate= startDate;                  // end
// while(endDate<startDate +10000){         // while expires
//     endDate=new Date().getTime();        // callback

// }
// console.log("while expires")


// console.log("start")             // start
// setTimeout(function cb() {       // end
//     console.log("callback")      // callback
// },0 );
// console.log("End")

// Higher Order Functions
// Function which takes another function as argument or return a function from it is known as hof

// const radius=[3,2,1,4];

// const calculateArea= function (radius){
//     const output= [];
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }
// console.log(calculateArea(radius))

// const calculateCircum= function (radius){
//     const output= [];
//     for (let i=0;i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }
// console.log(calculateCircum(radius))

// const calculateDia= function (radius){
//     const output= [];
//     for (let i=0;i<radius.length;i++){
//         output.push(2 * radius[i])
//     }
//     return output;
// }
// console.log(calculateDia(radius))

// Above code is not good
// instead
// const radius=[3,2,1,4];

// const area = function(radius){
//     return Math.PI * radius * radius;
// }
// const circum = function(radius){
//     return 2 * Math.PI * radius;
// }

// const diameter = function(radius){
//     return 2*radius;
// }

// const calculate= function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius,area))   || console.log(radius.map(area))

// console.log(calculate(radius,circum))
// console.log(calculate(radius,diameter))

// Array.prototype.calculate= function(logic){
//     const output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]))
//     }
//     return output;
// }
// console.log(radius.calculate(area))

// JS Engine chrome(V8)
// Code -> Parsing-(AST Abstract Syntax Tree) -> Compilation (interpretter(Ignition) and compiler(Turbo fan) both) -> Execution (Memory Heap and Call stack)
// JIT - just in time compilation
// Garbage Collector - Mark and Sweep algorithm (Inlining,Copy elision and inline caching)

// Callback Hell (Pyramid of doom)  --> Inversion of control
// const cart =["shoes","pants","kurta"];
// api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         })
//     })
// })

// Promises
// Using callback
// const cart=["shoes","pants","kurta"];
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId)
// }) 
// // Using Promises
// const promise=createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })

// const Github_api='https://api.github.com/users/HrgChampion'
// const user=fetch(Github_api)
// console.log(user) // Promise <Pending>
// user.then(function(data){
// console.log(data)
// })

// 3 stages of promise - pending, fulfilled,rejected
// promise data is immutable
// Promise is an object representing the eventual completion or failure of an asynchronous operation
// Promise chaining
// createOrder(cart)
// .then(function(orderId){
//    return proceedToPayment(orderId)
// }).then(function(paymentInfo){
//    return showOrderSummary(paymentInfo)
// })
//Creating a promise, promise chaining, error handling

// const cart=["shoes","pants","jeans"];
// createOrder(cart)
// .then(function(orederId){
//     console.log(orderId)
//     return orderId;
//    // proceedToPayment(orderId);
// }).then(function(){
//    return proceedToPayment(orderId);
// }).then(function(paymentInfo){
//  console.log(paymentInfo)
//  return paymentInfo;
// })
// .catch(function(err){
// console.log(err)
// })

// function createOrder(cart){
// const pr= new Promise(function(resolve,reject){
//     // createOrder
//     // validateCart
//     // orderId
//     if(!validate(cart)){
//         const err= new Error("Cart is not valid")
//         reject(err)
//     }
//     const orderId="12345";
//     if(orderId){
//         resolve(orderId)
//     }
// })
// }

// function proceedToPayment(orderId){
// return new Promise(function(resolve,reject){
//     resolve("Payment Successful")
// })
// }

// function validateCart(cart){
//     return true
//    // return false
// }

// async await
// always returns a promise (I you return a value then it will automatically wrap a value in promise and then return the promise)
// async is a keyword user to create async function 
// asyc await is syntactical sugar over promise
// const p= new Promise((resolve,reject)=>{
//     resolve("Promise resolved value !!")
// })
// async function getData(){
// return p
// // return "Namaste";
// }
// const dataPromise = getData();
// dataPromise.then((res)=>console.log(res))  // Promise resolved value !!

// const p= new Promise((resolve,reject)=>{
//     resolve("Promise resolved value !!")
//     console.log(val)
// })
// async function handlePromise(){
// const val= await p;            // await in front of promise that has to be resolved
// }

// const p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("Promise resolved value !!")   
//     }, 10000);
// })

// const p2= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("Promise resolved value !!")   
//     }, 5000);
// })

// async function handlePromise(){
//     console.log("Hello World !!")
//     // JS Engine was waiting for promise to resolved
//     const val=await p1;
//     console.log("Namste JS")          // Namste JS(after 10s)
//     console.log(val)                  // Promise resolved value !!(after 10s)

//     const val2=await p2;
//     console.log("Namste JS2")          // Namste JS2(after 10s)
//     console.log(val2)                  // Promise resolved value !!(after 10s)                
// }

// function getData(){
//     // JS Engine will not wait for promise to be resolved
//     p.then((res)=>console.log(res))             // Promise resolved value !!(after 10 s)
//     console.log("Namaste Javascript")           // Namaste Javascript(immediately)
// }
// const API_URL="https://api.github.com/users/HrgChampion"
// async function handlePromise(){
//     try{
// const data=await fetch(API_URL);
// const jsonValue= await data.json();
// console.log(jsonValue)
//     }catch(err){
//      console.log(err)
//     }
// // fetch() =>Response.json() =>jsonValue
// }
// handlePromise()

//map,filter and reduce
// const arr=[5,1,3,2,6];
// // Double -[10,2,6,4,36]
// function double(x){
//     return x *2;
// }
// const output= arr.map(double);
// const filter_output=arr.filter((x)=>x%2===1)
// console.log(output,filter_output)

// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr))
// const output=arr.reduce(function(acc,curr){
// acc=acc+curr
// return acc;
// },0)
// console.log(output)

// const users=[
//     {firstName:"Rahul",lastName:"Sharma",age:26},
//     {firstName:"Donald",lastName:"trump",age:75},
//     {firstName:"Elon",lastName:"musk",age:50},
//     {firstName:"Deepika",lastName:"saini",age:26}
// ]
// // {26:2,75:1,50:1}

// const output=users.reduce(function(acc,curr){
// if(acc[curr.age]){
//     acc[curr.age]=acc[curr.age]+1
// }else{
//     acc[curr.age]=1
// }
// },{})

// users.filter((x)=>x.age <30).map(x=>x.firstName)

// Promise API's
// Promise.all([p1,p2,p3])
// If all get max then it will take max time else if any promise will get fail then it will fail all with minm time error occured.
// Promise.allSettled([p1,p2,p3])
// After failure it will wait for all promise to get settled irrespective of success or failure and return an array
// Promise.race([p1,p2,p3])
// as soon as one promise will get fulfill it will give the value , return result of first settled promise
// Promise.any([p1,p2,p3])
// It will wait for first successful promise to get resolved
// If all get fail then it will return an aggregated error(object) which has errors[].

// const p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("P1 success")
//     }, 3000);
// })

// const p2= new Promise((resolve,reject)=>{
// //    setTimeout(() => {resolve("P2 success")}, 1000);
//     setTimeout(() => {reject("P2 fail")}, 1000);
// })

// const p3= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("P3 success")
//     }, 2000);
// })

// Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch(err=>console.error(err))
// Promise.allSettled([p1,p2,p3]).then((res)=>console.log(res)).catch(err=>console.error(err))
// Promise.race([p1,p2,p3]).then((res)=>console.log(res)).catch(err=>console.error(err))
// Promise.any([p1,p2,p3]).then((res)=>console.log(res)).catch(err=>console.error(err))

// Constructor function
// function Counter(){
//     var count=0;
//     this.incrementCounter= function(){
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter=function(){
//         count--;
//         console.log(count)
//     }
// }
// var counter1=new Counter();
// counter1.incrementCounter();  //1
// counter1.incrementCounter();  //2
// counter1.decrementCounter();  //1