// singleton
// koi bhi construtor se banate hain objects to singleton ka used hota hain  , singletone ek khud object hain
// prr hum jab bhi objects create krte hain to wo liters ki  tarah hota hain to wo singletone nhi hota
// construtor se banega to hamesha singletone object banega

// ========================================================================================================================================================

// object literals


// 1> this is fidrt type of create a objrct in objects literals

const mySym = Symbol("key1")
const MyUser ={
    name :"vaishanvi",
    age :14,
    [mySym]:"Symbol",
    location : "surat",
    email : "vaish.globalia.com" ,
    isLoggedIn : false,
    lastLogindays:["monday" ,"saturday"]
}
console.log(MyUser.age)  //  this is a fisrt option of object get
console.log(MyUser["age"])  // and this is second type of object get
console.log(MyUser);
// console.log(MyUser.greeting());


    // this is interview question // How you get the symbol value ?? 
    // ANS :- define the symbol value and then this key used the squre brackets and get the symbol value 

// freege the object means can't chnage/modify the object
// Object.freeze(MyUser)
MyUser.age =1666
// console.log(MyUser["age"]);
// console.log(MyUser);


MyUser.greeting = function () {
    console.log("Hello , JS User");
    
}
// console.log(MyUser.greeting());


MyUser.greetingTwo = function () {
    console.log(`Hello ,  ${this.email}`);
    
}
console.log(MyUser.greetingTwo());



// 2> and this is second methos of create a object // also called contrutor using object means singlletone object
Object.create








