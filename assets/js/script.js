// Define Character variables
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', '`', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '}', '~', '"'];
// Create Question Function
  // Ask for length password
function askQuestions() {
  var length = parseInt(
    prompt('How many characters would you like in your password?')
  )

  if(length<8 || length>128) {
    alert('The password must be between 8 and 128 characters')
    return null;
  }

  if(Number.isNaN(length)) {
    alert('Password length must be a provided number');
    return null;
  }

  var lowercase = confirm('Click OK to have lowercase letters in your password');

  var uppercase = confirm('Click OK to have uppercase letters in your password');

  var numbers = confirm('Click OK to have numbers letters in your password');

  var specialChars = confirm('Click OK to have special characters letters in your password');

  var options = {
    length: length,
    hasLowercase: lowercase,
    hasUppercase: uppercase,
    hasNumbers: numbers,
    hasSpecials: specialChars,
  }

  console.log(options)
  return options;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

