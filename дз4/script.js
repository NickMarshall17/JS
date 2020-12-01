//задание №1

let str = "12345678";
let number = null;

for (let i = 0; i < str.length; i++) {
  number += parseInt(str[i]);
}

console.log(number);


// задание №3
let let regExp = /(?=(.*\d){3,})(?=.*[!$#%])(?=.*[A-Z])(?=.*[a-z]).{10,}/;