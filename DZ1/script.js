//Задача 1

let all=10*100
let part=15*25
console.log(all%part);

//Задача 2

let oval = 15*100 //приводим к см2
let m2 = 600
console.log(oval-m2);

//Задача 3

let a=10, b=20,c=30;
let d= Math.min(a,b,c)
console.log(d);

//Задача 4

let ten = 10;
let m = 31;
let n = -20;

let res1 = ten - m;
res1 = res1 > 0 ? res1 : 0 - res1;
let res2 = ten - n;
res2 = res2 > 0 ? res2 : 0 - res2;
let result = res1 >= res2 ? n : m;

console.log(result);