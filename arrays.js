
const myArr = [2,0,6,8,7,4,1,9 ] ;
const heros = ["shaktiman" , "spiderman" , "ironman"] ;


const myArr1 = new Array(1,2,3,4);

console.log(myArr[2]);
console.log(heros[1]);


myArr.push(8);
console.log(myArr);

myArr.sort();
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(10);
console.log(myArr);

myArr.shift(13);
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr);

console.log(myArr.indexOf(8));
console.log(myArr);

const newArray = myArr.join();
console.log(myArr);
console.log(typeof(newArray));

console.log("A" , myArr);
const myNewArr1 = myArr.slice(1,3);
console.log(myNewArr1);

console.log("A" , myArr);
const myNewArr2 = myArr.splice(1,3);
console.log(myNewArr2);