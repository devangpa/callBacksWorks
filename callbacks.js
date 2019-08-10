// function first(){
//     console.log(1);
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();



// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 500 );
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();


// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     console.log('Finished my homework');
//   });



// function alertFinished(){
//     console.log('Finished my homework');
//   }

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', alertFinished);






// -----------------------------------------> Start Function On async Await My Favourate
// function scaryClown() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const msg = await scaryClown();
//     console.log('Message:', msg);
//   }
  
//   msg();



//   function who() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 1000);
//     });
//   }
  
//   function what() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('lurks');
//       }, 500);
//     });
//   }
  
//   function where() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('in the shadows');
//       }, 200);
//     });
//   }
  
// //   async function msg() {
// //     const a = await who();
// //     const b = await what();
// //     const c = await where();
  
// //     console.log(`${ a } ${ b } ${ c }`);
// //   }
  

// // --------------------------------------------> Promiss ALL fro multipal Promiss
//   async function msg() {
//     const [a, b, c] = await Promise.all([who(), what(), where()]);
  
//     console.log(`${ a } ${ b } ${ c }`);
//   }
//   msg();

// Async functions always return a promise, so the following may not produce the result you’re after:
  
// async function hello() {
//     return 'Hello Alligator!';
//   }
  
//   const b = hello();
  

//   console.log(b); 



// async function hello() {
//     return 'Hello Alligator!';
//   }
  
//   const b = hello();
  
//   b.then(x => console.log(x));


// function yayOrNay() {
//     return new Promise((resolve, reject) => {
//       const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
//       val ? resolve('Lucky!!') : reject('Nope 😠');
//     });
//   }
  
//   async function msg() {
//     try {
//       const msg = await yayOrNay();
//       console.log(msg);
//     } catch(err) {
//       console.log(err);
//     }
//   }
  
//   msg();



//Try Catch Block With Async await version

// function caserUpper(val) {
//     return new Promise((resolve, reject) => {
//       resolve(val.toUpperCase());
//     });
//   }
  
//   async function msg(x) {
//     try {
//       const msg = await caserUpper(x);
//       console.log(msg);
//     } catch(err) {
//       console.log('Ohh no:', err.message);
//     }
//   }
  
//   msg('Hello'); 
//   msg(34);




// -------> Promiss base API calls With Async await

async function fetchUsers(endpoint) {
    const res = await fetch(endpoint)
    let data = await res.json();
  
    data = data.map(user => user.username);
  
    console.log(data);
  }

  fetchUsers('https://jsonplaceholder.typicode.com/users');