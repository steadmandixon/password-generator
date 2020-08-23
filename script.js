// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var chooseLength = "";
var chooseNumbers;
var chooseLowercase;
var chooseCapitalcase;
var chooseSpecialCharacters;

//array
let lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numbers=["1","2","3","4","5","6","7","8","9","0"];
let specialCharacters=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

//function
function generatePassword() {
    var chooseLength = (prompt("Please choose character length (8-128)"));

    while(chooseLength <= 7 || chooseLength >= 51) {
        alert("Remember character length is from 8-128");
        var confirmLength = (prompt("Please choose character length (8-128)"));
        } 

        var chooseNumbers = confirm("Select ok to include Numbers");
        var chooseLowercase = confirm("Select ok to include lowercase Letters");
        var chooseCapitalcase = confirm("Select ok to include Capital Letters");
        var chooseSpecialCharacters = confirm("Select ok to include Special Characters");


            var passwordCharacters = []

            if (chooseNumbers) {
                passwordCharacters = passwordCharacters.concat(numbers)
              }
          
            if (chooseLowercase) {
                passwordCharacters = passwordCharacters.concat(lowerCase)
              }
                
            if (chooseCapitalcase) {
                passwordCharacters = passwordCharacters.concat(upperCase)
              }
          
            if (chooseSpecialCharacters) {
                passwordCharacters = passwordCharacters.concat(specialCharacters)
              }
          
                console.log(passwordCharacters)
          
                var randomPassword = ""
                
                for (var i = 0; i < confirmLength; i++) {
                  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
                  console.log(randomPassword)
                }
                return randomPassword;
          }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);