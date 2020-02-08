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
  var tempass = ''; 
  var allc = '';

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
    tempass += upperchar[Math.floor(Math.random() * upperchar.length)];
    allc = allc.concat(upperchar);
  }

  var PassLower = prompt("Please input y or n for use of Lowercase in Password.");
  
  while ((PassLower.toLowerCase() !== "y") && (PassLower.toLowerCase() !== "n")) {
    var PassLower = prompt("Please input y or n for use of Lowercase in Password.");    
  }

  if (PassLower.toLowerCase() === "y") {
    var lowerchar = 'abcdefghijklmnopqrstuvwxyz';
    tempass += lowerchar[Math.floor(Math.random() * lowerchar.length)];
    allc = allc.concat(lowerchar);
  }

  var PassNum = prompt("Please input y or n for use of numeric values in Password.");

  while ((PassNum.toLowerCase() !== "y") && (PassNum.toLowerCase() !== "n")) {
    var PassNum = prompt("Please input y or n for use of numeric values in Password.");  
  }

  if (PassNum.toLowerCase() === "y") {
    var numchar = '0123456789';
    tempass += numchar[Math.floor(Math.random() * numchar.length)];
    allc = allc.concat(numchar);
  }

  var PassSpec = prompt("Please input y or n for use of special characters in Password.");

  while ((PassSpec.toLowerCase() !== "y") && (PassSpec.toLowerCase() !== "n")) {
    var PassSpec = prompt("Please input y or n for use of special characters in Password.");  
  }
  
  if (PassSpec.toLowerCase() === "y") {
    var spechar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    tempass += spechar[Math.floor(Math.random() * spechar.length)];
    allc = allc.concat(spechar);
  }
  
  
  for (var i = tempass.length; i < PassLen; i++) {
    tempass += allc[Math.floor(Math.random() * allc.length)];
  }

  return tempass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
