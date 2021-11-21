// Defining Character variables
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', '`', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '}', '~', '"'];

//Question Function
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

// random list function
function getRandom(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomNum]
  return randomChar;
}

//generating password function
function generatePassword() {
  var options = askQuestions();
  var result = [];
  var characterChoices = [];
  var guaranteedChoices = [];

  if(options.hasLowercase) {
    characterChoices = characterChoices.concat(lowercase);
    guaranteedChoices.push(getRandom(lowercase))
  }

  if(options.hasUppercase) {
    characterChoices = characterChoices.concat(uppercase);
    guaranteedChoices.push(getRandom(uppercase))
  }

  if(options.hasNumbers) {
    characterChoices = characterChoices.concat(numbers);
    guaranteedChoices.push(getRandom(numbers))
  }

  if(options.hasSpecials) {
    characterChoices = characterChoices.concat(specials);
    guaranteedChoices.push(getRandom(specials))
  }

  for(var i= 0; i < options.length; i++) {
  var selectedChar = getRandom(characterChoices)
  result.push(selectorChar);
  }

  for(var i = 0; i< guaranteedChoices.length; i++) {
  result[i] = guarunteeddChoices[i];
  }

  console.log(result)

  return result.join('')
}