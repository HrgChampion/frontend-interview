// Question 1 
// Implement Debounce
// Debounce is a function that will wait for a certain amount of time before executing a function.
// Example - A search bar will wait for 1 second before making an API call to fetch results.

// let counter = 0;

// const getData = () =>{
//     // calls an API and gets data
//     console.log("API called..", counter++)
// }

// const doSomeMagic = (func,delay) => {
//     let timer;
//     return function(){
//         let context = this;
//         let args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//         func.apply(context,args)
//         },delay)
//     }
// }

// const betterFunction = doSomeMagic(getData,1000);


// Question 2
// Implement Throttle

// Throttle is a function that will limit the number of times a function can be called in a certain amount of time.
// Example - A scroll event listener will only be called once every 100ms.Scrolling,resizing the window.IMporoves performance and responsiveness

// const throttle = (func,delay) => {
//     let flag =true;
//     return function(){
//         let context = this;
//         let args = arguments;
//         if(flag){
//             func.apply(context,args);
//             flag = false;
//         }
//         setTimeout(()=>{
//         flag = true;
//         },delay)
//     }
// }

// window.addEventListener("resize",throttle(getData,2000))


// Question 3
// Implement Currying
// Currying is a function that takes a function as an argument and returns a new function that takes arguments one at a time.
// const curry = (func) => {
//     return function curried(...args){
//         if(args.length >= func.length){
//             return func(...args)
//         }else{
//                 return curried.bind(null,...args)
//         }
//     }
// }
// const totalNum = (a,b,c) => a+b+c;
// const curriedTotal = curry(totalNum);
// console.log(curriedTotal(1)(2)(3))
// console.log(curriedTotal(1,2,3))
// console.log(curriedTotal(1)(2,3))

// Question 4
// Implement Currying with placeholders

// Question 5
// Deep Flatten 1
// const arr = [1,2,[3,4,[5,6,[7,8]]]];
// const result = [];
// console.log(flatten(arr));
// // Recursive approach
// function flatten(arr){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flatten(arr[i])
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// Iterative approach

// const arr1 = [1,2,[3,4,[5,6,[7,8]]]];
// const arr2 = [1,2,3,4,5,6,7,8];
// function flatten(arr){
//     const result = [];
//     let stack = [...arr];
//     while(stack.length){
//         const curr = stack.pop();
//         if(Array.isArray(curr)){
//             stack.push(...curr)
//         }else{
//             result.push(curr)
//         }
//     }
//     return result.reverse()
// }
// console.log(flatten(arr1))
// console.log(flatten(arr2))
// Question 6
// Deep Flatten 2
// Flatten deeply nested object
// const obj1 ={
//     a:1,
//     b:2,
//     c:{
//         d:3,
//         e:4
//     }
// };

// const obj2 ={
//     a:1,
//     b:2,
//     c:{
//         d:3,
//         e:4,
//         f:{
//             g:5,
//         },
//         h:null
//     },
//     j:'Hi'
// }

// console.log(flatten(obj1))
// console.log(flatten(obj2))

// function flatten(obj){
//     const result = {};
//     for(let key in obj){
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             Object.assign(result,flatten(obj[key]))
//         }else{
//             result[key] = obj[key]
//         }
//     }
//     return result
// }



// Question 7
// Deep Flatten 3
// flatten with prefix

// const obj1 = {
//     a:1,
//     b:2,
//     c:{
//         d:3,
//         e:4
//     }
// };

// const obj2 ={
//     a:1,
//     b:2,
//     c:{
//         d:3,
//         e:4,
//         f:{
//             g:5,
//         },
//         h:null
//     },
//     j:'Hi'
// }

// function flattenWithPrefix(obj,prefix = '') {
//     let result = {};
//     for(let key in obj){
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             Object.assign(result,flattenWithPrefix(obj[key],`${prefix}${key}.`))
//         }else{
//             result[`${prefix}${key}`] = obj[key]
//         }
//     }
//     return result
// }
// console.log(flattenWithPrefix(obj1))
// console.log(flattenWithPrefix(obj2))

