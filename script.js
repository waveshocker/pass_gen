// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  //Define password character length
  // temporary password
  var tempass; 

  PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");    
  
  while ((isNaN(parseInt(PassLen))) || (parseInt(PassLen) < 8) || (parseInt(PassLen) > 128)) {
    PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");
  }

  var PassUpper = prompt("Please input y or n for use of Uppercase in Password.");

  while ((PassUpper.toLowerCase() !== "y") && (PassUpper.toLowerCase() !== "n")) {
    var PassUpper = prompt("Please input y or n for use of Uppercase in Password.");
  }

  if (PassUpper.toLowerCase() === "y") {
    var upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  }

  var PassLower = prompt("Please input y or n for use of Lowercase in Password.");
  
  while ((PassLower.toLowerCase() !== "y") && (PassLower.toLowerCase() !== "n")) {
    var PassLower = prompt("Please input y or n for use of Lowercase in Password.");
  }

  if (PassLower.toLowerCase() === "y") {
    var lowerchar = 'abcdefghijklmnopqrstuvwxyz';
  }

  var PassNum = prompt("Please input y or n for use of numeric values in Password.");

  while ((PassNum.toLowerCase() !== "y") && (PassNum.toLowerCase() !== "n")) {
    var PassNum = prompt("Please input y or n for use of numeric values in Password.");  
  }

  if (PassNum.toLowerCase() === "y") {
    var numchar = '0123456789';
  }

  var PassSpec = prompt("Please input y or n for use of special characters in Password.");

  while ((PassNum.toLowerCase() !== "y") && (PassNum.toLowerCase() !== "n")) {
    var PassNum = prompt("Please input y or n for use of special characters in Password.");  
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
