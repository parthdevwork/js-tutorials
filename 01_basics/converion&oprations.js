//thi is the examples of conert string to number

let string = "vaishnavi"

let stringToNum = Number(string)
console.log(typeof stringToNum)

// this is the example of number to string

let number = 123

let numToString = String(number)

console.log(typeof numToString)


// now mix the number and string conert and which type provide see...

let boTh = "123asb"
let stringNum = Number(boTh)

console.log(typeof stringNum);
console.log(stringNum)

// now see the undefind convert

let undefind = undefined
let type = Number(undefind)

console.log(typeof type);
console.log(type)


// now see Null what the return output


let nullString = null
let stringConvrt = Number(null)

console.log(typeof stringConvrt);
console.log(stringConvrt)

// now see boolean value convert the another datatypes


let converter = true
let stringtobolean = Number(converter)
console.log(typeof stringtobolean)
console.log( stringtobolean)


/// you can convert the boolean value in string then true =  string  , false = string and you convert the boolean in number then  true = 1 and false = 0