// Question 8
// Deep Flatten 4
// Combine above both array and object

// Question 9
// Negative indexing in arrays

// Question 10
// Implement pipe method

// Question 11
// Implement auto retry promises
// function fetchWithAutoRetry(fetchData,retryLimit){
// return new Promise((resolve,reject)=>{
//     (function retryFetch(){
//         fetchData()
//         .then((data)=>resolve(data))
//         .catch((err)=>{
//             if(retryLimit-- > 0){
//               retryFetch();
//             }else{
//                 reject(err)
//             }
//     })
// })();
// })
// }

// const fetchData = () => {
//  let count = 0;
//  return () =>{
//     if(count++ === 4){
//         return Promise.resolve("Success");
//     }else{
//         return Promise.reject("Fail");
//     }
//     }
//  }

//  fetchWithAutoRetry(fetchData(),3)
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log(err))

//  fetchWithAutoRetry(fetchData(),5)
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log(err))

// Question 12
// Implement promise all

// const resultPromises = Promise.all([promise1,promise2]);
// resultPromises.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// Promise.all = function(input){
// const result = [];
// let totalResolved = 0;
// return new Promise((resolve,reject)=>{
//     if(input.length === 0){
//       return resolve(result);
//     }
//     input.forEach((promise,index)=>{
//         Promise.resolve(promise)
//         .then((data)=>{
//             result[index] = data;
//             totalResolved++;
//             if(totalResolved === input.length){
//                 resolve(result)
//             }
//         }).catch((err)=>{
//             reject(err)
//         })
//     })
// })
// }

// const promise1 = Promise.all([Promise.resolve(1),new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(2)
//     },2000)
// }),Promise.resolve(3),4])
// promise1.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const promise2 = Promise.all([new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(3)
//     },2000)
// }),Promise.resolve(2),'4',new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(1)
//     },0)
// }),Promise.resolve(5)])
// promise2.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// Question 13
// Implement promise allSettled

// Promise.allSettled = function(input){
//     const result = [];
//     let totalSettled = 0;
//     return new Promise((resolve,reject)=>{
//         if(input.length === 0){
//           return resolve(result);
//         }
//         input.forEach((promise,index)=>{
//             Promise.resolve(promise)
//             .then((data)=>{
//                 result[index] = {status:"fulfilled",value:data};
//                 totalSettled++;
//                 if(totalSettled === input.length){
//                     resolve(result)
//                 }
//             }).catch((err)=>{
//                 result[index] = {status:"rejected",reason:err};
//                 totalSettled++;
//                 if(totalSettled === input.length){
//                     resolve(result)
//                 }
//             })
//         })
//     })
//     }

// const promise1 = Promise.allSettled([Promise.resolve(1),new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(2)
//     },2000)
// }),Promise.resolve(3),Promise.reject(4)])
// promise1.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const promise2 = Promise.allSettled([new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(3)
//     },2000)
// }),Promise.resolve(2),'4',new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(1)
//     },0)
// }),Promise.resolve(5)])
// promise2.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// Question 14
// Implement promise race

// Promise.race = function(input){
//     return new Promise((resolve,reject)=>{
//         input.forEach((promise)=>{
//             Promise.resolve(promise)
//             .then((data)=>{
//                 resolve(data)
//             }).catch((err)=>{
//                 reject(err)
//             })
//         })
//     })
// }

// const promise1 = Promise.race([Promise.reject(1),new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(2)
//     },2000)
// }),Promise.reject(3),Promise.reject(4)]);

// promise1.then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const promise2 = Promise.race([new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject(3)
//     },2000)
// }),Promise.reject(2),'4',Promise.reject(5)

// ]);

// promise2.then((data)=>console.log(data))
// .catch((err)=>console.log(err))



// Question 15
// Implement promise any

// Promise.any = function(input){
//     const errors =[];
//     let totalRejected =0;

