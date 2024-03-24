
const heros = ["thor" , "ironman" , "spiderman"];
const heros2 = ["batman" , "superman" , "wonderwoman"];

// heros.push(heros2);

// console.log(heros);
// console.log(heros[3][1]);

// let res = heros.concat(heros2);
// console.log(res);
// const allHeros = [...heros, ...heros2];
// console.log(allHeros);

const arr4 = [1,2,3,[4,5,6], 7 , [8,9, [10,11]]];

const realArr = arr4.flat(Infinity);
console.log(realArr);

console.log(Array.isArray("mayur"));
//console.log(Array.from({name:"mayur"},{designation: "developer"}));

let a = 100;
let b = 200 ;
let c = 300 ;

console.log(Array.of(a,b,c));


