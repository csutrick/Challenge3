// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordGen = ""
  var lowerCase = false
  var upperCase = false

  // Welcome text
  alert("To generate password, complete the prompts")

  // Asks user how long password should be
  x = false;
  while (x === false) {
    // Asks the user how long the password will be
    passwordLength = prompt("Password length:", "Length")

    // Check if input is a number
    if (passwordLength == null || passwordLength == "" || passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength) === true) {
      alert("Please input a number, cannot be more than 128 characters")
    } else {
      alert("Password length set to: " + passwordLength)
      x = true
    }
  }

  // Asks user to include letters
  letters = confirm("Do you want letters?")
  // If yes, toggle lowercase and uppercase
  if (letters === true) {
    lowerCase = confirm("Do you want lowercase letters?")
    upperCase = confirm("Do you want uppercase letters?")
  }

  // Asks user to include numbers
  numbers = confirm("Do you want numbers?")

  // Asks user to include special characters
  specialChar = confirm("Do you want special characters?")

  // Generates the password
  for (let i=0; i < passwordLength;) {

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');

    const specialString = '[$&+,:;=?@#|<>.-^*()%!]';
    const specialArray = specialString.split('');

    if (lowerCase === true && passwordLength > i) {
      passwordGen += alphabetArray[Math.floor(Math.random() * 26)]
      i++
    }

    if (upperCase === true && passwordLength > i) {
      passwordGen += alphabetArray[Math.floor(Math.random() * 26)].toUpperCase()
      i++
    } 

    if (numbers === true && passwordLength > i) {
      passwordGen += Math.floor(Math.random() * 9) + 1
      i++
    } 

    if (specialChar === true && passwordLength > i) {
      passwordGen += specialArray[Math.floor(Math.random() * 22)]
      i++
    }
  }
  return passwordGen
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