//     return new Promise((resolve,reject)=>{
//         if(input.length === 0){
//             return reject(new AggregateError(errors,'Empty array'));
//         }
//         input.forEach((promise,index)=>{
//             Promise.resolve(promise)
//             .then((data)=>{
//                 resolve(data)
//             }).catch((err)=>{
//                 errors[index] = err
//                 totalRejected++;
//                 if(totalRejected === input.length){
//                     reject(new AggregateError(errors,'All promises rejected'))
//                 }
//             })
//         })
//     })
//     }

//     const promise1 = Promise.any([Promise.reject(1),new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(2)
//         },2000)
//     }),Promise.resolve(3),Promise.reject(4)])
//     promise1.then((data)=>console.log(data))
//     .catch((err)=>console.log(err))


//     const promise2 = Promise.any([new Promise((_,reject)=>{
//         setTimeout(() => {
//             reject(3)
//         },2000)
//     }),Promise.reject(2),'4',new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             reject(1)
//         },0)
//     }),Promise.reject(5)]);
//     promise2.then((data)=>console.log(data))
//     .catch((err)=>console.log(err))

// Question 16
// Implement promise finally
// Promise.finally = function(callback){
//     return new MyPromise((resolve,reject)=>{
//            let val ;
//            let wasRejected ;
//            this.then((data)=>{
//                wasRejected = false;
//                val = data;
//                return callback();
//            }).catch((err)=>{
//                wasRejected = true;
//                val = err;
//                return callback();
//     })
//     .then(()=>{
//         if(wasRejected){
//             return reject(val);
//         }else{
//             return resolve(val);
//         }
//     })
//     .catch((err)=>{
//         return reject(err);
//     })
//     })

// }

// Promise.reject(3)
// .finally(()=>{throw 'New Error'})
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// Promise.resolve(10)
// .then((data)=>console.log('Resolved with',data))
// .catch((err)=>console.log('Rejected with',err))
// .finally(()=>{
//     console.log('Finally')
// })

// Question 17
// Implement Custom Javascript Promise

// const STATE = {
//     PENDING : 'PENDING',
//     FULFILLED : 'FULFILLED',
//     REJECTED : 'REJECTED'
// }

// class MyPromise{
//     constructor(executorFn){
//         this.state = STATE.PENDING;
//         this.value  = undefined;
//         this.handlers = [];
//         try{
//             executorFn(this.resolve.bind(this),this.reject.bind(this))
//         }catch(err){
//             this.reject(err);
//         }
//     }

//     resolve = (value) => {
//         this.updateResult(value,STATE.FULFILLED);
//     };
//     reject = (error) => {
//         this.updateResult(error,STATE.REJECTED);
//     };

//     updateResult(value,state){
//         setTimeout(() => {
//             if(this.state !== STATE.PENDING){
//             return;
//             }
//             if(value instanceof MyPromise){
//                 return value.then(this.resolve,this.reject);
//             }
//             this.value = value;
//             this.state = state;
//             this.executeHandlers();
//         },0);
//     }

//     then(onSuccess,onFailure) {
//         return new MyPromise((resolve,reject)=>{
//             this.addHandlers({
//                 onSuccess: function(value){
//                     if(!onSuccess){
//                         return resolve(value);
//                     }
//                     try{
//                         return resolve(onSuccess(value))
//                     }catch (err){
//                         return reject(err)
//                     }
//                 },
//                 onFailure: function(error){
//                     if(!onFailure){
//                         return reject(error);
//                     }
//                     try{
//                         return resolve(onFailure(error))
//                     }catch (err){
//                         return reject(err)
//                     }
//                 }
//             });
//         })
//     }

