
// singleton

// object literals

const mySym = Symbol ("key1");

const JSuser = {
  name : "mayur",
  "fullName" : "mayurpatil" ,
  designation : "developer",
  rollno : 10 ,
  [mySym] : "abcd",
  isLoggedIn : false,
  lastLoginDate : ["monday" , "friday"]
}

console.log(JSuser.designation);
console.log(JSuser["designation"]);

//console.log(JSuser.mySym);
console.log(typeof JSuser[mySym]);

//Object.freeze(JSuser);

JSuser.name = "pqrs";

console.log(JSuser);


JSuser.greeting = function ()
{
  console.log("hello js user");
}

JSuser.greeting2 = function ()
{
  console.log(`hello js user ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greeting2());