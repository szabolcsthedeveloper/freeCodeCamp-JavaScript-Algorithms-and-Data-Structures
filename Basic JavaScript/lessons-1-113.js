// Lesson 1: Comment Your JavaScript Code

// This is an in-line comment.

/* This is a
multi-line comment */



// Lesson 2: Declare JavaScript Variables

var myName;



// Lesson 3: Storing Values with the Assignment Operator

var a;
a = 7;



// Lesson 4: Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;



// Lesson 5: Initializing Variables with the Assignment Operator

var a = 9;



// Lesson 6: Declare String Variables


var myFirstName = "Szabolcs";
var myLastName = "Nagy";



// Lesson 7: Understanding Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";



// Lesson 8: Understanding Case Sensitivity in Variables

var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

studlyCapVar  = 10;
properCamelCase = "A String";
titleCaseOver = 9000;



// Lesson 9: Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";



// Lesson 10: declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp";
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 



// Lesson 11: add Two Numbers with JavaScript

const summa = 10 + 10;



// Lesson 12: subtract One Number from Another with JavaScript

const difference = 45 - 33;



// Lesson 13: multiply Two Numbers with JavaScript

const product = 8 * 10;



// Lesson 14: divide One Number by Another with JavaScript

const quotient = 66 / 33;



// Lesson 15: increment a Number with JavaScript

let increment = 87;
myVar ++ ;



// Lesson 16: decrement a Number with JavaScript

let decrement = 11;
myVar --;



// Lesson 17: create Decimal Numbers with JavaScript

const ourDecimal = 5.7;
const myDecimal = 5.7;



// Lesson 18: multiply Two Decimals with JavaScript

const productFloat = 2.0 * 2.5;



// Lesson 19: Divide One Decimal by Another with JavaScript

const quotientFloat =  4.4 / 2.0;



// Lesson 20: Finding a Remainder in JavaScript

const remainder = 11 % 3;




// Lesson 21: Compound Assignment With Augmented Addition

let x = 3;
let z = 17;
let y = 12;

x += 12;
z += 9;
y += 7;



// Lesson 22: Compound Assignment With Augmented Subtraction

let d = 11;
let f = 9;
let g = 3;

// Only change code below this line
d -= 6;
f -= 15;
g -= 1;



// Lesson 23: Compound Assignment With Augmented Multiplication

let h = 5;
let i = 12;
let k = 4.6;

h *= 5;
i *= 3;
k *= 10;



// Lesson 24: Compound Assignment With Augmented Division

let l = 48;
let m = 108;
let n = 33;

l /= 12;
m /= 4;
n /= 11;



// Lesson 25: Escaping Literal Quotes in Stringss

const doubleQuotesString = "I am a \"double quoted\" string inside \"double quotes\".";



// lesson 26: Escaping Single Quotes in Strings

const aString = '<a href="http://www.example.com" target="_blank">Link</a>';



// Lesson 27: Escape Sequences in Strings

const escSequence = "FirstLine\n\t\\SecondLine\nThirdLine";



// Lesson 28: Concatenating Strings with Plus Operator

const myStr = "This is the start. " + "This is the end."; 



// Lesson 29: Concatenating Strings with the Plus Equals Operator

let myLongStr = "This is the first sentence. ";
myLongStr += "This is the second sentence.";



// Lesson 30: Constructing Strings with Variables

const myName = "Szabocls";
const myNameStr = "My name is " + myName + "and I am well";



// Lesson 31: Appending Variables to Strings

const someAdjective = "nice";
let myAppendedStr = "Learning to code is ";

myStr += someAdjective;



// Lesson 32: Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;



// Lesson 33: Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastLove = "Lovelace";

firstLetterOfLastName = lastLove[0]; 



// Lesson 34: Understand String Immutability

let myWrongStr = "Jello World";
myStr = "Hello World"; 



// Lesson 35: Use Bracket Notation to Find the Nth Character in a String

const lastLoveName = "Lovelace";
const thirdLetterOfLastName = lastLoveName[2]; // Change this line



// Lesson 36: Use Bracket Notation to Find the Last Character in a String

const lastLName = "Lovelace";
const lastLetterOfLastName = lastLName[lastLName.length -1]; // Change this line



// Lesson 37: Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastNameN = "Lovelace";
const secondToLastLetterOfLastName = lastNameN[lastNameN.length -2]; // Change this line



// Lesson 38: Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line



// Lesson 39: Store Multiple Values in one Variable using JavaScript Arrays

const myArray1 = ["butter", 12];



// Lesson 40: Nest one Array within Another Array

const myArray2 = [["cake", 17], ["party", 18]];



// Lesson 41: Access Array Data with Indexes

const myArray3 = [50, 60, 70];
const myData = myArray[0];



// Lesson 42: Modify Array Data With Indexes

const myArray4 = [18, 64, 99];
myArray[0] = 45




// Lesson 43: Access Multi-Dimensional Arrays With Indexes

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray[2][1];



// Lesson 44: Manipulate Arrays With push()

const myArray5 = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])



// Lesson 45: Manipulate Arrays With pop()

const myArray6 = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()



// Lesson 46: Manipulate Arrays With shift()

const myArray7 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray.shift()



// Lesson 47: Manipulate Arrays With unshift()

const myArray8 = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])



// Lesson 48: Shopping List

const myList = [["Chicken Breast", 3], ["Broccoli", 2], ["Potato", 5], ["Carrot", 7], ["Salad", 1],];



// Lesson 49: Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World");
  }

reusableFunction()



// Lesson 50: Passing Values to Functions with Arguments

function functionWithArgs(a, b){
  console.log(a + b)
}

