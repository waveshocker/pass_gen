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
  // var PassLen = prompt("Please input a numeric value between 8 and 128 for password length.");
    
  //Check if input is actually a number and between 8 and 128 value
  // while (isNaN(parseInt(PassLen))) {
  PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");    
  
  while ((isNaN(parseInt(PassLen))) || (parseInt(PassLen) < 8) || (parseInt(PassLen) > 128)) {
    PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");
  }

  var PassUpper = prompt("Please input y or n for use of Uppercase in Password.");

  while ((PassUpper.toLowerCase() !== "y") && (PassUpper.toLowerCase() !== "n")) {
    var PassUpper = prompt("Please input y or n for use of Uppercase in Password.");
  }

  var PassLower = prompt("Please input y or n for use of Lowercase in Password.");
  
  while ((PassLower.toLowerCase() !== "y") && (PassLower.toLowerCase() !== "n")) {
    var PassLower = prompt("Please input y or n for use of Lowercase in Password.");
  }

  var PassNum = prompt("Please input y or n for use of numeric values in Password.");

  while ((PassNum.toLowerCase() !== "y") && (PassNum.toLowerCase() !== "n")) {
    var PassNum = prompt("Please input y or n for use of numeric values in Password.");  
  }

  var PassSpec = prompt("Please input y or n for use of special characters in Password.");

  while ((PassNum.toLowerCase() !== "y") && (PassNum.toLowerCase() !== "n")) {
    var PassNum = prompt("Please input y or n for use of special characters in Password.");  
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
