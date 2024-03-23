
let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));

//let myDate2 = new Date(2023 , 0 , 23);
//let myDate2 = new Date(2023 , 0 , 23 , 5 , 6);
let myDate2 = new Date("2023-02-12");
console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate2.getTime());
console.log(Math.floor((Date.now()/1000)));

let date2 = new Date();
console.log(date2.getFullYear());
console.log(date2.getMonth());