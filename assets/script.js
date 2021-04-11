// Assignment code here
var userLength = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  // ",",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// research how to put quote in an array

var confirmNum;
var confirmLower;
var confirmUpper;
var confirmSpecial;
//store all possiablities the user chooses
var choicesArray = [];
//choicesArray.length-1
var finalPw;

// create a function to generate pw
//1. ask all the user questions (yes and no, length) prompts and confirms
//2. create an masterArray of all of the user's selection  ||how to stuff stuff in an array
//3. using the master array go ahead and select random values to create the user's pw
//4. return the userpw when you are done
function generatePassword() {
  // create prompt for password length
  userLength = prompt(
    "how many characters would you like your password to be? Must be at least 8 characters and no more than 128 character."
  );
  //note input is defaults to string (parseInt(userLength))

  // create if statement for password length. password length >= 8 || <= 128 characters LATER while loop
  if (userLength >= 8 && userLength <= 128) {
    console.log(userLength);
    // choose a random number between 8 and 128
  }
  // if false, alert and send the user back to confirmLength prompt
  else {
    alert("Please choose a valid length!");
    generatePassword();
  }

  // create confirm for lowercase
  var confirmLower = confirm("Would you like to include lowercase letters?");
  if (confirmLower) {
    // choose random lowercase letters from var lowercase
    //we stuff that array into choicesArray by putting each item into my choicesArray
    choicesArray.push(lowercase);
  }

  // create confirm for uppercase
  var confirmUpper = confirm("Would  you like to include uppercase letters?");
  if (confirmUpper) {
    // choose random uppercase letters from var uppercase
    choicesArray.push(uppercase);
  }

  // // create confirm for numbers
  var confirmNum = confirm("Would you like to include Numbers?");
  if (confirmNum) {
    // choose random numbers from var numbers
    choicesArray.push(numbers);
  }
  var resultsArray = [];

  // // create confirm for
  var confirmSpecial = confirm("Would you like to include special characters?");
  if (confirmSpecial) {
    // choose random speacial characters from var specialChar
    choicesArray.push(specialChar);
  }

  var randomChar = choicesArray.flat();
  console.log(randomChar);

  for (var i = 0; i < userLength; i++) {
    //randomly select any value from choicesArray x times
    var randomPosition = Math.floor(Math.random() * randomChar.length);
    var result = randomChar[randomPosition];

    resultsArray.push(result);
  }
  var finalPw = resultsArray.join("");

  console.log("results array says " + resultsArray);
  console.log("choices Array says " + choicesArray);
  console.log("final password is " + finalPw);

  return finalPw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // used to be password. change back if it doesn't work
  var finalPw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// this currently displays in the box [object HTMLTextAreaElement]