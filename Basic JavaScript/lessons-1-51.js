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

const sum = 10 + 10;



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

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;



// Lesson 22: Compound Assignment With Augmented Subtraction

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;



// Lesson 23: Compound Assignment With Augmented Multiplication

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;



// Lesson 24: Compound Assignment With Augmented Division

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;



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


