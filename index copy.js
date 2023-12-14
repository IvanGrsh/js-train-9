// const userList = [
//   { Id: 1, name: "Dima", age: 19, balance: 0 },
//   { Id: 54, name: "Ivan", age: 35, balance: 10200 },
//   { Id: 6543, name: "Vlad", age: 41, balance: 300 },
// ];

// const result = userList.map((user, index, array) => {
//   user.balanceLimit = 1000 - user.balance;
//   if (user.balanceLimit < 0) {
//     user.balanceLimit = 0;
//   }
//   return user;
// });
// console.log(result);
// const result = userList.reduce((num, user, userIndex, array) => {
//   console.log(num, user.age);

//   return user.age > num ? user.age : num;
// }, 1);
// console.log(result);

// const result = userList.reduceRight((num, user, userIndex, array) => {
//   console.log(num, user.age);

//   return user.age > num ? user.age : num;
// }, 1);
// console.log(result);

const flatArray = [
  [
    [100, 105],
    [200, 205],
  ],
  [
    [220, 230],
    [430, 455],
  ],
];
// const result = flatArray.map((el) => {
//   //   console.log(el);

//   const newArr = el.map((it1) => {
//     // console.log(it1);
//     return it1[0] - it1[1];
//   });
//   console.log(newArr);
//   return newArr;
// });

const result = flatArray.flatMap((el) => {
  //   console.log(el);

  return el.map((it1) => {
    return it1[0] - it1[1];
  });
});
console.log(result);

result.forEach((elem, index, array) => {
  console.log(elem);
});

// console.log(flatArray.flatMap((el) => [...el, el[0] - el[1]]));

// const totalBalance = userList.reduce((num, user) => num + user.balance, 0);
// console.log(totalBalance);

// let age = 0;

// const userBigAge = userList.find(({ age: userAge }, index, array) => {
//   if (userAge > age) {
//     age = userAge;
//   }
// });

// console.log(age);

// let age = 0;

// const userBigAge = userList.sort((user1, user2) => {
//   //   if (userAge > age) {
//   //     age = userAge;
//   //   }
//   return user2.age - user1.age;
// });

// console.log(userBigAge[0]);

// let minAge = 30;

// const userBigAge = userList.find(({ age }) => age >= minAge);

// const userBigAge = userList.findLast(({ age }) => age >= minAge);
// const userBigAge = userList.findLastIndex(({ age }) => age >= minAge);

// console.log(userBigAge);

// const iter = userList.keys();
// for (const elem of iter) {
//   console.log(elem);
// }

// const iter = userList.values();
// console.log(iter);

// const result = iter.next();
// console.log(result);

// for (const elem of iter) {
//   console.log(elem);
// }

const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// console.log(arr.join(", "));

// const arrSmall = arr.splice(1, 0, ...userList);
// console.log(arrSmall);
// console.log(arr);

// const arrSmall = arr.slice(1, 3);
// console.log(arrSmall);
// console.log(arr);
