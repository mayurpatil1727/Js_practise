
const tinderUser = {};

tinderUser.Id = 101;
tinderUser.name = "abcd";
tinderUser.isLogedIn = false ;
console.log(tinderUser);


const regUser ={
  email : "mayur@gmail.com",
  fullname : {
    fName :{
      firstName : "mayur",
      lastname : "patil"
    } 
  }
}

console.log(regUser.fullname.fName.lastname);

const obj1 = {
  1 : "a",
  2 : "b"
}

const obj2 = {
  3: "a",
  4: "b"
}

//const obj3 = Object.assign(obj , obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

console.log(Object.keys(regUser));