//     addHandlers(handler){
//         this.handlers.push(handler);
//             this.executeHandlers();
//     }
//     executeHandlers(){
//         if(this.state === STATE.PENDING){
//             return;
//         }
//         this.handlers.forEach((handler)=>{
//             if(this.state === STATE.FULFILLED){
//                 handler.onSuccess(this.value);
//             }else{
//                 handler.onFailure(this.value);
//             }
//         })
//         this.handlers = [];
//     }
//     catch(onFailure) {
//         return this.then(null, onFailure);
//     }
//     finally(callback) {
//         return new MyPromise((resolve, reject) => {
//             let val;
//             let wasRejected;
//             this.then((data) => {
//                 wasRejected = false;
//                 val = data;
//                 return callback();
//             }, (err) => {
//                 wasRejected = true;
//                 val = err;
//                 return callback();
//             })
//                 .then(() => {
//                     if (wasRejected) {
//                         return reject(val);
//                     } else {
//                         return resolve(val);
//                     }
//                 })
//                 .catch((err) => {
//                     return reject(err);
//                 });
//         })
//     }
// }

// new MyPromise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(2)
//     },2000)
// })
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// Question 18
// Throttling Promises by Batching

// function throttlePromises(funcsArr,max){
// const result = [];
// let nextAPIBatch =0;
//  return new Promise((resolve,reject)=>{
//      (function fetchAPICalls(){
//         const start = nextAPIBatch;
//         const end = nextAPIBatch + max;
//         const nextAPICallsToMake = funcsArr.slice(start,end);
//         const nextAPICallPromises = nextAPICallsToMake.map((func)=>{
//             func()
//         })
//         Promise.all(nextAPICallPromises)
//         .then((data)=>{
//             result.push(...data);
//             if(result.length === funcsArr.length){
//                 resolve(result);
//             }else{
//                 nextAPIBatch = end;
//                 fetchAPICalls();
//             }
//         })
//         .catch((err)=>{
//             reject(err);
//         })
//      })();
//  })
// }

// const getRandomTimer = () => Math.round(Math.random() * 1000);

// const getFullfillingPromise = (value) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value),
//             getRandomTimer();
//         })
//     })
// }

// const getRejectingPromise = (value) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(value),getRandomTimer();
//         })
//     })
// }

// const input1 = new Array(10).fill(null).map((elem,index) => () => getFullfillingPromise(index));

// throttlePromises(input1,3).then((data) => console.log(data))
// .catch((err) => console.log(err));


// Question 19
// Implement custom deep equal
//By default assigning a visited 'Map' as third argument to track circular references
// function deepEqual(a,b,visited = new Map()){
//  if(Number.isNaN(a) && Number.isNaN(b)){
//     // As per spec comparing two NaN values returns false
//     // Since we are comparing two NaN values, return true
//      return true;
//  }

//  // Handles primitive like number,string,number,boolean,undefined,null
//  // Always handles object with same refrences
//  if(a === b){
//      return true;
//  }
// // We need to process for equality only if 'a' and 'b' are objects
//  if(typeof a !== 'object' || typeof b !== 'object'){
//     return false;
//  }

//  //If 'a' and 'b' are circular references then return true
//  if(visited.has(a) && visited.get(a)===b){
//     return true;
//  }

//  // We map the refrences of 'a' and 'b' to track circular references
//  // This will indicate that both these values have been compared already
//  // This will be useful in case of recursion in case of circular references
//  visited.set(a,b);

//  // Object.keys method works for both arrays and objects
//  // For object it gives the keys of the object
//  // For array it gives the indexes of the array
//  const keysA = Object.keys(a);
//  const keysB = Object.keys(b);

//  // If the number of keys are not equal then return false
//  if(keysA.length !== keysB.length){
//      return false;
//  }

//  for(let i=0;i<keysA.length;i++){
//     // We recursively call the same logic
//     const keyA = keysA[i];
//     const keyB = keysB[i];
//     if(!deepEqual(a[keyA],b[keyB],visited)){
//         return false;
//     }

//  }
//  // We have processed at all levels deeply,so we can say that 'both values are deeply equal
//  return true;

// }

// console.log(deepEqual(1,'1'))
// console.log(deepEqual(1,'hello'))
// console.log(deepEqual(1,1))
// console.log(deepEqual(1,2))
// console.log(deepEqual({a:1},{a:1}))
// console.log(deepEqual({a:1},{a:2}))
// console.log(deepEqual({a:1},{b:1}))

