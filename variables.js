
const accountId = 14265335 ;

let accountEmail = "email.gmail.com" ;

var accountPassword = "123456789";

accountCity = "Jalgaon";

let accountState ;

//accountId = 5 ;   // not allowed
accountEmail = "hotmail.gmail.com" ;
accountPassword = "8521367";
accountCity = "Dhule";

console.log(accountId);
console.table([accountId , accountEmail ,accountCity , accountPassword , accountState]);

/*
prefer not to use var 
because of issue in block scope and functional scope
we should use let and const only in modern javascript 
*/