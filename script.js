// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

optionsarray = [];

var lengthofpassword = 0;

// Function to prompt user for password options
function getPasswordOptions() {

  // variables to prompt user for password

  lengthofpassword = parseInt(prompt("How long do you want your password?"));

  var lowercaseletters = confirm("Click Ok to select lowercase letters");

  var uppercaseletters = confirm("Click Ok to select uppercase letters");

  var numericchars = confirm("Click Ok to select numeric characters");

  var specialchars = confirm("Click Ok to select special characters");

  // case in which no character is chosen

  if (lowercaseletters == false && uppercaseletters == false && numericchars == false && specialchars == false){
    alert("you must select at least one character type!");
    getPasswordOptions()
  }

  if (10 > lengthofpassword || lengthofpassword > 64){
    alert("Please choose a number between 10-64");
    getPasswordOptions();

  }

  if (lowercaseletters) {
    optionsarray = optionsarray.concat(lowerCasedCharacters)

  }

  if (uppercaseletters) {
    optionsarray = optionsarray.concat(upperCasedCharacters)
  }

  if (numericchars) {
    optionsarray = optionsarray.concat(numericCharacters)
  }

  if (specialchars) {
    optionsarray = optionsarray.concat(specialCharacters)
  }

  console.log(optionsarray)
}


// Function for getting a random element from an array
function getRandom(arr) {

return arr[Math.floor(arr.length * Math.random())];

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

  var password = "";

  for (i=0 ; i< lengthofpassword ; i++){
    password += getRandom(optionsarray)
  };

  return password

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);