// Question 20
// Implement custom object assign

// function objectAssign(target, ...sources) {
//     if (target === null || target === undefined) {
//         throw new TypeError('Target cannot be null or undefined');
//     }
    
//     // If target is a primitive, start with a new empty object
//     const isPrimitive = typeof target !== 'object' && typeof target !== 'function';
//     const newTarget = isPrimitive ? {} : target;
    
//     for (let source of sources) {
//         if (source === null || source === undefined) {
//             continue;
//         }
//         source = Object(source);
        
//         const keys = Reflect.ownKeys(source);
//         const descriptors = Object.getOwnPropertyDescriptors(source);
        
//         keys.forEach((key) => {
//             if (descriptors[key].enumerable) {
//                 newTarget[key] = source[key];
//             }
//         });
//     }
    
//     return newTarget;
// }

// const target = null;
// const source = {name:'Hello'};
// console.log(objectAssign(target,source));

// const target = 'world';
// const source = {name:'Hello'};
// console.log(objectAssign(target,source));

// Question 21
// Implement custom JSON.stringify
// function stringify(value){

//     const isTypeNullCategory = (value) => {
//         if(typeof value === 'object' && value === null){
//             return true;
//         }
//         if(typeof value === 'number' && Number.isNaN(value)){
//             return true;
//         }
//         if(typeof value === 'number' && !Number.isFinite(value)){
//             return true;
//         }
//         return false;
//     }

//     const isTypeIgnorableCategory = (value) => {
//         if(typeof value === 'symbol'){
//             return true;
//         }
//         if(typeof value === 'function'){
//             return true;
//         }
//         if(value === undefined || typeof value === 'undefined'){
//             return true;
//         }
//         return false;
//     }

//     if(isTypeNullCategory(value)){
//         return 'null';
//     }

//     if(isTypeIgnorableCategory(value)){
//         return undefined;
//     }
//     // Handling for date objects
//     if(typeof value === 'object' && value!==null && value instanceof Date){
//       // return Date in the form of ISO string and wrap in double quotes
//         return `"${value.toISOString()}"`;  
//     }

//     // Handling for BigInt
//     if(typeof value ==='bigint'){
//         throw new Error('BigInt is not supported');
//     }

// // Handling for string values
// if(typeof value === 'string'){
//     return `"${value}"`;
// }
// // Handling for number values
// if(typeof value === 'number' || typeof value === 'boolean'){
//     return `${value}`;
// }

// // Handling for Arrays
// if(typeof value === 'object' && Array.isArray(value)){
//     // Since array can be deeply nested with values,process each element in array recursively
//     const stringifiedResult = [];
//     value.forEach((elem) => {
//         if(isTypeIgnorableCategory(elem) || isTypeNullCategory(elem)){
            
//             stringifiedResult.push(stringify(null));
//         }else{
//             stringifiedResult.push(stringify(elem));
//         }
//     });
//     // return stringified result in array representation using sqaure brackets
//     return "[" + stringifiedResult.join(',') +"]";
//  }

//  // Handling Objects
//  if(typeof value === 'object' && value !== null && !Array.isArray(value)){
//     // Since object can be deeply nested with values,process each element in object recursively
//     const stringifiedResult = [];
//     const keys = Object.keys(value);
//     keys.forEach((key) => {
//         const val = value[key];
//         if(!isTypeIgnorableCategory(val) ){
//             const stringifiedValue = stringify(value[key]);
//             // If key is a string, we need to wrap it in double quotes
//             const stringifiedFormat = `"${key}":${stringifiedValue}`;
//             stringifiedResult.push(stringifiedFormat);  
//         }
//  }

//     );
//     // return stringified result in object representation using curly braces
//     return '{' + stringifiedResult.join(',') + '}';
//  }
// }

// const test1 = 2024;
// const test2 = 'Hello';
// const test3 = {a:1,b:2,c:3};
// const test4 = [1,2,3,4,5];
// const test5 = null;
// console.log( stringify(test1));

