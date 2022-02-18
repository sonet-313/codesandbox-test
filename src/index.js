/**
 * 分割代入
 */

const myProfile = {
  name: "そね",
  age: 24
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です。`;
console.log(message2);

const myProfileArray = ["そ", 24];

const message3 = `名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}です。`;
console.log(message3);

const [nam, ag] = myProfileArray;
const message4 = `名前は${nam}です。年齢は${ag}です。`;
console.log(message4);
