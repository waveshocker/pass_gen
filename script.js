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
  var PassLen = prompt("Please input a numeric value between 8 and 128 for password length.");
    
  //Check if input is actually a number and between 8 and 128 value
  // while (isNaN(parseInt(PassLen))) {
  //   PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");    
  // }

  // while (parseInt(PassLen) < 8 || parseInt(PassLen) > 128) {
  //   PassLen = prompt("Please input a numeric Value between 8 and 128 for password length.");
  // }
   


  var PassUpper = prompt("Please input Upper Case Letters to be used.");

  while (PassUpper === PassUpper.toLocaleLowerCase()) {
    var PassUpper = prompt("Please input Upper Case Letters to be used.");
  }

  var PassLower = prompt("Please input Lower Case Letter to be used.");

  while (PassLower === PassUpper.toLocaleUpperCase()) {
    var PassLower = prompt("Please input Upper Case Letters to be used.");
  }

  var PassNum = prompt("Please input numeric values to be used.");

  while (isNaN(parseInt(PassNum))) {
    var PassNum = prompt("Please input numeric values to be used.");  
  }

  // var PassSpec = prompt("Please input special characters to be used.")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