// console.log(stringify(test1) === JSON.stringify(test1));
// console.log(stringify(test2) === JSON.stringify(test2));
// console.log(stringify(test3) === JSON.stringify(test3));


// Question 22
// Implement custom JSON.parse

// function parseJSON(str){
//  // We initialize 'i=0' to keep track of the current position in the string
//     let i=0;
//   // Just call parseValue, it will take care of parsing the JSON deeply at all levels for the right data type
//   return parseValue();
//   function parseValue(){
//   skipWhitespace();
//   // We try out all possibilities of data types to parse the correct type of value
//   const value = parseString() ?? parseNumber()  ?? parseArray() ?? parseObject() ?? parseOtherPrimitives();
//   skipWhitespace();
//   return value;
// }
//  function parseObject(){
//     // if 'ith' character starts with '{' then it is an object
//     if(str[i] === '{'){
//         // We initialize an empty object to store the parsed key-value pairs
//         i++;
//         skipWhitespace();
//         const result = {};
//         let initial = true;
//         while(str[i]!=='}') {
            

//         if(!initial){
//             skipWhitespace();
//             eatComma();
//             skipWhitespace();
//         }
//         const key = parseString();
//         skipWhitespace();
//         eatColon();
//         skipWhitespace();
//         const value = parseValue();
//         result[key] = value;
//         initial = false;   

//     }
//     i++; 
//         return result
//     }

//  }
//  function parseArray(){
//     // if 'ith' character starts with '[' then it is an array
//     if(str[i] === '['){
//         // We initialize an empty array to store the parsed values
//         i++;
//         skipWhitespace();
//         const result = [];
//         let initial = true;
//         while(initial!==']') { 
//         if(!initial){
//             skipWhitespace();
//             eatComma();
//             skipWhitespace();
//         }
//         const value = parseValue();
//         result.push(value);
//         initial = false;
//     }
//     i++;
//         return result;
//     }
//  }

//  function parseString(){
//     // if 'ith' character starts with '"' then it is a string
//     if(str[i] === '"'){
//         // We initialize an empty string to store the parsed characters
//         let result = '';
//         i++;
//         while(str[i] !== '"'){
//             result += str[i];
//             i++;
//         }
//         i++;
//         return result;
//     }
//  }

//  function parseNumber(){
//     let start = i;
//     // We traverse untill we keep finding numbers
//     while(str[i]>='0' && str[i]<='9'){
//     i++;
//     }
//     if(i>start){
//         return Number(str.slice(start,i));
//     }
//  }
//  function parseOtherPrimitives(){
//     let result;
//     if(str.slice(i,i+4) === 'true'){
//         result = true;
//         i+=4;
//     }else if(str.slice(i,i+5) === 'false'){
//         result = false;
//     }else if(str.slice(i,i+4) === 'null'){
//         result = null;
//         i+=4;
//     }
//     return result;
//  }
//  function eatComma(){
//     if(str[i] !== ','){
//      throw new Error(`Expected comma ',' but got something else`);
//     }
//     i++;
//  }
//  function eatColon(){
//     if(str[i] !== ':'){
//      throw new Error(`Expected colon ':' but got something else`);
//     }
//     i++;
//  }

//  function skipWhitespace(){
//     while(str[i] === ' ' || str[i] === '\t' || str[i] === '\n' || str[i] === '\r'){
//         i++;
//     }
//  }
// }

// const input = '{ "name": "John", "age": 30, "city": "New York" }';
// const output = parseJSON(input);
// console.log(output);

// Question 23
// Implement custion typeof operator
// function getTypeof(data){
//  const type = Object.prototype.toString.call(data);
//  const dataType = type.slice(1,-1).split(' ')[1].toLowerCase();
//  return dataType
// }

// const arr = [1,2,3];
// console.log(getTypeof(arr));
// const date = new Date();
// console.log(getTypeof(date));

// Implement custom loadash
