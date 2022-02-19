/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "そね"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr);

const newNameArray = nameArr.map((name) => {
  if (name === "そね") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);
