// Assignment code here
// Ask for lenght of password
var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128 "));
// Ask for character type
var characterType = prompt("Enter at least one character type: numerical, lowercase, uppercase, special"); // need to let them select more than one
characterType = characterType.split(",") // since they are passing multiple (e.g. numerical, lowercase) we split it based on comma to return an array (e.g. ['numerical', 'lowercase'])
// Generate Password
function generatePassword() {
    // define characterTYpe
    var characterSetLower = "abcdefghijklmnopqrstuvwxyz"; 
    var characterSetNumerical = "0123456789";
    var characterSetUpper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    var characterSetSpecial = "!@#$%^&*()_+~{}";

    var characterSet = []; // here we create a list of all the options

    // var characterTypeLower = characterType.toLowerCase(); // because this is now an array, we need to loop through and make them all lower case
    var characterTypeLower = characterType.map(name => name.toLowerCase().trim()); // lower case and remove spaces
    // if loup to check array
    if( characterTypeLower.includes("lowercase")) { 
        characterSet.push(characterSetLower)
        window.alert("You have chosen lowercase") ;
    }
    
    if ( characterTypeLower.includes("numerical")) {
        characterSet.push(characterSetNumerical);
        window.alert("You have chosen numerical");
    }
    if ( characterTypeLower.includes("uppercase")) { 
        characterSet.push(characterSetUpper)
        window.alert("You have chosen UPPERCASE")
    }
    if ( characterTypeLower.includes("special")) { 
        characterSet.push(characterSetSpecial)
        window.alert("You have chosen special")
    }
    // Return the value
    var returnVal = "";
    var randomCharSelect = "";
    for (var i = 0; i < length; i++) {
        // pick a character within characterSet at index of a random number
        randomCharSelect = characterSet[Math.floor(Math.random() * characterSet.length)]; // randomly select the type of character
        returnVal = returnVal.concat(randomCharSelect[(Math.floor(Math.random()) * randomCharSelect.length)]);
    }
    return returnVal;
}
alert(generatePassword());
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);