functionWithArgs(1,2)



// Lesson 51: Return a Value from a Function with Return

function timesFive(num){
  return num * 5
}

timesFive(5)



// Lesson 52: Global Scope and Functions

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// Lesson 53: Local Scope and Functions

function myLocalScope() {

  const myVar = "test"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);



// Lesson 54: Global vs. Local Scope in Functions

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"
  return outerWear;
}

myOutfit();



// Lesson 55: Understanding Undefined Value returned from a Function

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();



// lesson 56: Assignment with a Returned Value

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);



// Lesson 57: Stand in Line

function nextInLine(arr, item) {
  arr.push(item);       
  var removed = arr.shift();
  return removed;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



// Lesson 58: Understanding Boolean Values

function welcomeToBooleans() {
  return true; 
}



// Lesson 59: Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false"
}

trueOrFalse(true)
trueOrFalse(false)



// Lesson 60: Comparison with the Equality Operator

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);



// Lesson 61: Comparison with the Strict Equality Operator

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



// Lesson 62: Practice comparing different values

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");



// Lesson 63: Comparison with the Inequality Operator

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



// Lesson 64: Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);



// Lesson 65: Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
  }

  return "10 or Under";
}

testGreaterThan(10);



//  Lesson 66: Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);



// Lesson 67: Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }

  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);



// Lesson 68: Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);



// Lesson 69: Comparisons with the Logical And Operator

function testLogicalAnd(val) {
if (val <= 50 && val >= 25)
  return "Yes"
  return "No";
}

testLogicalAnd(10);



// Lesson 70: Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}



// Lesson 71: Introducing Else Statements

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}



// Lesson 72: Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}



// Lesson 73: Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);



// Lesson 74: Chaining If Else Statements

function testSize(num) {
 if (num < 5) {
   return "Tiny";
 } else if (num < 10) {
   return "Small" ;
 } else if (num < 15) {
   return "Medium";
 } else if (num < 20) {
   return "Large";
 } else if (num >= 20) {
   return "Huge";
 }
}

testSize(7);



// Lesson 75: Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  }

golfScore(5, 4);



// Lesson 76: Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta"
      break;
  }
  return answer;
}



// Lesson 77: Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  let answer = "";
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}



// Lesson 78: Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  let answer = "";
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break
    case 7:
    case 8:
    case 9:
      answer = "High";
      break
  }

  return answer;
}

sequentialSizes(1);



// Lesson 79: Replacing If Else Chains with Switch

function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley"
      break
    case 42:
      answer = "The Answer"
      break
    case 1:
      answer = "There is no #1"
      break
    case 99:
      answer = "Missed me by this much!"
      break
    case 7:
      answer = "Ate Nine"
      break
  }

  return answer;
}

chainToSwitch(7);



// Lesson 80: Returning Boolean Values from Functions

function isLess(a, b) {
  return a < b;
}

isLess(10, 15);



// Lesson 81: Return Early Pattern for Functions

function abTest(a, b) {
 if (a < 0 || b < 0) {
   return undefined;
 }

 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



// Lesson 82: Counting Cards

let count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
     count++;
     break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
     count--;
     break;
  }

  let holdbet = "Hold"
  if (count > 0) {
    holdbet = "Bet"
  }

  return count + " " + holdbet;
}


// Lesson 83: Build JavaScript Objects

const myDog = {
  "name": "Pamacs",
  "legs": 4,
  "tails": 1,
  "friends": ["Fanni", "Szabi"]
};



// Lesson 84: Accessing Object Properties with Dot Notation

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;



// Lesson 85: Accessing Object Properties with Bracket Notation

const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];  
const drinkValue = testObj["the drink"];    



// Lesson 86: Accessing Object Properties with Variables

const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];



// Lesson 87: Updating Object Properties

const myDog2 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder"



// Lesson 88: Add New Properties to a JavaScript Object

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"



// Lesson 89: Delete Properties from a JavaScript Object

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;



// Lesson 90: Using Objects for Lookups

function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];

  return result;
}



// Lesson 91: Testing Objects for Properties

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}



// Lesson 92: Manipulating Complex Objects

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Michael Jackson",
    "title": "Thriller",
    "release_year": 1982,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ]
  }
];



// Lesson 93: Accessing Nested Objects

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];



// Lesson 94: Accessing Nested Arrays

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];



// Lesson 95: Record Collection

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {

  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');



// Lesson 96: Iterate with JavaScript While Loops

const myArray10 = [];
let i2 = 5;

while (i2 >= 0){
  myArray.push(i);
  i--;
}



// Lesson 97: Iterate with JavaScript For Loops

const myArray11 = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i)
}



// Lesson 98: Iterate Odd Numbers With a For Loop

const myArray12 = [];

for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}



// Lesson 99: Count Backwards With a For Loop

const myArray13 = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}



// Lesson 100: Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}



// Lesson 101: Nesting For Loops

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}



// Lesson 102: Iterate with JavaScript Do...While Loops

const myArray14 = [];
let i3 = 10;

do {
  myArray.push(i);
  i++;
}

while (i < 5);



// Lesson 103: Replace Loops using Recursion

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
}



// Lesson 104: Profile Lookup

const contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin", "Smoking Pipes"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");



// Lesson 105: Generate Random Fractions with JavaScript

function randomFraction() {
  return Math.random();
}



// Lesson 106: Generate Random Whole Numbers with JavaScript

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}



// Lesson 107: Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}



// Lesson 108: Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");



// Lesson 109: Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");



// Lesson 110: Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



// Lesson 111: Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);



// Lesson 112: Use Recursion to Create a Countdown

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}

countdown(5);



// Lesson 113: Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}

