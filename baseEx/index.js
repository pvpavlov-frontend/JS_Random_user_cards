'use strict';

// Promise
// .then(()=>{})

// load()
//   .then(value => {})
//   .then(d => {})
//   .then(d => {})
//   .then(d => {})
//   .catch(error => {})
//   .finally();

// load().then(
//   value => {},
//   error => {}
// );

console.log('start :>> ');

// const data = fetch('./users.json');
// const usefullData = data
//   .then(response => {
//     return response.json();
//   })

// usefullData.then(user => {
//   console.log('user :>> ', user);
// });

fetch('./users.json')
  .then(response => {
    return response.json();
  })
  .then(user => {
    console.log('user :>> ', user);
  })
  .catch(e => {
    console.log('e :>> ', e);
  });

// while (true) {
//   if (promise.state === 'fulfilled') {
//     thenCallback(promise.result);
//   }
//   if (promise.state === 'rejected') {
//     catchCallback(promise.result);
//   }
// }

console.log('end :>> ');
